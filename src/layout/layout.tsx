import MenuAppBar from '../components/generic/headers/header';
import Header from '../components/header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/home/home';
import Footer from '../components/generic/footer/footer';
import DataTable from '../components/custom/datagrid';
const LayoutPrinc = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="users" element={<DataTable />} />
      </Routes>
    </div>
  );
};
export default LayoutPrinc;
