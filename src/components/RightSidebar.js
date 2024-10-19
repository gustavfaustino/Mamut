import React from 'react';
import './RightSidebar.css';
import { TiCogOutline } from "react-icons/ti"; // Settings icon
import { GoHome } from "react-icons/go"; // Home icon
import { AiOutlineBell } from "react-icons/ai"; // Notification icon
import { IoCompassOutline } from "react-icons/io5"; // Search icon
import { HiOutlineGlobeAmericas } from "react-icons/hi2"; // Globe icon ( BRAZIL!!! 🇧🇷🇧🇷🇧🇷🇧🇷🇧🇷 \o/)
import { IoAtOutline } from "react-icons/io5"; // At icon
import { IoBookmarksOutline } from "react-icons/io5"; // Bookmarks icon
import { IoMdStarOutline } from "react-icons/io"; // Favorite icon
import { MdOutlineListAlt } from "react-icons/md"; // List icon
import MamutLogo from "../assets/mamut_logo.png"; // Mamut Logo

export default function RightSidebar() {
  return (
    <div className="RightSidebar">
      <div className="Logo">
        <img src={MamutLogo} alt="Mastodon logo" />
      </div>
      <div className="Menu">
        <ul>
          <li>< GoHome className="icon" /><a href="#">Home</a></li>
          <li>< AiOutlineBell className="icon" /><a href="#">Notificações</a></li>
          <li>< IoCompassOutline className="icon" /><a href="#">Explorar</a></li>
          <li>< HiOutlineGlobeAmericas className="icon" /><a href="#">Feed Ao Vivo</a></li>
          <li>< IoAtOutline className="icon" /><a href="#">Menções Privadas</a></li>
          <li>< IoBookmarksOutline className="icon" /><a href='#'>Posts salvos</a></li>
          <li>< IoMdStarOutline className="icon" /><a href="#">Favoritos</a></li>
          <li><MdOutlineListAlt className="icon" /><a href="#">Lista</a></li>
          <hr />
          <li><TiCogOutline className="icon" /><a href="#">Configurações</a></li>
        </ul>
      </div>
    </div>
  )
}