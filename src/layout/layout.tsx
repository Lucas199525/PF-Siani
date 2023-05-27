import MenuAppBar from '../components/generic/headers/header';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/home/home';
import Footer from '../components/generic/footer/footer';
import DataTable from '../components/custom/datagrid';
const LayoutPrinc = () => {
  return (
    <div>
      <p>header</p>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="users" element={<DataTable />} />
        </Routes>
      </div>
      <div>
        <p>footer</p>
      </div>
    </div>
  );
};
export default LayoutPrinc;
