import { Route, Routes } from 'react-router-dom';

import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import New from './routes/new/new-user.component';
import Edit from './routes/edit/edit-user.component';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route path='home' element={<Home />} />
        <Route path='new' element={<New />} />
        <Route path='edit' element={<Edit />} />
      </Route>
    </Routes>
  );
}

export default App;
