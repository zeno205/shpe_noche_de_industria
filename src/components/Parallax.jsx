import { useRef, useEffect } from 'react';

const Parallax = ({ className = '', background, speed = 0.7 }) => {
    const parallaxRef = useRef(null);
    const ticking = useRef(false);
    const lastScrollY = useRef(0);

    useEffect(() => {
        const parallaxElement = parallaxRef.current;
        if (!parallaxElement) return;

        const applyParallax = () => {
            const scrollY = window.scrollY;
            if (scrollY !== lastScrollY.current) {
                const translateY = scrollY * speed;
                parallaxElement.style.transform = `translate3d(0, ${translateY}px, 0)`;
                lastScrollY.current = scrollY;
            }
            ticking.current = false;
        };

        const onScroll = () => {
            if (!ticking.current) {
                requestAnimationFrame(applyParallax);
                ticking.current = true;
            }
        };

        // Use IntersectionObserver to optimize for off-screen elements
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        window.addEventListener('scroll', onScroll, { passive: true });
                    } else {
                        window.removeEventListener('scroll', onScroll);
                    }
                });
            },
            { rootMargin: '100px' }
        );

        observer.observe(parallaxElement);

        return () => {
            window.removeEventListener('scroll', onScroll);
            observer.disconnect();
        };
    }, [speed]);

    return (
        <div
            ref={parallaxRef}
            className={className}
            style={{
                backgroundImage: `url('${background}')`,
                willChange: 'transform',
                transform: 'translate3d(0, 0, 0)',
                backfaceVisibility: 'hidden',
                perspective: 1000,
            }}
        />
    );
};

export default Parallax;