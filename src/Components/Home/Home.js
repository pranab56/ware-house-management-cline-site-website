import React from 'react';
import './Home.css';
import useItems from '../../Hooks/useItems';
import Carousel from '../Carousel/Carousel';
import CustomLink from '../CustomLink/CustomLink';
import InItems from '../InItems/InItems';
import Extra1 from '../Extra1/Extra1';
import Review from '../Review/Review';

const Home = () => {
    const [Items] = useItems()
    return (
        <div className='home'>
            <div>
                <Carousel></Carousel>
            </div>
            <div>
                <h2 className="text-center">Collections</h2>
                <Extra1></Extra1>
            </div>
            <div className='mt-5'>
                <h2 className='text-center text-success'>Inventory Items</h2>
                <div className="mt-5 grid">
                    {
                        Items.slice(0, 6).map(item => <InItems
                            key={item._id}
                            item={item} >
                        </InItems>)
                    }
                </div>
                <div className='d-flex justify-content-center mt-2 bottom mb-5'>
                    <CustomLink to="/inventory" className="login-btn p-2 rounded">Show All Items</CustomLink>
                </div>
            </div>
            <div>
                <Review></Review>
            </div>
        </div>
    );
};

export default Home;