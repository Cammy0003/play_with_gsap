import gsap from 'gsap';
//import { useGSAP } from '@gsap/react';
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
    // console.log("This is ", typeof Card)
    const cards = ["Physics", "Math", "Philosophy", "Art", "Code"];

    const containerStyle: React.CSSProperties = {
        position: 'relative',
        width: '100%',
        height: '600px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }

    useGSAP(() => {
       gsap.to(".custom-card", {
           x: () => (Math.random() - 0.5) * window.innerWidth * 0.8,
           y: () => (Math.random() - 0.5) * window.innerWidth * 0.8,
           rotation: () => (Math.random() - 0.5) * 180,

          duration: 1.5,
          ease: "expo.out",
          stagger: 0.05,

          force3D: true,
       });
    }, { scope: container });


    return (
        <div
            ref={container}
            style={containerStyle}
        >
            {cards.map((text, i) => (
                <Card key={i} title={text}>
                    <p>Level {i + 1} Expertise</p>
                </Card>
            ))}
        </div>
    );
};

export default ExplodingMenu;
