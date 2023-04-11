import React from 'react'

function Card({ name, description, price, time, creator, nftImage }) {
    return (
        <div className="card">
            <div className="card-image">
                <img src={nftImage} />
            </div>
            <h1 className="nft-heading">{name}</h1>
            <p className="nft-description">{description}</p>
            <div className="nft-info">
                <div className="price">
                    <img src={price.image} alt="ETH" />
                    <span className="nft-price">{price.currency}</span>
                </div>
                <div className="time">
                    <img src={time.image} alt="Time" />
                    <span>{time.days}</span>
                </div>
            </div>
            <hr className="line" />
            <footer>
                <img src={creator.image} alt="avatar" />
                <span className="creator">Creation of <span className="creator-name">{creator.name}</span></span>
            </footer>
        </div>
    )
}

export default Card