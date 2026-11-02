const projects = [
    {
        src: 'images/fireAlarmSystem.webp',
        alt: 'Fire alarm control panel',
        title: 'Fire alarm system',
        caption: 'Addressable fire detection and alarm panel',
        category: 'fire',
        tags: 'smoke heat detection panel addressable'
    },
    {
        src: 'images/CCTV2.webp',
        alt: 'CCTV camera and recorder',
        title: 'IP CCTV and recording',
        caption: 'IP camera with network video recorder',
        category: 'cctv',
        tags: 'camera nvr dvr surveillance video'
    },
    {
        src: 'images/cctv.jpg',
        alt: 'CCTV camera with city lights at night',
        title: 'Night-time surveillance',
        caption: 'Perimeter monitoring in low light',
        category: 'cctv',
        tags: 'night perimeter outdoor camera'
    },
    {
        src: 'images/accessControl2.webp',
        alt: 'Biometric access control at a door',
        title: 'Biometric door access',
        caption: 'Controlled entry for secure zones',
        category: 'access',
        tags: 'biometric door entry fingerprint face'
    },
    {
        src: 'images/accessControl.webp',
        alt: 'Access control graphic',
        title: 'Access control credentials',
        caption: 'Keycard and credential-based access',
        category: 'access',
        tags: 'rfid keycard card credential turnstile'
    }
];

const grid = document.getElementById('gallery-grid');
const searchInput = document.getElementById('gallery-search');
const filterButtons = document.querySelectorAll('.filter-btn');
const statusText = document.getElementById('gallery-status');

const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxCaption = document.getElementById('lightbox-caption');
const closeBtn = lightbox.querySelector('.lightbox-close');
const prevBtn = lightbox.querySelector('.lightbox-prev');
const nextBtn = lightbox.querySelector('.lightbox-next');

let activeFilter = 'all';
let visibleProjects = [];
let currentIndex = 0;
let lastTrigger = null;


function matchesFilters(project) {
    const words = searchInput.value.trim().toLowerCase().split(/\s+/).filter(Boolean);
    const haystack = `${project.title} ${project.caption} ${project.tags}`.toLowerCase();
    const matchesCategory = activeFilter === 'all' || project.category === activeFilter;
    const matchesSearch = words.every(word => haystack.includes(word));
    return matchesCategory && matchesSearch;
}

function renderGallery() {
    visibleProjects = projects.filter(matchesFilters);
    grid.innerHTML = '';

    visibleProjects.forEach((project, index) => {
        const item = document.createElement('button');
        item.type = 'button';
        item.className = 'gallery-item';

        const img = document.createElement('img');
        img.src = project.src;
        img.alt = project.alt;
        img.loading = 'lazy';

        const label = document.createElement('span');
        label.textContent = project.title;

        item.append(img, label);
        item.addEventListener('click', () => openLightbox(index, item));
        grid.appendChild(item);
    });

    statusText.textContent = visibleProjects.length
        ? `Showing ${visibleProjects.length} of ${projects.length} projects`
        : 'No projects match your search. Try a different word or filter.';
}

function showLightboxImage() {
    const project = visibleProjects[currentIndex];
    lightboxImg.src = project.src;
    lightboxImg.alt = project.alt;
    lightboxCaption.textContent = `${project.title}: ${project.caption}`;
}

function openLightbox(index, trigger) {
    currentIndex = index;
    lastTrigger = trigger;
    showLightboxImage();
    lightbox.classList.add('open');
    document.body.style.overflow = 'hidden';
    closeBtn.focus();
}

function closeLightbox() {
    lightbox.classList.remove('open');
    document.body.style.overflow = '';
    if (lastTrigger) lastTrigger.focus();
}

function stepLightbox(direction) {
    currentIndex = (currentIndex + direction + visibleProjects.length) % visibleProjects.length;
    showLightboxImage();
}

closeBtn.addEventListener('click', closeLightbox);
prevBtn.addEventListener('click', () => stepLightbox(-1));
nextBtn.addEventListener('click', () => stepLightbox(1));

lightbox.addEventListener('click', event => {
    if (event.target === lightbox) closeLightbox();
});

document.addEventListener('keydown', event => {
    if (!lightbox.classList.contains('open')) return;
    if (event.key === 'Escape') closeLightbox();
    if (event.key === 'ArrowRight') stepLightbox(1);
    if (event.key === 'ArrowLeft') stepLightbox(-1);
});

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        activeFilter = button.dataset.filter;
        filterButtons.forEach(btn => {
            const isActive = btn === button;
            btn.classList.toggle('is-active', isActive);
            btn.setAttribute('aria-pressed', String(isActive));
        });
        renderGallery();
    });
});

searchInput.addEventListener('input', renderGallery);

renderGallery();