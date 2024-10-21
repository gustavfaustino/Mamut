import React from "react";
import './Post.css';
import { PiArrowBendUpLeftBold } from "react-icons/pi";
import { BiRepost } from "react-icons/bi";
import { FaRegBookmark } from "react-icons/fa";
import { IoMdStarOutline } from "react-icons/io";
import { IoIosMore } from "react-icons/io";

export default function Post(props) {
    return (
        <div className="Post">
            <div className="PostHeader">
                <div className="ProfilePicture" >
                    <img src={props.userIcon} alt="Profile picture" />
                </div>
                <div className="ProfileIDs">
                    <h4>{props.username}</h4>
                    <p>{props.userID}</p>
                </div>
            </div>
            {/* Conteudo do Post */}
            <div className="PostContent">
                <p>{props.postContent}</p>
                <img src={props.postImage} alt={props.postImageALT} />
            </div>
            {/* Footer do Post */}
            <div className="PostOptions">
                <button  className="OptionBtn" ><PiArrowBendUpLeftBold /></button>
                <button  className="OptionBtn" ><BiRepost /></button>
                <button  className="OptionBtn" ><FaRegBookmark /></button>
                <button  className="OptionBtn" ><IoMdStarOutline/></button>
                <button className="OptionBtn"><IoIosMore /></button>
            </div>
        </div>
    )
}
