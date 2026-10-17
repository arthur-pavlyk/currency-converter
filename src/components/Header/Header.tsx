import logo from '../../assets/logofx.svg';
import './Header.scss';

export const Header = () => {
    return (
        <header className="header">
            <a href="https://www.fxchecker.com" target="_blank" rel="noopener noreferrer" className="header-logo">
                <img src={logo} alt="Logo" className="header-logo__img" />
                <span className="header-logo__text">FX CHECKER</span>
            </a>

            <div className="header__data data">
                <p className="data-currency">
                    55 CURRENCIES · EOD · ECB DATA
                </p>
            </div>
        </header>
    )
}