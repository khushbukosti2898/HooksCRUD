import React, { Component, useContext } from 'react';
import UserContext from './UserContext';

const About = () => {
    const { value, setValue } = useContext(UserContext);
    return <>
        <h4>About</h4>
        <h5>{value}</h5>
    </>
}

export default About;