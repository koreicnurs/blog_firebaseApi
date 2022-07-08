import React from 'react';
import NavBar from "../../components/NavBar/NavBar";
import './About.css';

const About = () => {
    return (
        <>
            <NavBar/>

            <div className='about'>
                <h4>About us</h4>
                <p>We exist to help people with creative ideas stand out and succeed. We create a modern platform that
                    enables millions to build a brand, share their stories, and transact with their customers in an
                    impactful and beautiful online presence.</p>
                <h5>Millions</h5>
                <p>Since launch, millions of websites have been created on the Squarespace platform.</p>
            </div>
        </>

    );
};

export default About;