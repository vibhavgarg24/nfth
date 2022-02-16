import React from "react"
import Navbar from "./Navbar"

export default function Header() {
    return(
        <div className="header">
            <Navbar />
            
            <h1 className="header--h1"> Make <span className="header--nfts"> NFTs </span> <br /> work for you </h1>
            <h3 className="header--h3"> The best way to Rent and Lend NFTs. </h3>
            <button className="header--gs"> Get started </button>
            <button class="learn-more">
                <span class="circle" aria-hidden="true">
                <span class="icon arrow"></span>
                </span>
                <span class="button-text">Learn More</span>
            </button>
        </div>
    )
}