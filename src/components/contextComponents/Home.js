import React, { Component, useContext } from 'react';
import UserContext from './UserContext';
import { Button } from 'reactstrap';

const Home = () => {
    const { value, setValue } = useContext(UserContext);
    return <>
        <h4>Home</h4>
        <h5>{value}</h5>
        <Button onClick={() => setValue(value + 1)} >Click to chabe value</Button>
    </>
}

export default Home;
