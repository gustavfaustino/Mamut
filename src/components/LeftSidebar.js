import React from "react";
import './LeftSidebar.css';
import { HiOutlineGlobeAmericas } from "react-icons/hi2"; // Globe icon
import { MdOutlineTranslate } from "react-icons/md"; // Translate icon
import { MdOutlinePhotoLibrary } from "react-icons/md"; // Gallery icon
import { ImStatsBars } from "react-icons/im"; // Statistics icon
import { MdOutlineReportProblem } from "react-icons/md"; // Warning icon
import { MdOutlineEmojiEmotions } from "react-icons/md"; // Emoji icon
import { IoSearchOutline } from "react-icons/io5"; // Search icon
// A Mastodon clone project, by Gustavo Faustino for the PROA 2024 course.


export default function LeftSidebar(props) {
    const maxChars = 500;
    const [text, setText] = React.useState("");

    return (
        <div className='LeftSidebar'>
            {/* Search bar */}
            <div className='SearchBar'>
                {/* Search icon */}
                < IoSearchOutline className="SearchIcon" />
                <input type='text' placeholder='Pesquise ou cole a URL' />
            </div>
            {/* Profile */}
            <div className='LeftSidebarContent'>
                <div className='Profile'>
                    <img src={props.userIcon} alt="User profile picture" />
                    <div className="OwnProfileIDs">
                        <h2>{props.username}</h2>
                        <p>{props.userID}</p>
                    </div>
                </div>

                {/* Post */}
                <div className='WriteBox'>
                    <textarea
                        className="WriteBoxTextArea"
                        placeholder="O que está em mente?"
                        maxLength={maxChars}
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                    ></textarea>

                    {/* Visibilty and Language buttons */}
                    <div className="WriteBoxButtons">
                        <button className="transparentButton iconOrange">< HiOutlineGlobeAmericas />Público</button>
                        <button className="transparentButton iconOrange"> <MdOutlineTranslate />Portuguese </button>
                    </div>

                    {/* Icons */}
                    <div className='WriteBoxIcons'>
                        {/* Gallery */}
                        <button> <MdOutlinePhotoLibrary className="iconOrange" /> </button>
                        {/* Statistics */}
                        <button> <ImStatsBars className="iconOrange" /> </button>
                        {/* Warning */}
                        <button> <MdOutlineReportProblem className="iconOrange" /> </button>
                        {/* Emoji */}
                        <button> <MdOutlineEmojiEmotions className="iconOrange" /> </button>

                        {/* Char. count */}
                        <span className="charCount">{maxChars - text.length}</span>

                        {/* Post button */}
                        <button className="postButton"> Post</button>
                    </div>
                </div>
            </div>
            {/* Footer */}
            <p className="Footer">Mamut: <a href='#'>Sobre</a> - <a href='#'>Status</a> - <a href='#'>Convidar</a> - <a href='#'>Perfis</a> - <a href='#'>Políticas de Privacidade</a></p>
        </div>
    )
}