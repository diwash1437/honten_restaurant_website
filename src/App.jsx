
// import './App.css'
import NameChange from './components/NameChange';
import ProductCard from './components/ProductCard';
import ProductList from './components/ProductList';
import NameChangeTry from './components/NameChangeTry';
import { AlcholOrder } from './page/AlcholOrder';
import { PickurusuRecipe } from './Recipe/PickurusuRecipe/PickurusuRecipe';
import { Routes,Route } from 'react-router-dom';
import Restaurant from "./Recipe/Restaurant";
import { VegetableSoup } from './Recipe/VegetableSoup';
import { VegetableSoupOrder } from './order/VegetableSoupOrder';
import {Lunch} from './premium/Lunch'
import NabataColtd153 from './order/NabataColtd153';
function App() {
 

  return(
    <Routes>


   {/* <div> */}
    {/* <h1>Shopping Cart</h1> */}
    {/* <ProductList/> */}
    {/* <ProductCard/> */}
    {/* <NameChangeTry/> */}
    {/* <NameChangeTry/> */}
    {/* <AlcholOrder/> */}
    {/* {<PickurusuRecipe/>} */}
   {/* </div> */}



   <Route path='honten_restaurant_website/' element={<Restaurant/>}/>
   <Route path='/pickurusu' element={<PickurusuRecipe />}/>
   <Route path='/alcholOrder' element={<AlcholOrder/>}/>
  <Route path='/vegetableSoup' element={<VegetableSoup/>}/>
  <Route path='/vegetableSoupOrder' element={<VegetableSoupOrder/>}/>
  <Route path='/lunch' element={<Lunch/>}/>
  <Route path='/nabata' element={<NabataColtd153/>}/>
  </Routes>
  )
}

export default App;
