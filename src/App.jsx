import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Footer } from './Footer.jsx';
import { Services } from './Services.jsx'
import './Styles/global.css'
// Pages
import HeadersApp from './Header.jsx'
import Index from './Index.jsx'


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