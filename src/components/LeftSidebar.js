import React, { useState } from "react";
import './LeftSidebar.css';
import { HiOutlineGlobeAmericas } from "react-icons/hi2";
import { MdOutlineTranslate, MdOutlinePhotoLibrary, MdOutlineReportProblem, MdOutlineEmojiEmotions } from "react-icons/md";
import { ImStatsBars } from "react-icons/im";
import { IoSearchOutline } from "react-icons/io5";

export default function LeftSidebar(props) {
    const maxChars = 500;
    const [text, setText] = useState("");
    const [postImage, setPostImage] = useState(null);

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            setPostImage(URL.createObjectURL(file));
        }
    };

    const handlePost = () => {
        if (text.trim()) {
            const newPost = {
                id: Date.now(),
                userIcon: props.userIcon,
                username: props.username,
                userID: props.userID,
                postContent: text,
                postImage: postImage || "", // Somente define a imagem se ela existir
                postImageALT: postImage ? "Imagem do post" : "", // Define ALT somente se houver imagem
            };
            props.onPost(newPost);
            setText("");
            setPostImage(null); // Limpa a imagem
        }
    };

    return (
        <div className='LeftSidebar'>
            <div className='SearchBar'>
                <IoSearchOutline className="SearchIcon" />
                <input type='text' placeholder='Pesquise ou cole a URL' />
            </div>
            <div className='LeftSidebarContent'>
                <div className='Profile'>
                    <img src={props.userIcon} alt="User profile picture" />
                    <div className="OwnProfileIDs">
                        <h2>{props.username}</h2>
                        <p>{props.userID}</p>
                    </div>
                </div>
                <div className='WriteBox post-form'>
                    <textarea
                        className="WriteBoxTextArea"
                        placeholder="O que está em mente?"
                        maxLength={maxChars}
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                    ></textarea>
                    <div className="WriteBoxButtons">
                        <button className="transparentButton iconOrange"><HiOutlineGlobeAmericas />Público</button>
                        <button className="transparentButton iconOrange"><MdOutlineTranslate />Portuguese</button>
                    </div>
                    <div className='WriteBoxIcons'>
                        <input 
                            type="file" 
                            accept="image/*" 
                            style={{ display: 'none' }} 
                            id="fileInput" 
                            onChange={handleImageUpload} 
                        />
                        <label htmlFor="fileInput" className="fileInputStyle">
                            <MdOutlinePhotoLibrary className="iconOrange" style={{ cursor: 'pointer' }} />
                        </label>
                        <button><ImStatsBars className="iconOrange" /></button>
                        <button><MdOutlineReportProblem className="iconOrange" /></button>
                        <button><MdOutlineEmojiEmotions className="iconOrange" /></button>
                        <span className="charCount">{maxChars - text.length}</span>
                        <button className="postButton" onClick={handlePost}>Post</button>
                    </div>
                </div>
            </div>
            <p className="Footer">Mamut: <a href='#'>Sobre</a> - <a href='#'>Status</a> - <a href='#'>Convidar</a> - <a href='#'>Perfis</a> - <a href='#'>Políticas de Privacidade</a></p>
        </div>
    );
}
