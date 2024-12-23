import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProviders';
import Banner from '../Components/Banner';
import WhyChoose from '../Components/WhyChoose';

const Home = () => {
    const {user} = useContext(AuthContext)
    console.log(user);
    return (
        <div>
            <Banner></Banner>
            <WhyChoose></WhyChoose>
        </div>
    );
};

export default Home;