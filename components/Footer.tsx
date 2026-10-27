import { GENERAL_INFO } from '@/lib/data';

const Footer = () => {
    return (
        <footer className="text-center pb-10" id="contact">
            <div className="container">
                <p className="text-lg text-muted-foreground">
                    Have a project in mind?
                </p>

                <a
                    href={`mailto:${GENERAL_INFO.email}`}
                    className="text-3xl sm:text-4xl font-anton inline-block mt-5 mb-10 hover:underline"
                >
                    {GENERAL_INFO.email}
                </a>

                <div>
                    <p className="text-muted-foreground hover:text-white transition">
                        © {new Date().getFullYear()} Anil. All rights
                        reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
