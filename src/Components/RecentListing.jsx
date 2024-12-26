import axios from 'axios';
import React, { useEffect, useState } from 'react';
import RecentCard from './RecentCard';
import Loading from './Loading';

const RecentListing = () => {
    const [cars, setCars] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('https://rentride-ecru.vercel.app/cars/recent')
            .then(res => {
                console.log(res.data);
                setCars(res.data);
                setLoading(false);
            })
            .catch(error => {
                console.error("Error fetching cars:", error);
                setLoading(false);
            });
    }, []);

    return (
        <div className='container mx-auto text-center my-4'>
            <p className='uppercase text-3xl font-extrabold border-b-4 my-6'>Recent Listing</p>
            {loading ? (
                <Loading />
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {cars.map((car, idx) => (
                        <RecentCard key={idx} car={car} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default RecentListing;
