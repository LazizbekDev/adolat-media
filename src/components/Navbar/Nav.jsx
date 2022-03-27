import React from 'react';
import {Link} from 'react-router-dom';
import './Nav.scss';

const Nav = ({cls}) => {
    return (
        <div className={`navmenu bg-gray-100 ${cls}`}>
            <div className={'container my-5 mx-auto py-20'}>
                <div className={'grid grid-cols-3 full-rows items-center gap-5 text-gray-900 text-center uppercase font-medium'}>
                    <Link
                        style={{backgroundImage: 'url(https://images.unsplash.com/photo-1559734834-b4517b180a62?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHNvY2lldHl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60)'}}
                        to={'/jamiyat'}>Jamiyat</Link>
                    <Link
                        style={{backgroundImage: 'url(https://images.unsplash.com/photo-1444653614773-995cb1ef9efa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzh8fGJ1c2luZXNzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60)'}}
                        to={'/biznez'}>Biznez</Link>
                    <Link
                        style={{backgroundImage: 'url(https://media.istockphoto.com/photos/find-the-shortest-path-between-points-a-and-b-picture-id1202205418?b=1&k=20&m=1202205418&s=170667a&w=0&h=KY2xhuBvaEufmbkkNuZSFPHojmRDwdz2Y1zJ0r2twEU=)'}}
                        to={'/siyosat'}>Siyosat</Link>
                    <Link
                        style={{backgroundImage: 'url(https://images.unsplash.com/photo-1590081159886-a60883672ebb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fGN1bHR1cmV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60)'}}
                        to={'/madaniyat'}>Madaniyat</Link>
                    <Link
                        style={{backgroundImage: 'url(https://images.unsplash.com/photo-1554446422-d05db23719d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8aW50ZXJ2aWV3fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60)'}}
                        to={'/intervyu'}>Intervyu</Link>
                    <Link
                        style={{backgroundImage: 'url(https://media.istockphoto.com/photos/circuit-blue-board-background-copy-space-computer-data-technology-picture-id1340728386?b=1&k=20&m=1340728386&s=170667a&w=0&h=FQ7GuNOoq7JzCwb4YWJZ3iyMxky5hAaVnFf7VcQ-dA0=)'}}
                        to={'/texnologiya'}>Texonologiya</Link>
                    <Link
                        style={{backgroundImage: 'url(https://images.unsplash.com/photo-1579952363873-27f3bade9f55?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDB8fHNwb3J0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60)'}}
                        to={'/sport'}>Sport</Link>
                    <Link
                        style={{backgroundImage: 'url(https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fGhlYWx0aHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60)'}}
                        to={'/salomatlik'}>Salomatlik</Link>
                    <Link
                        style={{backgroundImage: 'url(https://images.unsplash.com/photo-1521120413309-42e7eada0334?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dXNlZnVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60)'}}
                        to={'/tahlil'}>Tahlil</Link>
                </div>
            </div>
        </div>
    );
};

export default Nav;