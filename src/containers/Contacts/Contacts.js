import React from 'react';
import NavBar from "../../components/NavBar/NavBar";
import './Contacts.css';

const Contacts = () => {
    return (
        <>
            <NavBar/>

            <div className='contacts'>
                <p>ул. Медерова</p>
                <p>График работы: Пн-Сб 9-18, Вс 9-18</p>
                <p>0798951351</p>
            </div>
        </>

    );
};

export default Contacts;