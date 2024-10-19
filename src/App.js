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


// Projeto para clonar o Mastodon

function App() {
  return (
    <div className="App">
      {/* Campo Esquerdo */}
      < LeftSidebar userIcon={DefaultUserIcon} username="John Doe" userID="@johndoe345" />

      {/* Campo central */}
      <div className="Central">
        <div className="TopBar">
          <button><MdHomeFilled className="TopBarIcon" /> Home</button>
          <button><TiCogOutline className='TopBarIcon' /> </button>
        </div>

        {/* Post */}
        < Post userIcon={DefaultPostUserIcon} username="Puffin Fan" userID="@puffinbrowserfan"
          postContent="Look at my birdo friend!"
          postImage={DefaultPostImage}
          postImageALT="Passarinho olhando pra cima parado no meio de uma pedra com musgo" />
        < Post userIcon={DefaultPostUserIcon} username="Puffin Fan" userID="@puffinbrowserfan"
          postContent="Look at my birdo friend!"
          postImage={DefaultPostImage}
          postImageALT="Passarinho olhando pra cima parado no meio de uma pedra com musgo" />
        < Post userIcon={DefaultPostUserIcon} username="Puffin Fan" userID="@puffinbrowserfan"
          postContent="Look at my birdo friend!"
          postImage={DefaultPostImage}
          postImageALT="Passarinho olhando pra cima parado no meio de uma pedra com musgo" />
        < Post userIcon={DefaultPostUserIcon} username="Puffin Fan" userID="@puffinbrowserfan"
          postContent="Look at my birdo friend!"
          postImage={DefaultPostImage}
          postImageALT="Passarinho olhando pra cima parado no meio de uma pedra com musgo" />
        < Post userIcon={DefaultPostUserIcon} username="Puffin Fan" userID="@puffinbrowserfan"
          postContent="Look at my birdo friend!"
          postImage={DefaultPostImage}
          postImageALT="Passarinho olhando pra cima parado no meio de uma pedra com musgo" />
        < Post userIcon={DefaultPostUserIcon} username="Puffin Fan" userID="@puffinbrowserfan"
          postContent="Look at my birdo friend!"
          postImage={DefaultPostImage}
          postImageALT="Passarinho olhando pra cima parado no meio de uma pedra com musgo" />

      </div>



      {/* Campo direito */}
      < RightSidebar />
    </div>
  );
}

export default App;
