import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProviders';
import Banner from '../Components/Banner';
import WhyChoose from '../Components/WhyChoose';
import RecentListing from '../Components/RecentListing';

const Home = () => {
    const {user} = useContext(AuthContext)
    console.log(user);
    return (
        <div>
            <Banner></Banner>
            <WhyChoose></WhyChoose>
            <RecentListing></RecentListing>
        </div>
    );
};

export default Home;