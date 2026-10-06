import { Link } from "react-router-dom";

function Logo({ onClick }) {
    return (
        <>
            <style>{`
                .site-logo {
                    display: inline-flex;
                    flex: 0 0 155px;
                    width: 155px;
                    height: 62px;
                    align-items: center;
                    justify-content: flex-start;
                    background: transparent;
                    text-decoration: none;
                }

                .site-logo-image {
                    display: block;
                    width: 155px;
                    height: 62px;
                    object-fit: contain;
                    object-position: center;
                    border: none;
                    outline: none;
                    background: transparent;
                    transition: transform .25s ease, opacity .25s ease;
                }

                .site-logo:hover .site-logo-image {
                    transform: scale(1.03);
                    opacity: .94;
                }

                .site-logo:focus-visible {
                    outline: 2px solid #315ba8;
                    outline-offset: 3px;
                }

                @media (max-width: 900px) {
                    .site-logo,
                    .site-logo-image {
                        width: 138px;
                        height: 56px;
                    }

                    .site-logo {
                        flex-basis: 138px;
                    }
                }

                @media (max-width: 500px) {
                    .site-logo,
                    .site-logo-image {
                        width: 118px;
                        height: 47px;
                    }

                    .site-logo {
                        flex-basis: 118px;
                    }
                }

                @media (prefers-reduced-motion: reduce) {
                    .site-logo-image {
                        transition: none;
                    }
                }
            `}</style>

            <Link
                to="/"
                className="site-logo"
                aria-label="This Innovation Private Limited home"
                onClick={onClick}
            >
                <img
                    src="/logo.svg"
                    alt="This Innovation Private Limited logo"
                    className="site-logo-image"
                />
            </Link>
        </>
    );
}

export default Logo;