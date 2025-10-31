import './App.css'
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Components
import { Footer } from './components/Footer.jsx'
import { HeadersApp }from './components/Header.jsx'

// Pages
import { Index, Contact, Services, Blog, Error404 } from './pages/index.js'


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
                        <Route path='*' element={<Error404 />} />
                    </Routes>
                </main>
            <Footer />
        </BrowserRouter>
    </StrictMode>
);