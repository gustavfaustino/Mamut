import React, { useState } from "react";
import './Post.css';
import { PiArrowBendUpLeftBold } from "react-icons/pi";
import { BiRepost } from "react-icons/bi";
import { FaRegBookmark } from "react-icons/fa";
import { IoMdStarOutline } from "react-icons/io";
import { IoIosMore } from "react-icons/io";

export default function Post(props) {
    // Estados para curtidas e controle de curtida
    const [likes, setLikes] = useState(0);
    const [liked, setLiked] = useState(false);

    // Função para alternar curtida
    const handleLike = () => {
        if (liked) {
            setLikes(likes - 1); // Remove curtida
        } else {
            setLikes(likes + 1); // Adiciona curtida
        }
        setLiked(!liked); // Alterna o estado de curtida
    };

    return (
        <div className="Post">
            <div className="PostHeader">
                <div className="ProfilePicture">
                    <img src={props.userIcon} alt="Profile picture" />
                </div>
                <div className="ProfileIDs">
                    <h4>{props.username}</h4>
                    <p>{props.userID}</p>
                </div>
            </div>
            {/* Conteúdo do Post */}
            <div className="PostContent">
                <p>{props.postContent}</p>
                {props.postImage && (
                    <img src={props.postImage} alt={props.postImageALT || ""} />
                )}
            </div>
            {/* Footer do Post */}
            <div className="PostOptions">
                <button className="OptionBtn"><PiArrowBendUpLeftBold /></button>
                <button className="OptionBtn"><BiRepost /></button>
                <button className="OptionBtn"><FaRegBookmark /></button>
                
                {/* Botão de Curtida com contador */}
                <button className="OptionBtn" onClick={handleLike}>
                    <IoMdStarOutline />
                    <span className="LikeCount">{likes}</span>
                </button>

                <button className="OptionBtn"><IoIosMore /></button>
            </div>
        </div>
    );
}
