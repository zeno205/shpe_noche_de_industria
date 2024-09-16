import { useState, useEffect, useCallback } from 'react';

const Parallax = ({ className = '', background, speed = 0.5 }) => {
    const [transform, setTransform] = useState('translateY(0px)');

    const handleScroll = useCallback(() => {
        const scrollY = window.scrollY;
        requestAnimationFrame(() => {
            setTransform(`translateY(${scrollY * speed}px)`);
        });
    }, [speed]);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [handleScroll]);

    return (
        <div
            className={className}
            style={{
                transform,
                backgroundImage: `url('${background}')`,
                willChange: 'transform'
            }}
        />
    );
};

export default Parallax;