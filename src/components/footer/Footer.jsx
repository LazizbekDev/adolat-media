import React from 'react'
import { AiFillFacebook, AiFillInstagram, AiFillYoutube } from 'react-icons/ai'
import { BsTelegram } from 'react-icons/bs'
import './Footer.scss'

const Footer = () => {
    return (
        <div className='bg-gray-100'>
            <footer className='grid grid-cols-3 gap-4 container mx-auto items-center'>
                <div className='md:col-span-2 col-span-3 leading-4 text-sm text-gray-600'>
                    <p className='line-clamp-3'>QALAMPIR.UZ. Web-Site OAV sifatida 2018 yil 26 oktyabr kuni O‘zbekiston Respublikasi Prezidenti Administratsiyasi huzuridagi Axborot va ommaviy kommunikatsiyalar agentligidan 1089 raqam bilan ro‘yxatga olingan.</p>
                    <p>Muassis: “QALAMPIR” MChJ. Bosh muharrir: S. Abdullayev</p>
                    <p>Tahririyat manzili: 100174, Toshkent shahri, Beruniy ko‘chasi, 88-uy.
Elektron manzil: info@qalampir.uz</p>
                </div>
                <div className='flex justify-around'>
                    <a href="#">
                        <AiFillFacebook className='text-4xl' />
                    </a>
                    <a href="#">
                        <BsTelegram className='text-4xl' />
                    </a>
                    <a href="#">
                        <AiFillInstagram className='text-4xl' />
                    </a>
                    <a href="#">
                        <AiFillYoutube className='text-4xl' />
                    </a>
                </div>
            </footer>
        </div>
    )
}

export default Footer