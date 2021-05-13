import React from 'react';
import Banner from './Banner'
import About from './About'
import Gallery from './Gallery'

let direct;
let imgwd;
let margintop2;
let ScreenHeight = window.innerHeight;
let ScreenWidth = window.innerWidth;

ScreenWidth > 700 ?  direct = "row" : direct = "column" ;
ScreenWidth > 480 ?  imgwd = "45vw" : imgwd = "90vw" ;
ScreenWidth > 700 ?  margintop2 = "-15%" : margintop2 = "5%" ;


function App() {
  return (
     <>

          <Banner/>

          <About/>

          <Gallery


           direction = {direct}
           imgwidth = {imgwd}
           row2margintop = {margintop2}
           bg1 = "url( https://images.unsplash.com/photo-1578271887552-5ac3a72752bc?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80 )"
           bg2 = "url( https://images.unsplash.com/photo-1525762867061-21c9fb70b15a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80 )"
           bg3 = "url( https://www.mural-wallpaper.com/wp-content/uploads/2020/11/S-FO49.jpg )"
           bg4 = "url( https://images.wallpaperscraft.com/image/city_rocks_mountains_134667_1440x900.jpg )"
           bg5 = "url( https://images.unsplash.com/photo-1523772721666-22ad3c3b6f90?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80)"
           bg6 = "url( https://images.unsplash.com/photo-1572805196285-29c1ebd80e82?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80)"

          />

     </>
  );
}

export default App;
