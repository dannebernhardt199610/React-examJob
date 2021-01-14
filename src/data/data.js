import React from 'react';
import { FaFacebook, FaTwitter } from 'react-icons/fa';
import { AiOutlineForm, AiOutlineHome, AiOutlineShopping } from "react-icons/ai";


const data = [
    {
      id: 1,
      title: 'Raincoat',
      category: 'jackets',
      price: 15.99,
      img: './images/jackets/rainCoat.jpg',
      desc: `Keeps you super dry no matter what`,
    },
    {
      id: 2,
      title: 'Jeans jacket',
      category: 'jackets',
      price: 13.99,
      img: './images/jackets/jeansJacket.jpg',
      desc: `Jeans jacket`,
    },
    {
      id: 3,
      title: 'Light blue Jeans Man',
      category: 'jeans',
      price: 6.99,
      img: './images/jeans/blueJeansMan.jpg',
      desc: `blue jeans`,
    },
    {
      id: 4,
      title: 'Beige jacket',
      category: 'jackets',
      price: 20.99,
      img: './images/jackets/beigeJacket.jpg',
      desc: `beige jacket `,
    },
    {
      id: 5,
      title: 'blue jeans Woman',
      category: 'jeans',
      price: 22.99,
      img: '../images/jeans/blueJeansWoman.jpg',
      desc: `skinny fk`,
    },
    {
      id: 6,
      title: 'different color jeans',
      category: 'jeans',
      price: 18.99,
      img: './images/jeans/differentColorJeans.jpg',
      desc: `choose between different colors`,
    },
    {
      id: 7,
      title: 'Gray jeans Man',
      category: 'jeans',
      price: 8.99,
      img: './images/jeans/grayJeansMan.jpg',
      desc: `send cap `,
    },
    {
      id: 8,
      title: 'cool jeans Woman',
      category: 'jeans',
      price: 12.99,
      img: './images/jeans/womansJeans.jpg',
      desc: `womans jeans`,
    },
    {
      id: 9,
      title: 'Skin jacket',
      category: 'jackets',
      price: 16.99,
      img: './images/jackets/skinJacket.jpg',
      desc: `jacket`,
    },
    {
      id: 10,
      title: 'blue Cap',
      category: 'caps',
      price: 6.99,
      img: './images/caps/blueCap.jpg',
      desc: `a blue cap`,
    },
    {
      id: 11,
      title: 'Ohana blue Cap',
      category: 'caps',
      price: 6.99,
      img: './images/caps/ohanaCap.jpg',
      desc: `a blue cap`,
    },
    {
      id: 12,
      title: 'Worthy black/blue Cap',
      category: 'caps',
      price: 6.99,
      img: './images/caps/worthyCap.jpg',
      desc: `a black and blue cap`,
    },
    {
      id: 13,
      title: 'White cap',
      category: 'caps',
      price: 10.99,
      img: './images/caps/whiteCap.jpg',
      desc: 'a white cap',
    },
    {
      id: 14,
      title: 'Icon cap',
      category: 'caps',
      price: 10.99,
      img: './images/caps/iconCap.jpg',
      desc: 'Icon cap',
    },
    {
      id: 15,
      title: 'Brixton cap',
      category: 'caps',
      price: 10.99,
      img: './images/caps/brixtonCap.jpg',
      desc: 'a black Brixton cap',
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
    {
      id: 3,
      url: '/starsweb',
      text: 'starsweb',
      icon: <AiOutlineShopping />,
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

  