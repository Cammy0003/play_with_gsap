// import gsap from 'gsap';
// import { useGSAP } from '@gsap/react';
import React from 'react';
import Card from './components/Card.tsx';

{/*
TODO
    Create a simple list of "cards" or "menu items", that animate into the view one by one,
    with a slight delay between each, but trigger a "scatter" effect when you click a "Reset" button.
*/}



const ExplodingMenu: React.FC = () => {
    return (
        <div>
            <Card title="Project Alpha" borderColor="blue">
                <p>This card contains standard text elements.</p>
            </Card>
        </div>
    )
}

export default ExplodingMenu;
