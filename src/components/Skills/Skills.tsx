import React from 'react';
import Image from '../../images/some-img.jpg';
import './Skills.css'; 
import { ClockLoader } from 'react-spinners';

const Skills: React.FC = () => {
    return (
    <div className="skills-container">
        <div className='skills-list'>
            <h3>Skills and Expertise</h3>
            <nav>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>React</li>
                    <li>Bootstrap</li>
                    <li>MobX</li>
                    <li>API</li>
                    <li>Github</li>
                    <li>Figma</li>
                    <li>Tilda</li>
                    <li>BEM</li>
                    <li>Saas</li>
                </ul>
                </nav>
                <div className='learning'>
                <p>Learning:  Next.js, TypeScript ...</p>
                    <ClockLoader size={35} color={"#cdc9c9"} />
                </div>
            </div>
            <div className="image-text-wrapper">
            <div className="skills-summary">
                <p>I excel at creating responsive, cross-browser compatible, valid, and semantic websites and applications.</p>
            </div>
                <img src={Image} alt="some-img" className="skills-image" />
            </div>
    </div>
  );
};

export default Skills;