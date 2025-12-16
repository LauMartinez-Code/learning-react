import { BrowserRouter, Routes, Route } from "react-router";
import GameLayout from "./GameLayout";
import GameList from './GameList';
import Game from "./Game";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<GameLayout />}>
          <Route index element={<GameList />} />
          <Route path=":gameId" element={<Game />} />
          <Route path="*" element={<h1>404 - Route not found</h1>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
