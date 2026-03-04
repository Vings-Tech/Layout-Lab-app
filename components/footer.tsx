import React from 'react';
import { Instagram, MessageCircle, Laptop } from 'lucide-react';

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-top">

                    {/* Left Side: Logo & Quote */}
                    <div className="footer-brand">
                        <div className="footer-logo">
                            <div className="flex-shrink-0 transition-all duration-300 group-hover:scale-110">
                                <img
                                    src="/icon.png"
                                    alt="LAYOUTLAB Logo"
                                    className="h-10 w-auto object-contain transition-all duration-500"
                                />
                            </div>
                            <h2 className="footer-logo-text">
                                LAYOUT<span>LAB</span>
                            </h2>
                        </div>

                        <p className="footer-quote">
                            "The best code is the code that goes unnoticed because it works so flawlessly."
                        </p>
                    </div>

                    {/* Right Side: Chat with Developer */}
                    <div className="footer-links">
                        <h3 className="footer-links-title">
                            Chat with Developer
                        </h3>

                        <div className="footer-social-btns">
                            <a
                                href="https://www.instagram.com/vingstech.in/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-btn"
                                title="Instagram"
                            >
                                <Instagram size={18} />
                                <span>Instagram</span>
                            </a>

                            <a
                                href="https://wa.me/+918778264166"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-btn"
                                title="WhatsApp"
                            >
                                <MessageCircle size={18} />
                                <span>WhatsApp</span>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p className="footer-copyright">
                        © {new Date().getFullYear()} LAYOUTLAB. Crafted with passion.
                    </p>

                    <div className="flex-shrink-0 transition-all duration-300 group-hover:scale-110">
                        <img
                            src="/icon.png"
                            alt="QRNest Logo"
                            className="h-10 w-auto object-contain transition-all duration-500"
                        />
                    </div>
                    <p className="footer-powered">
                        Powered by Vings Tech Projects
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
