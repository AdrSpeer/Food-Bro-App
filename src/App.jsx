import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home/Home';
import Favourite from './Pages/Favourite/Favourite';
import Cart from './Pages/Cart/Cart';
import Profile from './Pages/Profile/Profile';
import { FavoriteContext, LoadingContext } from './Context/Context';
import { useState } from 'react';
import Loadingscreen from './Components/Loadingscreen/Loadingscreen';
import Product from './Pages/Product/Product';

function App() {

  const [loading, setLoading] = useState(false);
  const [favoriteItems, setFavoriteItems] = useState([]);

  return (
    <section className='app-wrapper'>
      <LoadingContext.Provider value={{ loading, setLoading }}>
      {loading ? (
        <FavoriteContext.Provider value={{ favoriteItems, setFavoriteItems }}>
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/favourites' element={<Favourite/>}/>
              <Route path='/cart' element={<Cart/>}/>
              <Route path='/profile' element={<Profile/>}/>
              <Route path='/product/:id' element={<Product/>}/>
            </Routes>
          </BrowserRouter>
        </FavoriteContext.Provider>
        ) : (
          <Loadingscreen/>
        )}
      </LoadingContext.Provider>
    </section>
  )
}

export default App
