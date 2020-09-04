import React, { useState } from 'react';
import { Route, BrowserRouter, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import UserContext from './UserContext';

const ContextApp = () => {
    const [value, setValue] = useState(1)
    return (
        <div>
            <BrowserRouter>
                <nav>
                    <ul>
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                        <li>
                            <Link to='/about'>About</Link>
                        </li>
                    </ul>
                </nav>
                <UserContext.Provider value={{ value, setValue }}>
                    <Route path="/" exact component={Home}></Route>
                    <Route path="/about/" component={About}></Route>
                </UserContext.Provider>
            </BrowserRouter>
        </div>
    )
}

export default ContextApp;