import React from 'react';
import image1 from '../../img/image1.jpg'
import image2 from '../../img/image2.jpg'
import image3 from '../../img/image3.jpg'
import image4 from '../../img/image4.jpg'
import image5 from '../../img/image5.jpg'
import image6 from '../../img/image6.jpg'

export default () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-12">
                    <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                        <div className="carousel-inner" style={{height: "450px"}}>
                            <div className="carousel-item active">
                                <img src={image1} className="d-block w-100 .img-fluid. max-width: 100%" alt="..." style={{ height: "450px" }} />
                            </div>
                            <div className="carousel-item">
                                <img src={image2} className="d-block w-100 .img-fluid. max-width: 100%" alt="..." style={{ height: "450px" }} />
                            </div>
                            <div className="carousel-item">
                                <img src={image3} className="d-block w-100" alt="..." style={{ height: "450px" }} />
                            </div>
                            <div className="carousel-item">
                                <img src={image4} className="d-block w-100" alt="..." style={{ height: "450px" }} />
                            </div>
                            <div className="carousel-item">
                                <img src={image5} className="d-block w-100" alt="..." style={{ height: "450px" }} />
                            </div>
                            <div className="carousel-item">
                                <img src={image6} className="d-block w-100" alt="..." style={{ height: "250px" }} />
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
