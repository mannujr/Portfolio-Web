import React, { useEffect, useState } from 'react';

export const Eyes = () => {
    const [rotate, setRotate] = useState(0);
    const [offset, setOffset] = useState({ x: 0, y: 0 });
    const [targetOffset, setTargetOffset] = useState({ x: 0, y: 0 });


    useEffect(() => {
        const handleMouseMove = (e) => {
            const mouseX = e.clientX;
            const mouseY = e.clientY;

            const centerX = window.innerWidth / 2;
            const centerY = window.innerHeight / 2;

            const deltaX = mouseX - centerX;
            const deltaY = mouseY - centerY;

            // Calculate rotation angle
            const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
            setRotate(angle - 180);

            // Calculate target offset for pupil movement
            const maxOffset = 20; // Maximum movement range for the pupil
            const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
            const scaleFactor = Math.min(1, maxOffset / distance);

            setTargetOffset({
                x: deltaX * scaleFactor,
                y: deltaY * scaleFactor,
            });
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    useEffect(() => {
        let animationFrame;

        const smoothMovement = () => {
            setOffset((currentOffset) => {
                const easingFactor = 0.1; // Controls smoothness (lower = slower movement)
                const newX =
                    currentOffset.x +
                    (targetOffset.x - currentOffset.x) * easingFactor;
                const newY =
                    currentOffset.y +
                    (targetOffset.y - currentOffset.y) * easingFactor;

                return { x: newX, y: newY };
            });

            animationFrame = requestAnimationFrame(smoothMovement);
        };

        smoothMovement();

        return () => cancelAnimationFrame(animationFrame);
    }, [targetOffset]);

    return (
        <div   className="eyes w-full h-screen overflow-hidden bg-zinc-100 p-5">
            <div data-scroll data-scroll-section data-scroll-speed="-.7" className="relative w-full h-full bg-cover bg-center p-2 bg-[url('https://images.pexels.com/photos/24280146/pexels-photo-24280146/free-photo-of-curious-kitten-peeking-out-from-the-stairs.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')]">

            <h1 className='text-[12vw] lg:text-[6vw] text-center'>Ready to look at my Code Projects???</h1>
                <div className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] flex items-center gap-10 content-between">
                    {/* Left Eye */}
                    <div className="w-[15vw] shadow-black shadow-lg h-[15vw] bg-white p-1 rounded-full flex items-center justify-center overflow-hidden">
                        <div
                            className="w-3/4 h-3/4 bg-zinc-800 flex justify-center items-center rounded-full"
                            style={{
                                transform: `translate(${offset.x}px, ${offset.y}px)`,
                            }}
                        >
                            <div
                                style={{ transform: `rotate(${rotate}deg)` }}
                                className="line w-full h-10 p-1"
                            >
                                <div className="w-[3vw] h-[3vw] bg-white rounded-full"></div>
                            </div>
                        </div>
                    </div>
                    {/* Right Eye */}
                    <div className="w-[15vw] h-[15vw] shadow-black shadow-lg bg-white p-1 rounded-full flex items-center justify-center overflow-hidden">
                        <div
                            className="w-3/4 h-3/4 bg-zinc-800 flex justify-center items-center rounded-full"
                            style={{
                                transform: `translate(${offset.x}px, ${offset.y}px)`,
                            }}
                        >
                            <div
                                style={{ transform: `rotate(${rotate}deg)` }}
                                className="line w-full h-10 p-1"
                            >
                                <div className="w-[3vw] h-[3vw] bg-white rounded-full"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
