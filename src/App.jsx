import './App.css'
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Components
import { Footer } from './components/Footer.jsx'
import { Services } from './pages/Services.jsx'

// Pages
import HeadersApp from './components/Header.jsx'
import Index from './pages/Index.jsx'
import Contact from './pages/Contact.jsx'


createRoot(document.getElementById('root')).render(
    <StrictMode>
        <BrowserRouter>
            <HeadersApp />
                <main loading='lazy'>
                    <Routes>
                        <Route path='/' element={<Index />} />
                        <Route path='/Services' element={<Services />} />
                        <Route path='/Contact' element={<Contact />} />
                    </Routes>
                </main>
            <Footer />
        </BrowserRouter>
    </StrictMode>
);