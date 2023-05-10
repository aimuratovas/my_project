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
            <div>
                <h3>Featured Products</h3>
            </div>
            <div class="card-group">
            <div class="card">
                <img class="card-img-top" src="//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/001/046/original/open-uri20180708-4-1f333k1?1531086651" height="500" width="200" alt="Card image cap"/>
                <div class="card-body">
                <h5 class="card-title">Lippie Stix</h5>
                <p class="card-text">Lippie Stix Formula contains Vitamin E, Mango, Avocado, and Shea butter for added comfort and moisture. None of our Lippie formulas contain any nasty ingredients like Parabens or Sulfates.</p>
                <a class="info" href="">For product details</a>
                </div>  
            </div>
            <div class="card">
                <img class="card-img-top" src="//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/001/034/original/open-uri20180630-4-1n63e1y?1530390382" height="500" width="200" alt="Card image cap"/>
                <div class="card-body">
                <h5 class="card-title">Multi Purpose Powder </h5>
                <p class="card-text">Our Multi Purpose Pressed Powders may be used as eye shadow, brow powder, eye liner, or for highlighting. Blended with antioxidants from Certified Organic Fruits, Berries &amp; Botanicals*. No gluten derived ingredients. VEGAN.</p>
                <a class="info" href="">For product details</a>
                </div>
            </div>
            <div class="card">
                <img class="card-img-top" src="//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/001/001/original/open-uri20171227-4-1das33x?1514342770" height="500" width="200" alt="Card image cap"/>
                <div class="card-body">
                <h5 class="card-title">Haloscope</h5>
                <p class="card-text">Skincare + makeup = Haloscope, the galaxy’s first dew effect highlighter. It’s a dual-delivery formula: the outer halo is infused with genuine crystal extracts for all-day enlightenment, with a solid oil core of vitamin-rich moisturizers for a hydrated, dewy finish.</p>
                <a class="info" href="">For product details</a>
                </div>
            </div>
            </div>
        </body>
     );
}
 
export default Home;