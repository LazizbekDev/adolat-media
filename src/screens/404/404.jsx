import React, {useState} from 'react';
import { Navigate } from 'react-router-dom'
import './NotFound.scss';
import Svg from "./Svg";

const NotFound
= () => {
    const [go, setGo] = useState(false);

    return (
        <div className="wrapper w-full fixed bg-gray-800 h-full top-0">
            <div className="landing-page shadow-lg bg-gray-900 text-white">
                <Svg />

                <h1> 404 </h1>
                <p>Afsuski sahifa topilmadi yoki bunday sahifa mavjud emas :(</p>
                <button
                    className={'bg-gray-800 text-white shadow-lg'}
                    onClick={() => setGo(true)}>Bosh sahifaga qaytish</button>
            </div>
            {go && <Navigate replace to={'/'} />}
        </div>
    );
};

export default NotFound;