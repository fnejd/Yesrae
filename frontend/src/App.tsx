import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from '../src/pages/user/Login';
import Regist from '../src/pages/user/Regist';
import Main from '../src/pages/main/Main';
import PlayList from './pages/playlist/PlayList';
import PlayListDetail from './pages/playlist/PlayListDetail';
import LoginRedirect from './pages/user/LoginRedirect';
import PlayListRegist from './pages/playlist/PlayListRegist';
import PlayListUpdate from './pages/playlist/PlayListUpdate';
import SongDetail from './pages/song/SongDetail.tsx';
import Nomantle from './pages/nomantle/Nomantle';
import NomantleRank from './pages/nomantle/NomantleRank';
import Tournament from './pages/tournament/Tournament';
import TournamentResult from './pages/tournament/TournamentResult';
import TournamentRanking from './pages/tournament/TournamentRanking';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/user/login' element={<Login />} />
        <Route path='/user/regist' element={<Regist />} />
        <Route path='/oauth2' element={<LoginRedirect />} />
        <Route path='/playlist' element={<PlayList />} />
        <Route path='/playlist/:userid' element={<PlayList />} />
        <Route path='/registplaylist' element={<PlayListRegist />} />
        <Route
          path='/updateplaylist/:playlistid'
          element={<PlayListUpdate />}
        />
        <Route
          path='/playlistdetail/:playListId'
          element={<PlayListDetail />}
        />
        <Route
          path='/song/:songId'
          element={<SongDetail />}
        />
        <Route path="/quiz" element={<Nomantle />} />
        <Route path="/quiz/rank" element={<NomantleRank />} />
        <Route path="/cup" element={<Tournament />} />
        <Route path="/tournament/result" element={<TournamentResult />} />
        <Route path="/tournament/ranking" element={<TournamentRanking />} />
      </Routes>
    </Router>
  );
}

export default App;