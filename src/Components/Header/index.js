import './header.css';
import { Link } from 'react-router-dom';
const Header = (props) => {
    const { productData, cart } = props
    const cartCount = cart.length;

    return (
        <div className='container'>
            <nav className="navbar navbar-expand-lg  container-wrapper">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">Start Bootstrap</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">About</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="true">
                                    Shop
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="a.dropdown-item" href="/">All Products</a></li>
                                    <li><a className="dropdown-item" href="/">Popular items</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="/">New Arrivals</a></li>
                                </ul>
                            </li>
                        </ul>


                        <button>
                            <Link to="/cart">View Cart ({cartCount})</Link>
                        </button>

                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header;