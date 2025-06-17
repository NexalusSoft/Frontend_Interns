import React from 'react';
import '../css/NewArrival.css';
import shopImg1 from '../image/services/shop-1.webp';
import shopImg2 from '../image/services/shop-2.webp';
import shopImg3 from '../image/services/shop-3.webp';
import shopImg4 from '../image/services/shop-4.webp';

interface Product {
    id: number;
    name: string;
    image: string;
    price: string;
    alt: string;
}

const products: Product[] = [
    {
        id: 1,
        name: 'Double Ended Driver Bit Set',
        image: shopImg1,
        price: '₹48.00 – ₹70.00',
        alt: 'Driver Bit Set',
    },
    {
        id: 2,
        name: 'Clutch Plate Kit',
        image: shopImg2,
        price: '₹55.00 – ₹80.00',
        alt: 'Clutch Plate Kit',
    },
    {
        id: 3,
        name: 'Portable Sliding Saw',
        image: shopImg3,
        price: '₹125.00 – ₹180.00',
        alt: 'Portable Sliding Saw',
    },
    {
        id: 4,
        name: 'Engine Mainshaft Gear',
        image: shopImg4,
        price: '₹18.00 – ₹25.00',
        alt: 'Engine Mainshaft Gear',
    },
];

function NewArrival() {
    return (
        <section style={{ textAlign: 'center', marginTop: '100px', marginBottom: '40px' }}>
            <h5 style={{ color: '#FFAA4A', letterSpacing: '4px', fontWeight: 'lighter', marginBottom: '40px'}}>New Arrival</h5>
            <h1 style={{ marginBottom: '70px'}}>Hand Picked Machinary Tools</h1>

            <div className="product-grid">
                {products.map((product) => (
                    <div className="product-card" key={product.id}>
                        <div className="hover-area">
                            <div className="product-image">
                                <img src={product.image} alt={product.alt} />
                                <div className="icon-boxes">
                                    <button><i className="bi bi-cart3"></i></button>
                                    <button><i className="bi bi-heart"></i></button>
                                    <button><i className="bi bi-eye"></i></button>
                                </div>
                            </div>
                            <div className="product-name">{product.name}</div>
                        </div>
                        <div className="product-price">{product.price}</div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default NewArrival;
