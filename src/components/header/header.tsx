import './header.scss';

export const HeaderComponent = () => {
    return (
        <header className="header">
            <a href="#" className="header__logo-link">
                <img
                    src="./image/logo-black.svg"
                    alt="logo"
                    className="header__logo"
                />
            </a>
            <nav className="header__nav nav">
                <ul className="nav__list">
                    <li className="nav__item">
                        <a href="#">About Product</a>
                    </li>
                    <li className="nav__item">
                        <a href="#">Reviews</a>
                    </li>
                    <li className="nav__item">
                        <a href="#">Contact Us</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};
