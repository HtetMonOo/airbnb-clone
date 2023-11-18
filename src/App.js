import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Main from './components/Main';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' exact element={<Main />} />
        <Route path='House/:id' element={<></>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
