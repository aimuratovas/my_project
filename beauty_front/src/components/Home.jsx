import React from "react";

const Home = () => {   
    return (
        <body>
            <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active"></li>
                    <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"></li>
                    <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"></li>
                </ol>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img class="d-block w-100" src="https://www.glossy.co/wp-content/uploads/sites/4/2021/04/AdobeStock_386316827.jpeg" width="500" height="800" alt="First slide"/>
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100" src="https://hips.hearstapps.com/hmg-prod/images/ghk-digital-index-haircolor-449-640a4807297b5.jpg" width="500" height="800" alt="Second slide"/>
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100" src="https://oec.world/api/image?slug=bilateral-product&memberSlug=beauty-products&size=splash" width="500" height="800" alt="Third slide"/>
                </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                <div>
                    <h3 style={{ textAlign: 'center' }}>Customer Feedback</h3>
                    <iframe
                        src="https://docs.google.com/forms/d/e/1FAIpQLSeigh2I1mF6yjx_vArb1LVzjJKf6LNIm6r8s4pS00bmowagLA/viewform?embedded=true"
                        width="640"
                        height="645"
                        >
                        Loading…
                    </iframe>
                </div>
            </div>
        </body>
     );
}
 
export default Home;