import React from 'react'

const SidebarCategory = () => {
  return (
    <>
             <div class="sidebar-category">
                        <div class="sidebar-top">
                            <h2 class="sidebar-title">Category</h2>

                            <button class="sidebar-close-btn" data-mobile-menu-close-btn>
                                <ion-icon name="close-outline"></ion-icon>
                            </button>
                        </div>

                        <ul class="sidebar-menu-category-list">
                            <li class="sidebar-menu-category">
                                <button class="sidebar-accordion-menu" data-accordion-btn>
                                    <div class="menu-title-flex">
                                        <img src="https://i.postimg.cc/Xv9x15Q8/dress.png" alt="clothes" class="menu-title-img" width="20" height="20"/>
                                        <p class="menu-title">Clothes</p>
                                    </div>

                                    <div>
                                        <ion-icon name="add-outline" class="add-icon"></ion-icon>
                                        <ion-icon name="remove-outline" class="remove-icon"></ion-icon>
                                    </div>
                                </button>

                                <ul class="sidebar-submenu-category-list" data-accordion>
                                    <li class="sidebar-submenu-category">
                                        <a href="#" class="sidebar-submenu-title">
                                            <p class="product-name">Shirt</p>
                                            <data value="300" class="stock" title="Available Stock">300</data>
                                        </a>
                                    </li>

                                    <li class="sidebar-submenu-category">
                                        <a href="#" class="sidebar-submenu-title">
                                            <p class="product-name">Shorts & Jeans</p>
                                            <data value="60" class="stock" title="Available Stock">60</data>
                                        </a>
                                    </li>

                                    <li class="sidebar-submenu-category">
                                        <a href="#" class="sidebar-submenu-title">
                                            <p class="product-name">Jacket</p>
                                            <data value="50" class="stock" title="Available Stock">50</data>
                                        </a>
                                    </li>

                                    <li class="sidebar-submenu-category">
                                        <a href="#" class="sidebar-submenu-title">
                                            <p class="product-name">Dress & Frock</p>
                                            <data value="87" class="stock" title="Available Stock">87</data>
                                        </a>
                                    </li>
                                </ul>
                            </li>

                            <li class="sidebar-menu-category">
                                <button class="sidebar-accordion-menu" data-accordion-btn>
                                    <div class="menu-title-flex">
                                        <img src="https://i.postimg.cc/d3RBQZhB/shoes.png" alt="footwear" class="menu-title-img" width="20" height="20"/>
                                        <p class="menu-title">Footwear</p>
                                    </div>

                                    <div>
                                        <ion-icon name="add-outline" class="add-icon"></ion-icon>
                                        <ion-icon name="remove-outline" class="remove-icon"></ion-icon>
                                    </div>
                                </button>

                                <ul class="sidebar-submenu-category-list" data-accordion>
                                    <li class="sidebar-submenu-category">
                                        <a href="#" class="sidebar-submenu-title">
                                            <p class="product-name">Sports</p>
                                            <data value="45" class="stock" title="Available Stock">45</data>
                                        </a>
                                    </li>

                                    <li class="sidebar-submenu-category">
                                        <a href="#" class="sidebar-submenu-title">
                                            <p class="product-name">Formal</p>
                                            <data value="75" class="stock" title="Available Stock">75</data>
                                        </a>
                                    </li>

                                    <li class="sidebar-submenu-category">
                                        <a href="#" class="sidebar-submenu-title">
                                            <p class="product-name">Casual</p>
                                            <data value="35" class="stock" title="Available Stock">35</data>
                                        </a>
                                    </li>

                                    <li class="sidebar-submenu-category">
                                        <a href="#" class="sidebar-submenu-title">
                                            <p class="product-name">Safety Shoes</p>
                                            <data value="26" class="stock" title="Available Stock">26</data>
                                        </a>
                                    </li>
                                </ul>
                            </li>

                            <li class="sidebar-menu-category">
                                <button class="sidebar-accordion-menu" data-accordion-btn>
                                    <div class="menu-title-flex">
                                        <img src="https://i.postimg.cc/Y9HLrnY5/jewelry.png" alt="jewelyr" class="menu-title-img" width="20" height="20"/>
                                        <p class="menu-title">Jewelyr</p>
                                    </div>

                                    <div>
                                        <ion-icon name="add-outline" class="add-icon"></ion-icon>
                                        <ion-icon name="remove-outline" class="remove-icon"></ion-icon>
                                    </div>
                                </button>

                                <ul class="sidebar-submenu-category-list" data-accordion>
                                    <li class="sidebar-submenu-category">
                                        <a href="#" class="sidebar-submenu-title">
                                            <p class="product-name">Earrings</p>
                                            <data value="46" class="stock" title="Available Stock">46</data>
                                        </a>
                                    </li>

                                    <li class="sidebar-submenu-category">
                                        <a href="#" class="sidebar-submenu-title">
                                            <p class="product-name">Couple Rings</p>
                                            <data value="73" class="stock" title="Available Stock">73</data>
                                        </a>
                                    </li>

                                    <li class="sidebar-submenu-category">
                                        <a href="#" class="sidebar-submenu-title">
                                            <p class="product-name">Necklace</p>
                                            <data value="61" class="stock" title="Available Stock">61</data>
                                        </a>
                                    </li>

                                </ul>
                            </li>

                            <li class="sidebar-menu-category">
                                <button class="sidebar-accordion-menu" data-accordion-btn>
                                    <div class="menu-title-flex">
                                        <img src="https://i.postimg.cc/6q67R8Hz/perfume.png" alt="perfume" class="menu-title-img" width="20" height="20"/>
                                        <p class="menu-title">Perfume</p>
                                    </div>

                                    <div>
                                        <ion-icon name="add-outline" class="add-icon"></ion-icon>
                                        <ion-icon name="remove-outline" class="remove-icon"></ion-icon>
                                    </div>
                                </button>

                                <ul class="sidebar-submenu-category-list" data-accordion>
                                    <li class="sidebar-submenu-category">
                                        <a href="#" class="sidebar-submenu-title">
                                            <p class="product-name">Clothes Perfume</p>
                                            <data value="12" class="stock" title="Available Stock">12 pcs</data>
                                        </a>
                                    </li>

                                    <li class="sidebar-submenu-category">
                                        <a href="#" class="sidebar-submenu-title">
                                            <p class="product-name">Deodorant</p>
                                            <data value="60" class="stock" title="Available Stock">60 pcs</data>
                                        </a>
                                    </li>

                                    <li class="sidebar-submenu-category">
                                        <a href="#" class="sidebar-submenu-title">
                                            <p class="product-name">Jacket</p>
                                            <data value="50" class="stock" title="Available Stock">50 pcs</data>
                                        </a>
                                    </li>

                                    <li class="sidebar-submenu-category">
                                        <a href="#" class="sidebar-submenu-title">
                                            <p class="product-name">Dress & Frock</p>
                                            <data value="87" class="stock" title="Available Stock">87 pcs</data>
                                        </a>
                                    </li>
                                </ul>
                            </li>

                            <li class="sidebar-menu-category">
                                <button class="sidebar-accordion-menu" data-accordion-btn>
                                    <div class="menu-title-flex">
                                        <img src="https://i.postimg.cc/dQnZF91f/cosmetics.png" alt="cosmetics" class="menu-title-img" width="20" height="20"/>
                                        <p class="menu-title">Cosmetics</p>
                                    </div>

                                    <div>
                                        <ion-icon name="add-outline" class="add-icon"></ion-icon>
                                        <ion-icon name="remove-outline" class="remove-icon"></ion-icon>
                                    </div>
                                </button>

                                <ul class="sidebar-submenu-category-list" data-accordion>
                                    <li class="sidebar-submenu-category">
                                        <a href="#" class="sidebar-submenu-title">
                                            <p class="product-name">Shampoo</p>
                                            <data value="68" class="stock" title="Available Stock">68</data>
                                        </a>
                                    </li>

                                    <li class="sidebar-submenu-category">
                                        <a href="#" class="sidebar-submenu-title">
                                            <p class="product-name">Sunscreen</p>
                                            <data value="46" class="stock" title="Available Stock">46</data>
                                        </a>
                                    </li>

                                    <li class="sidebar-submenu-category">
                                        <a href="#" class="sidebar-submenu-title">
                                            <p class="product-name">Body Wash</p>
                                            <data value="79" class="stock" title="Available Stock">79</data>
                                        </a>
                                    </li>

                                    <li class="sidebar-submenu-category">
                                        <a href="#" class="sidebar-submenu-title">
                                            <p class="product-name">Makeup Kit</p>
                                            <data value="23" class="stock" title="Available Stock">23</data>
                                        </a>
                                    </li>
                                </ul>
                            </li>

                            <li class="sidebar-menu-category">
                                <button class="sidebar-accordion-menu" data-accordion-btn>
                                    <div class="menu-title-flex">
                                        <img src="https://i.postimg.cc/zBthxXZ7/glasses.png" alt="glasses" class="menu-title-img" width="20" height="20"/>
                                        <p class="menu-title">Glasses</p>
                                    </div>

                                    <div>
                                        <ion-icon name="add-outline" class="add-icon"></ion-icon>
                                        <ion-icon name="remove-outline" class="remove-icon"></ion-icon>
                                    </div>
                                </button>

                                <ul class="sidebar-submenu-category-list" data-accordion>
                                    <li class="sidebar-submenu-category">
                                        <a href="#" class="sidebar-submenu-title">
                                            <p class="product-name">Sunglasses</p>
                                            <data value="50" class="stock" title="Available Stock">50</data>
                                        </a>
                                    </li>

                                    <li class="sidebar-submenu-category">
                                        <a href="#" class="sidebar-submenu-title">
                                            <p class="product-name">Lenses</p>
                                            <data value="48" class="stock" title="Available Stock">48</data>
                                        </a>
                                    </li>

                                </ul>
                            </li>

                            <li class="sidebar-menu-category">
                                <button class="sidebar-accordion-menu" data-accordion-btn>
                                    <div class="menu-title-flex">
                                        <img src="https://i.postimg.cc/5yt0yZ0R/bag.png" alt="bags" class="menu-title-img" width="20" height="20"/>
                                        <p class="menu-title">Bags</p>
                                    </div>

                                    <div>
                                        <ion-icon name="add-outline" class="add-icon"></ion-icon>
                                        <ion-icon name="remove-outline" class="remove-icon"></ion-icon>
                                    </div>
                                </button>

                                <ul class="sidebar-submenu-category-list" data-accordion>
                                    <li class="sidebar-submenu-category">
                                        <a href="#" class="sidebar-submenu-title">
                                            <p class="product-name">Shopping Bag</p>
                                            <data value="62" class="stock" title="Available Stock">62</data>
                                        </a>
                                    </li>

                                    <li class="sidebar-submenu-category">
                                        <a href="#" class="sidebar-submenu-title">
                                            <p class="product-name">Gym Backpack</p>
                                            <data value="35" class="stock" title="Available Stock">35</data>
                                        </a>
                                    </li>

                                    <li class="sidebar-submenu-category">
                                        <a href="#" class="sidebar-submenu-title">
                                            <p class="product-name">Purse</p>
                                            <data value="80" class="stock" title="Available Stock">80</data>
                                        </a>
                                    </li>

                                    <li class="sidebar-submenu-category">
                                        <a href="#" class="sidebar-submenu-title">
                                            <p class="product-name">Wallet</p>
                                            <data value="75" class="stock" title="Available Stock">75</data>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
    </>
  )
}

export default SidebarCategory