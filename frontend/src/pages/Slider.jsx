import React from 'react';
import baner_1 from '../assets/vegitables.jpg';
import baner_2 from '../assets/pumpkin.webp';
import baner_3 from '../assets/fruits.jpg';


function Slider() {


    return (
        <>
            <div id="carouselExample" className="carousel slide top-section">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={baner_2} className="d-block w-100" style={{ height: '500px', backgroundPosition: 'center',objectFit:'cover'}} alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={baner_1} className="d-block w-100" style={{ height: '500px', backgroundPosition: 'center',objectFit:'cover' }} alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={baner_3} className="d-block w-100" style={{ height: '500px', backgroundPosition: 'center' ,objectFit:'cover'}} alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
    )
}

export default Slider