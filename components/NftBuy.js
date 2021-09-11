import { ethers } from 'ethers'
import Web3Modal from 'web3modal'

import { useState } from 'react'

import {
    nftaddress, nftmarketaddress
} from '../config'

import Market from '../artifacts/contracts/NFTMarket.sol/NFTMarket.json'


function NftBuy({ img, name, desc, price, nftMeta }) {
    const [nftData, setNftData] = useState({ nftMeta })

    async function buyNft(nft) {
        console.log(nft)

        const web3Modal = new Web3Modal()
        const connection = await web3Modal.connect()
        const provider = new ethers.providers.Web3Provider(connection)
        const signer = provider.getSigner()
        const contract = new ethers.Contract(nftmarketaddress, Market.abi, signer)

        const price = ethers.utils.parseUnits(nft.price.toString(), 'ether')
        const transaction = await contract.createMarketSale(nftaddress, nft.tokenId, {
            value: price
        })
        await transaction.wait()
    }

    return (
        <div className="border-purple-500 border-2 border-opacity-20 hover:border-opacity-50 overflow-hidden rounded-xl w-full text-white max-w-4xl">
            <div className="flex align-center justify-center p-2 h-72 w-100 bg-bgmain">
                <img src={img} className="object-contain rounded-xl" onCLick={img} />
            </div>
            <div className="p-4">
                <p className="text-2xl font-extrabold">{name}</p>
                <div style={{ overflow: 'hidden', height: '50px' }}>
                    <p className="text-gray-400">{desc}</p>
                </div>
            </div>
            <div className="p-4 bg-black">
                <p className="text-2xl mb-4 font-bold text-white">{price} ETH</p>
                <button className="w-full bg-gradient-to-r from-red-500 to-pink-500 text-white font-bold py-2 px-12 rounded" onClick={() => { { buyNft(nftData['nftMeta'][0]) } }}>Buy</button>
            </div>
        </div>
    )
}

export default NftBuy