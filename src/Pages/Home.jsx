import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProviders';
import Banner from '../Components/Banner';

const Home = () => {
    const {user} = useContext(AuthContext)
    console.log(user);
    return (
        <div>
            <Banner></Banner>
            
        </div>
    );
};

export default Home;