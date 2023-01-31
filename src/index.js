import React from 'react';
import  ReactDOM  from 'react-dom';
import './index.css';
import Header from './Header';
import Box1 from './box1';
import Regform from './Regform';
import Footer from './Footer';

function Page(){
    return(
        <div>
        <Header/>
        <Box1/>
        <Regform/>
        <Footer/>
        </div>
    )
}


 ReactDOM.render(<Page/>, document.getElementById("root"))