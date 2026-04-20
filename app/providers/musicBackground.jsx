"use client";
import { useRef, useState } from 'react';

export default function BackgroundMusic() {
    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const startMusic = () => {
        if (audioRef.current && !isPlaying) {
            audioRef.current.volume = 0.3;
            audioRef.current.play()
                .then(() => {
                    setIsPlaying(true);
                    console.log("Music started");
                })
                .catch(error => console.log("Play failed:", error));
        }
    };

    if (!isPlaying) {
        return (
            <>
                <audio ref={audioRef} src="/avenger.mp3" loop />
                <div
                    onClick={startMusic}
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'rgba(0,0,0,0.7)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        zIndex: 9999,
                        cursor: 'pointer'
                    }}
                >
                    <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '10px' }}>
                        Klik di mana saja untuk membuka Website
                    </div>
                </div>
            </>
        );
    }

    return <audio ref={audioRef} src="/avenger.mp3" loop autoPlay />;
}