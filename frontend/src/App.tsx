import AddPetPage from "./components/addPetComponents/AddPetPage";
import Header from "./components/commonComponents/Header"
import NavBar from "./components/commonComponents/NavBar"
import HomePage from './components/homeComponents/HomePage'
import { Routes, Route, useParams } from 'react-router-dom';
import ViewPetPage from "./components/viewPetComponents/ViewPetPage";
import MyPetListings from "./components/myPetListingComponents/MyPetListings";
import EditMyPet from "./components/myPetListingComponents/EditMyPet";


function App() {

  return (
    <>
      <Header />
      <NavBar />

      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/addPet" element={<AddPetPage/>}></Route>
        <Route path="/viewPet/:id" element={<ViewPetPage />}></Route>
        <Route path="/myPetListings" element={<MyPetListings />}></Route>
        <Route path="/editMyPet/:id" element={<EditMyPet />}></Route>
      </Routes>
    </>
  )
}

export default App
