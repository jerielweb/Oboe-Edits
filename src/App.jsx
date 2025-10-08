import './Styles/global.css'
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Components
import { Footer } from './components/Footer.jsx'
import { Services } from './pages/Services.jsx'

// Pages
import HeadersApp from './components/Header.jsx'
import Index from './pages/Index.jsx'


createRoot(document.getElementById('root')).render(
    <StrictMode>
        <BrowserRouter>
            <HeadersApp />
                <main>
                    <Routes>
                        <Route path='/' element={<Index />} />
                        <Route path='/Services' element={<Services />} />
                    </Routes>
                </main>
            <Footer />
        </BrowserRouter>
    </StrictMode>
);