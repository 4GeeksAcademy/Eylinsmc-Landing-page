import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"
import "react-bootstrap"

// index.css'
import '../styles/index.css'

// components
import Navbar from './components/Navbar';
import Jumbotron from './components/Jumbotron'
import Card from './components/Card'
import Footer from './components/Footer'

ReactDOM.createRoot(document.getElementById('root')).render(
    <>
        <Navbar/>
        <Jumbotron/>
        <Card/>
        <Footer/>
    </>
)