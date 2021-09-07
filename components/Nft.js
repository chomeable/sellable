import React from 'react'

function Nft({ img, name, desc, price }) {
    return (
        <div className="border shadow rounded-xl overflow-hidden">
            <img src={img} className="object-contain w-full" />
            <div className="p-4">
                <p className="text-2xl font-bold">{name}</p>
                <div style={{ overflow: 'hidden' }}>
                    <p className="text-gray-400">{desc}</p>
                </div>
            </div>
            <div className="">
                <div className="p-4 bg-black">
                    <p className="text-2xl font-bold text-white">Price - {price} Eth</p>
                </div>
            </div>
        </div>
    )
}

export default Nft