import React from "react";

const Footer: React.FC = () => {
    return (
        <footer className="mt-12 py-6 text-center text-sm text-gray-400">
            © {new Date().getFullYear()} Fabián Giovanni González Pino — Ingeniero Civil Informático
        </footer>
    );
};

export default Footer;