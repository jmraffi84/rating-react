import './header.css';
const Header = () => {
    return (
        <div className='container'>
            <nav class="navbar navbar-expand-lg  container-wrapper">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Navbar</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="/">Themes</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/">Templates</a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Bundles
                                </a>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="/">Action</a></li>
                                    <li><a class="dropdown-item" href="/">Another action</a></li>
                                    <li><hr class="dropdown-divider" /></li>
                                    <li><a class="dropdown-item" href="/">Something else here</a></li>
                                </ul>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link ">Forms</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link ">Resources</a>
                            </li>
                        </ul>
                        <form class="d-flex" role="search">
                            <ul className='list-group'>
                                <li class="nav-item">
                                    <a class="list-group-item">Blog</a>
                                </li>
                            </ul>
                            <button class="btn btn-danger" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header;