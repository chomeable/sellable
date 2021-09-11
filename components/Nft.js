function Nft({ img, name, desc, price }) {
    return (
        <div className="border-purple-500 border-2 border-opacity-20 hover:border-opacity-50 overflow-hidden rounded-xl w-full text-white">
            <div className="flex align-center justify-center p-2 h-72 w-100">
                <img src={img} className="object-contain rounded-xl" />
            </div>
            <div className="p-4">
                <p className="text-2xl font-extrabold">{name}</p>
                <div style={{ overflow: 'hidden', height: '50px' }}>
                    <p className="text-gray-400">{desc}</p>
                </div>
            </div>
            <div className="p-4 bg-black">
                <p className="text-2xl mb-4 font-bold text-white">{price} ETH</p>
                <button className="w-full bg-gradient-to-r from-red-500 to-pink-500 text-white font-bold py-2 px-12 rounded">Resell</button>
            </div>
        </div>
    )
}

export default Nft