import React from 'react'
import { AiFillFacebook, AiFillInstagram, AiFillYoutube } from 'react-icons/ai'
import { BsTelegram } from 'react-icons/bs'
import './Footer.scss'
import {BiRegistered, BiCopyright} from "react-icons/bi";

const Footer = () => {
    return (
        <div className='bg-gray-100 py-10'>
            <footer className='grid grid-cols-6 gap-4 container mx-auto items-center leading-4 text-sm text-gray-600'>
                <div className='md:col-span-2 col-span-3'>
                    <p className={'mb-5 uppercase'}>Biz Haqimizda</p>
                    <div>
                        <p className='line-clamp-3'>QALAMPIR.UZ. Web-Site OAV sifatida 2018 yil 26 oktyabr kuni O‘zbekiston Respublikasi Prezidenti Administratsiyasi huzuridagi Axborot va ommaviy kommunikatsiyalar agentligidan 1089 raqam bilan ro‘yxatga olingan.</p>
                        <p>Muassis: “QALAMPIR” MChJ. Bosh muharrir: S. Abdullayev</p>
                        <p>Tahririyat manzili: 100174, Toshkent shahri, Beruniy ko‘chasi, 88-uy.
                            Elektron manzil: info@qalampir.uz</p>
                    </div>
                </div>
                <div className='flex md:grid-cols-2 col-span-3 justify-around flex-col'>
                    <p className={'mb-5 uppercase'}>Ijtimoiy Tarmoqlar</p>
                    <a href="#" className={'flex items-center uppercase font-mono'}>
                        <AiFillFacebook className='text-2xl mr-4' />
                        FaceBook
                    </a>
                    <a href="#" className={'flex items-center uppercase font-mono'}>
                        <BsTelegram className='text-2xl mr-4' />
                        Telegram
                    </a>
                    <a href="#" className={'flex items-center uppercase font-mono'}>
                        <AiFillInstagram className='text-2xl mr-4' />
                        Instagram
                    </a>
                    <a href="#" className={'flex items-center uppercase font-mono'}>
                        <AiFillYoutube className='text-2xl mr-4' />
                        YouTube
                    </a>
                </div>
                <div className={'text-gray-500 text-xs font-light md:grid-cols-2 col-span-'}>
                    <p className={'flex items-center'}><BiCopyright /> 2022 - {new Date().getFullYear()}</p>
                    <p className={'flex items-center'}><BiRegistered /> Alright Reserved. Adolatmedia.uz</p>
                </div>
            </footer>
        </div>
    )
}

export default Footer