import React from 'react';
import Styles from './Home.module.css';
import logoStyles from "../../styles/logo.module.css";



const Home: React.FC = () =>  {
    return (
        <div className={Styles.container}>
            <div className={logoStyles.logo}>
                <span className={logoStyles.logoText}>PLAYGROUND</span>
            </div>
            <p>This is the middle</p>
        </div>
    )
};

export default Home;