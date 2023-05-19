import MenuAppBar from '../components/generic/headers/header';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/home/home';
import Footer from '../components/generic/footer/footer';

const LayoutPrinc = () => {
  return (
    <div>
      <MenuAppBar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};
export default LayoutPrinc;
