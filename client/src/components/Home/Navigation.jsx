import React from 'react'

const Navigation = () => {
  return (
    <>
            <nav class="desktop-navigation-menu">
            <div class="container">
                <ul class="desktop-menu-category-list">
                    <li class="menu-category">
                        <a href="#" class="menu-title">Home</a>
                    </li>

                    <li class="menu-category">
                        <a href="#" class="menu-title">Categories</a>

                        <div class="dropdown-panel">
                            <ul class="dropdown-panel-list">
                                <li class="menu-title"><a href="#">Electronics</a></li>
                                <li class="panel-list-item"><a href="#">Desktop</a></li>
                                <li class="panel-list-item"><a href="#">Laptop</a></li>
                                <li class="panel-list-item"><a href="#">Camera</a></li>
                                <li class="panel-list-item"><a href="#">Camera</a></li>
                                <li class="panel-list-item"><a href="#">Headphone</a></li>
                                <li class="panel-list-item">
                                    <img src="https://i.postimg.cc/MT2mT9ty/electronics-banner-1.jpg" alt="image" width="250" height="119"/>
                                </li>
                            </ul>

                            <ul class="dropdown-panel-list">
                                <li class="menu-title"><a href="#">Men's</a></li>
                                <li class="panel-list-item"><a href="#">Formal</a></li>
                                <li class="panel-list-item"><a href="#">Casual</a></li>
                                <li class="panel-list-item"><a href="#">Sports</a></li>
                                <li class="panel-list-item"><a href="#">Jacket</a></li>
                                <li class="panel-list-item"><a href="#">Sunglasses</a></li>
                                <li class="panel-list-item">
                                    <img src="https://i.postimg.cc/nVs954kx/mens-banner.jpg" alt="image" width="250" height="119"/>
                                </li>
                            </ul>

                            <ul class="dropdown-panel-list">
                                <li class="menu-title"><a href="#">Women's</a></li>
                                <li class="panel-list-item"><a href="#">Formal</a></li>
                                <li class="panel-list-item"><a href="#">Casual</a></li>
                                <li class="panel-list-item"><a href="#">Perfume</a></li>
                                <li class="panel-list-item"><a href="#">Cosmetics</a></li>
                                <li class="panel-list-item"><a href="#">Bags</a></li>
                                <li class="panel-list-item">
                                    <img src="https://i.postimg.cc/vT9Bmvq6/womens-banner.jpg" alt="image" width="250" height="119"/>
                                </li>
                            </ul>

                            <ul class="dropdown-panel-list">
                                <li class="menu-title"><a href="#">Electronics</a></li>
                                <li class="panel-list-item"><a href="#">Smart Watch</a></li>
                                <li class="panel-list-item"><a href="#">Smart TV</a></li>
                                <li class="panel-list-item"><a href="#">Keyboard</a></li>
                                <li class="panel-list-item"><a href="#">Mouse</a></li>
                                <li class="panel-list-item"><a href="#">Microphone</a></li>
                                <li class="panel-list-item">
                                    <img src="https://i.postimg.cc/htMGhvrM/electronics-banner-2.jpg" alt="image" width="250" height="119"/>
                                </li>
                            </ul>
                        </div>
                    </li>

                    <li class="menu-category">
                        <a href="#" class="menu-title">Men's</a>

                        <ul class="dropdown-list">
                            <li class="dropdown-item"><a href="#">Shirt</a></li>
                            <li class="dropdown-item"><a href="#">Shorts & Jeans</a></li>
                            <li class="dropdown-item"><a href="#">Safety Shoes</a></li>
                            <li class="dropdown-item"><a href="#">Wallet</a></li>
                        </ul>
                    </li>

                    <li class="menu-category">
                        <a href="#" class="menu-title">Women's</a>

                        <ul class="dropdown-list">
                            <li class="dropdown-item"><a href="#">Dress & Frock</a></li>
                            <li class="dropdown-item"><a href="#">Earrings</a></li>
                            <li class="dropdown-item"><a href="#">Necklace</a></li>
                            <li class="dropdown-item"><a href="#">Makeup Kit</a></li>
                        </ul>
                    </li>

                    <li class="menu-category">
                        <a href="#" class="menu-title">Jewelyr</a>

                        <ul class="dropdown-list">
                            <li class="dropdown-item"><a href="#">Earrings</a></li>
                            <li class="dropdown-item"><a href="#">Couple Rings</a></li>
                            <li class="dropdown-item"><a href="#">Necklace</a></li>
                            <li class="dropdown-item"><a href="#">Bracelets</a></li>
                        </ul>
                    </li>

                    <li class="menu-category">
                        <a href="#" class="menu-title">Perfume</a>

                        <ul class="dropdown-list">
                            <li class="dropdown-item"><a href="#">Clothes Perfume</a></li>
                            <li class="dropdown-item"><a href="#">Deodorant</a></li>
                            <li class="dropdown-item"><a href="#">Flower Fragrance</a></li>
                            <li class="dropdown-item"><a href="#">Air Freshener</a></li>
                        </ul>
                    </li>

                    <li class="menu-category">
                        <a href="#" class="menu-title">Blog</a>
                    </li>

                    <li class="menu-category">
                        <a href="#" class="menu-title">Hot Offers</a>
                    </li>
                </ul>
            </div>
        </nav>

    </>
  )
}

export default Navigation