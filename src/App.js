import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import HomePage from './Pages/HomePage';
import { Provider } from 'react-redux';
import store from './common/store';
import Drag from './Pages/Drag';
function App() {
  return (
    <Provider store={store}>

      <Router>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/drag" element={<Drag />} />
          {/* <Route path="/count" element={<Count />} /> */}
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
