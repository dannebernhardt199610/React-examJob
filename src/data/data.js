import React from "react";
import { FaFacebook, FaTwitter } from "react-icons/fa";
import { AiOutlineMail, AiOutlineHome } from "react-icons/ai";
import { FaPizzaSlice, FaTshirt } from "react-icons/fa";
import { MdAddAPhoto } from "react-icons/md";

const data = [
  {
    id: 1,
    title: "Blue Cap",
    category: "caps",
    price: 6.99,
    img: "./images/caps/blueCap.jpg",
    desc: `A blue cap`,
  },
  {
    id: 2,
    title: "Jeans jacket",
    category: "jackets",
    price: 13.99,
    img: "./images/jackets/jeansJacket.jpg",
    desc: `Jeans jacket`,
  },
  {
    id: 3,
    title: "Light blue Jeans",
    category: "jeans",
    price: 6.99,
    img: "./images/jeans/blueJeansMan.jpg",
    desc: `Light blue jeans man`,
  },
  {
    id: 4,
    title: "Beige jacket",
    category: "jackets",
    price: 20.99,
    img: "./images/jackets/beigeJacket.jpg",
    desc: `A beige jacket`,
  },
  {
    id: 5,
    title: "Cool jeans",
    category: "jeans",
    price: 12.99,
    img: "./images/jeans/womansJeans.jpg",
    desc: `cool jeans`,
  },
  {
    id: 6,
    title: "Different color jeans",
    category: "jeans",
    price: 18.99,
    img: "./images/jeans/differentColorJeans.jpg",
    desc: `Choose between different colors`,
  },
  {
    id: 7,
    title: "Gray jeans",
    category: "jeans",
    price: 8.99,
    img: "./images/jeans/grayJeansMan.jpg",
    desc: `Gray jeans man`,
  },
  {
    id: 8,
    title: "Blue jeans",
    category: "jeans",
    price: 22.99,
    img: "../images/jeans/blueJeansWoman.jpg",
    desc: `Blue jeans for woman`,
  },
  {
    id: 9,
    title: "Skin jacket",
    category: "jackets",
    price: 16.99,
    img: "./images/jackets/skinJacket.jpg",
    desc: `Skin jacket`,
  },
  {
    id: 10,
    title: "Raincoat",
    category: "jackets",
    price: 15.99,
    img: "../images/jackets/rainCoat.jpg",
    desc: `Keeps you dry no matter what`,
  },

  {
    id: 11,
    title: "Ohana blue cap",
    category: "caps",
    price: 6.99,
    img: "./images/caps/ohanaCap.jpg",
    desc: `Ohana blue cap`,
  },
  {
    id: 12,
    title: "Worthy black n blue cap",
    category: "caps",
    price: 6.99,
    img: "./images/caps/worthyCap.jpg",
    desc: `A black and blue cap`,
  },
  {
    id: 13,
    title: "White cap",
    category: "caps",
    price: 10.99,
    img: "./images/caps/whiteCap.jpg",
    desc: "A white cap",
  },
  {
    id: 14,
    title: "Icon cap",
    category: "caps",
    price: 10.99,
    img: "./images/caps/iconCap.jpg",
    desc: "Icon cap",
  },
  {
    id: 15,
    title: "Brixton cap",
    category: "caps",
    price: 10.99,
    img: "./images/caps/brixtonCap.jpg",
    desc: "A black Brixton cap",
  },
];
export default data;

export const links = [
  {
    id: 1,
    url: "/",
    text: "home",
    icon: <AiOutlineHome />,
  },
  {
    id: 2,
    url: "/interested",
    text: "interested",
    icon: <AiOutlineMail />,
  },
  {
    id: 3,
    url: "/starsweb",
    text: "starsweb",
    icon: <FaTshirt />,
  },
  {
    id: 4,
    url: "/pizzaweb",
    text: "pizzaweb",
    icon: <FaPizzaSlice />,
  },
  {
    id: 5,
    url: "/photoweb",
    text: "photoweb",
    icon: <MdAddAPhoto />,
  },
];

export const social = [
  {
    id: 1,
    url: "https://www.twitter.com",
    icon: <FaTwitter />,
  },
  {
    id: 2,
    url: "https://facebook.com",
    icon: <FaFacebook />,
  },
];
