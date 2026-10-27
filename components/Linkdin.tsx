'use client';

import { FaLinkedin } from 'react-icons/fa';
import { GENERAL_INFO } from '@/lib/data';

export default function LinkedInButton() {
    return (
        <a
            href={GENERAL_INFO.linkdinProfile}
            target="_blank"
            rel="noopener noreferrer"
            title="Connect with Anil on LinkedIn"
            className="fixed bottom-5 right-5 z-[9999] bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-xl transition-all duration-300 hover:scale-110"
        >
            <FaLinkedin size={26} />
        </a>
    );
}
