import './App.css';
import React from 'react';
import LeftSidebar from './components/LeftSidebar';
import RightSidebar from './components/RightSidebar';
import Post from './components/Post';
import { TiCogOutline } from "react-icons/ti";
import { MdHomeFilled } from "react-icons/md";

import DefaultUserIcon from './assets/user_assets/Portrait_Placeholder.png';

import DefaultPostUserIcon from './assets/posts_assets/puffin_icon.jpg';
import DefaultPostImage from './assets/posts_assets/puffin_realphoto_placeholder.jpg';

import DefaultPostUserIcon2 from './assets/posts_assets/fox.jpg';
import DefaultPostImage2 from './assets/posts_assets/jonatan-pie-xgTMSz6kegE-unsplash.jpg';

import UserDryBonesExample from './assets/user_assets/Dry bones-.jpg'

// Projeto para clonar o Mastodon

function App() {
  return (
    <div className="App">
      {/* Campo Esquerdo */}
      < LeftSidebar userIcon={UserDryBonesExample} username="Dry Bones" userID="@ihatemp" />

      {/* Campo central */}
      <div className="Central">
        <div className="TopBar">
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}><MdHomeFilled className="TopBarIcon homeButton" /> Home</button>
          <button><TiCogOutline className='TopBarIcon' /> </button>
        </div>

        {/* Post 1 */}
        <Post userIcon={DefaultPostUserIcon} username="Puffin Fan" userID="@puffinbrowserfan"
          postContent="Look at my birdo friend!"
          postImage={DefaultPostImage}
          postImageALT="Passarinho olhando pra cima parado no meio de uma pedra com musgo" />

        {/* Post 2 */}
        <Post
          userIcon="https://randomuser.me/api/portraits/men/32.jpg"
          username="Nature Lover"
          userID="@nature_fan123"
          postContent="Just witnessed this stunning sunset. Nature is truly amazing!"
          postImage="https://images.unsplash.com/photo-1606249466947-dfc0da478943?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8U3Vuc2V0JTIwb3ZlciUyMGElMjBjYWxtJTIwb2NlYW58ZW58MHx8MHx8fDI%3D"
          postImageALT="Sunset over a calm ocean with orange and purple hues"
        />

        {/* Post 3 */}
        <Post
          userIcon="https://randomuser.me/api/portraits/women/50.jpg"
          username="Pet Enthusiast"
          userID="@petlover"
          postContent="My little buddy loves to lay on the sofa!"
          postImage="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
          postImageALT="A cat comfortably laying on the sofa"
        />



        {/* Post 4 */}
        <Post
          userIcon="https://randomuser.me/api/portraits/women/85.jpg"
          username="Adventure Seeker"
          userID="@adventuretime"
          postContent="Found this hidden waterfall during my hike today!"
          postImage="https://images.unsplash.com/photo-1508710285745-edc8137d6b5b?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          postImageALT="A beautiful waterfall surrounded by greenery"
        />

        {/* Post 5 */}
        <Post userIcon={DefaultPostUserIcon2} username="Raposit" userID="@foxlover"
          postContent="Mai que coisa mais linda :D"
          postImage={DefaultPostImage2}
          postImageALT="Raposa do ártico parada na neve" />

        <Post
          userIcon="https://c8.alamy.com/comp/PFD096/black-and-white-rabbit-sitting-side-view-PFD096.jpg"
          username="Nic ⭐"
          userID="@nicstar"
          postContent="As músicas do Blackpink são a trilha sonora perfeita para os nossos rolês!  Quem mais aí ama cantar junto com elas?  #Blackpink #Kpop #Amizade"
          postImage="https://pbs.twimg.com/media/D5rkr4bWsAAHBuj.jpg"
          postImageAlt="Show da Blackpink, todas integrantes abraçadas"
        />


      </div>




      {/* Campo direito */}
      < RightSidebar />
    </div>
  );
}

export default App;
