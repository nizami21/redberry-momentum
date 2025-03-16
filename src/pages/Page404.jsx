import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

const Page404 = () => {
    return (
        <div className='w-full h-screen bg-gray-100 flex flex-col'>
            <Header />
            <div className='flex-1 flex flex-col items-center justify-center gap-6 pb-40'>
                <h1 className='text-7xl font-fredokaOne animate-pulse'>404</h1>
                <p className='text-3xl font-fredokaOne'>გვერდი ვერ მოიძებნა</p>
                <Link className='text-3xl font-fredokaOne text-purple hover:text-purple-light transition-all duration-200 delay-75' to='/'>მთავარ გვერდზე დაბრუნება</Link>
            </div>
        </div>
    );
};

export default Page404;