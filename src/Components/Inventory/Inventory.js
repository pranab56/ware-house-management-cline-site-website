import React, { useEffect, useState } from 'react';
import CustomLink from '../CustomLink/CustomLink';
import InItems from '../InItems/InItems';
import './Inventory.css'

const Inventory = () => {
    const [Items, setItems] = useState([])
    useEffect(() => {
        fetch('https://safe-coast-41091.herokuapp.com/inventory')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure delete it?');
        if (proceed) {
            const url = `https://safe-coast-41091.herokuapp.com/inventory/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    const remaining = Items.filter(item => item._id !== id);
                    setItems(remaining);
                })
        }
    }
    return (
        <div>
            <div className='in-margin'>
                <h2 className='text-center text-danger'>Inventory Items</h2>
                <div className='grid '>
                    {
                        Items.map(item => <InItems
                            key={item._id}
                            item={item}
                            handleDelete={handleDelete}>
                        </InItems>)
                    }
                </div>
                <div className='mb-5 d-flex justify-content-center align-items-center'>
                    <CustomLink to='/addFruits'><button className='login-btn'>Add New Fruits Item</button></CustomLink>
                </div>
            </div>
        </div>
    );
};

export default Inventory;