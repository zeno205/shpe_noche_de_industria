// Custom Parallax emulator for iOS
import { useState, useEffect } from 'react';
const Parallax = ({ className = '', background }) => {
    const [scrollY, setScrollY] = useState(0);
    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <div className={className}
            style={{
                transform: `translateY(${scrollY}px)`,
                backgroundImage: `url('${background}')`
            }}
        />);
};
export default Parallax;