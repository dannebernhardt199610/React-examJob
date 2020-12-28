import React from 'react';
import { FaFacebook, FaTwitter } from 'react-icons/fa';
import { AiOutlineForm, AiOutlineHome } from "react-icons/ai";


const data = [
    {
      id: 1,
      title: 'Raincoat',
      category: 'jackets',
      price: 15.99,
      img: './images/raincoat.jpeg',
      desc: `Raincoat against rain`,
    },
    {
      id: 2,
      title: 'NY Cap',
      category: 'caps',
      price: 13.99,
      img: './images/NYcap.jpeg',
      desc: `WT cap`,
    },
    {
      id: 3,
      title: 'Tiger of sweden jeans',
      category: 'jeans',
      price: 6.99,
      img: './images/tigerofsweden.jpeg',
      desc: `best jeans`,
    },
    {
      id: 4,
      title: 'Raincoat vs stormy weather',
      category: 'jackets',
      price: 20.99,
      img: './images/stormraincoat.jpeg',
      desc: `keeps you dry no matter what `,
    },
    {
      id: 5,
      title: 'skinny jeans for skinny guys',
      category: 'jeans',
      price: 22.99,
      img: '../images/skinnyjeans.jpeg',
      desc: `skinny fk`,
    },
    {
      id: 6,
      title: 'cap of caps',
      category: 'caps',
      price: 18.99,
      img: './images/capofcaps.jpeg',
      desc: `captain`,
    },
    {
      id: 7,
      title: 'send cap',
      category: 'caps',
      price: 8.99,
      img: './images/sendcap.jpeg',
      desc: `send cap `,
    },
    {
      id: 8,
      title: 'american classic jeans',
      category: 'jeans',
      price: 12.99,
      img: './images/americanjeans.jpeg',
      desc: `jeanz`,
    },
    {
      id: 9,
      title: 'quarantine jacket',
      category: 'jackets',
      price: 16.99,
      img: './images/quarantinejacket.jpeg',
      desc: `jacket`,
    },
  ];
  export default data

  export const links = [
    {
      id: 1,
      url: '/',
      text: 'home',
      icon: <AiOutlineHome />,
    },
    {
      id: 2,
      url: '/interested',
      text: 'interested',
      icon: <AiOutlineForm />,
    },
  ];

  export const social = [
    {
      id: 1,
      url: 'https://www.twitter.com',
      icon: <FaTwitter />,
    },
    {
      id: 2,
      url: 'https://facebook.com',
      icon: <FaFacebook />,
    },
  ];

  