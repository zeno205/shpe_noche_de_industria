// Handle hover effects for touch devices (first interaction only)
function handleHoverEffect(event) {
    const target = event.target.closest('.hoverable'); // Find closest hoverable ancestor

    if (target) {
        let hoverClasses = [];

        // Get or set hover classes
        if (target.getAttribute('data-hover')) {
            hoverClasses = JSON.parse(target.getAttribute('data-hover'));
        } else {
            hoverClasses = Array.from(target.classList).filter(cls => cls.startsWith('hover:'));
            target.setAttribute('data-hover', JSON.stringify(hoverClasses));
        }

        // Apply hover effect on touch devices
        if (event.type === 'touchstart') {
            hoverClasses.forEach(cls => target.classList.add(cls));

            // Remove hover effect after a short delay
            setTimeout(() => {
                hoverClasses.forEach(cls => target.classList.remove(cls));
            }, 600);
        }
    }
}

// Set up hover effects for touch devices
function setupHoverEffects() {
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

    if (isTouchDevice) {
        document.body.addEventListener('touchstart', handleHoverEffect); // Delegate to body
    }
}

// Initialize hover effects when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', setupHoverEffects);

