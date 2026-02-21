import gsap from 'gsap';
import { useRef } from 'react';
import React from 'react';
import Card from './components/Card.tsx';
import {useGSAP} from "@gsap/react";

{/*
TODO
    Create a simple list of "cards" or "menu items", that animate into the view one by one,
    with a slight delay between each, but trigger a "scatter" effect when you click a "Reset" button.
*/}



const ExplodingMenu: React.FC = () => {
    const container = useRef<HTMLDivElement>(null);
    const cards = ["Physics", "Math", "Philosophy", "Art", "Code"];

    const containerStyle: React.CSSProperties = {
        position: 'relative',
        width: '100%',
        minHeight: 'calc(100vh - 100px)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',

    }

    useGSAP(() => {
       gsap.from(".custom-card", {
          y: 100,
           opacity: 0,
           duration: 2.0,
           stagger: 0.1,
           ease: "power4.out",
       });
    }, { scope: container });

    const scatter = () => {
       gsap.to(".custom-card", {
           x: () => (Math.random() - 0.5) * window.innerWidth * 0.8,
           y: () => (Math.random() - 0.5) * window.innerWidth * 0.8,
           rotation: () => (Math.random() - 0.5) * 180,

          duration: 1.5,
          ease: "expo.out",
          stagger: 0.05,

          force3D: true,
       })
    };

    const buttonWrapperStyle: React.CSSProperties = {
        position: 'absolute',
        top: '20px',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 100,
    }


    return (
        <div
            ref={container}
            style={containerStyle}
        >
            <div style={buttonWrapperStyle}>
                <button
                    onClick={scatter}
                    style={{
                        padding: '10px 20px',
                        backgroundColor: 'black',
                        color: 'red',
                        border: '2px solid red',
                        borderRadius: '8px',
                        cursor: 'pointer',
                        fontWeight: 'bold'
                    }}
                >
                    Scatter
                </button>
            </div>
            {cards.map((text, i) => (
                <Card key={i} title={text}>
                    <p>Level {i + 1} Expertise</p>
                </Card>
            ))}
        </div>
    );
};

export default ExplodingMenu;
