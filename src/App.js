import {Routes, Route} from 'react-router-dom';
import { useEffect } from 'react';

import Home from "./routes/home/home.component";
import Navigation from './routes/navigation/navigation.component';
import Authentication from './routes/authentication/authentication.component';
import Checkout from './routes/checkout/checkout.component';
import Shop from './routes/shop/shop.component';
import { useDispatch } from 'react-redux';
import React from 'react';
import { checkUserSession } from './store/user/user.action';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() =>{
    dispatch(checkUserSession());
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />}/>
        <Route path="shop/*" element={<Shop />}/>
        <Route path="auth" element={<Authentication />}/>
        <Route path='checkout' element={<Checkout />}/>
      </Route>
      
    </Routes>
  );
}

export default App;
