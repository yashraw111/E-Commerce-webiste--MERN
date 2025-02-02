import React from 'react'

const BotHeader = () => {
  return (
    <>
       <div class="header-main">
            <div class="container">
                <a href="#" class="header-logo"><img src="https://i.postimg.cc/XYYNC3X8/logo.png" alt="logo" width="120" height="36"/></a>

                <div class="header-search-container">
                    <input type="search" name="search" class="search-field" placeholder="Enter your product name"/>

                    <button class="search-btn"><ion-icon name="search-outline"></ion-icon></button>
                </div>

                <div class="header-user-actions">
                    <button class="action-btn"><ion-icon name="person-outline"></ion-icon></button>

                    <button class="action-btn">
                        <ion-icon name="heart-outline"></ion-icon>
                        <span class="count">0</span>
                    </button>

                    <button class="action-btn">
                        <ion-icon name="bag-handle-outline"></ion-icon>
                        <span class="count">0</span>
                    </button>
                </div>

            </div>
        </div>
    </>
  )
}

export default BotHeader