import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import GARoutes from './components/GARoutes';

import Background from './Styles/Background';
import GlobalStyle from './Styles/GlobalStyle';

import KeyFrame from './pages/KeyFrame';
import Emoji from './pages/SelectEmoji';
import StoryBook from './pages/StoryBook';
import Signup from './pages/Signup';

import CustomAlert from './components/Atoms/CustomAlert';
import { ChatTest } from './components/ChatTest';
import ChatLobby from './components/Templetes/ChatLobby';
import LocationPage from './components/Templetes/LocationPage';
import MainPage from './components/Templetes/MainPage';
import { MakeChatRoomList } from './components/MakeChatRoomList';

function App() {
  const appHeight = () => {
    // ios 사파리에서 화면비가 깨지지 않도록 세팅
    const doc = document.documentElement;
    doc.style.setProperty('--app-height', `${window.innerHeight}px`);
  };
  window.addEventListener('resize', appHeight); // 사파리 상, 하단바 유무에 따른 화면비 재설정 이벤트리스너 코드
  appHeight();

  return (
    <>
      <GlobalStyle />
      <Background>
        <CustomAlert />
        <BrowserRouter>
          <GARoutes>
            {/* <Route path="/" element={<KeyFrame />} /> */}
            <Route path="/mainpage" element={<MainPage />} />
            <Route path="/signup/:pageId" element={<Signup />} />
            <Route path="/emoji" element={<Emoji />} />
            <Route path="/" element={<ChatLobby />} />
            <Route path="/location" element={<LocationPage />} />
            <Route path="/test" element={<KeyFrame />} />
            <Route path="/storybook" element={<StoryBook />} />
            <Route path="/chatroom/:pk" element={<MakeChatRoomList />} />
          </GARoutes>
        </BrowserRouter>
      </Background>
    </>
  );
}

export default App;
