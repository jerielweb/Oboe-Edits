import './App.css'
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Components
import { Footer } from './components/Footer.jsx'
import { HeadersApp }from './components/Header.jsx'

// Pages
import Index from './pages/Index.jsx'
import Contact from './pages/Contact.jsx'
import Services  from './pages/Services.jsx'
import Blog from './pages/Blog.jsx';


createRoot(document.getElementById('root')).render(
    <StrictMode>
        <BrowserRouter>
            <HeadersApp />
                <main loading='lazy'>
                    <Routes>
                        <Route path='/' element={<Index />} />
                        <Route path='/Services' element={<Services />} />
                        <Route path='/Contact' element={<Contact />} />
                        <Route path='/Blog' element={<Blog />} />
                    </Routes>
                </main>
            <Footer />
        </BrowserRouter>
    </StrictMode>
);