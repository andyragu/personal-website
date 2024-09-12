import { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import './NavBar.css'

function NavBar() {

    const typedElement = useRef(null);

    useEffect(() => {
        // Define options for the typing effect
        const options = {
            strings: ["Andres Agudelo"], // You need to provide an array of strings
            typeSpeed: 75, // Typing speed in milliseconds
            loop: false
        };

        // Initialize the Typed instance on the referenced element
        const typed = new Typed(typedElement.current, options);

        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <nav className='App'>
            <div className='container mx-auto px-5 py-5 md:flex items-center gap-8'>
                <div className='flex items-center justify-between md:w-auto w-full'>
                    <a href='#home' className='font-mono font-bold text-xl text-zinc-200 antialiased'>
                        <span ref={typedElement}></span>
                    </a>
                </div>
            </div>
        </nav>        
    );
};

export default NavBar;