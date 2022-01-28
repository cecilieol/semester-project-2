export function displayHero(heroBanner) {
    const heroContainer = document.querySelector(".hero-container");
    heroContainer.innerHTML = "";
        
    heroContainer.innerHTML = `<img id="hero"
                                    src="${heroBanner.hero_banner_image_url}" 
                                    alt="${heroBanner.hero_banner.alternativeText}" 
                                    width="100%">
                                    <div class="intro-box">
                                        <h2>The recipe for a long and healthy life</h2>
                                        <p>...starts in the kitchen. 
                                        That is why we want to provide you with quality products, 
                                        and assure your safety by bringing them directly home to you.</p>
                                        <p>Fill up your shopping cart, and we will do the rest.</p>
                                        <a href="products.html">
                                            <button class="btn browse">Browse products</button>
                                        </a>
                                    </div>`;
}