
const Navigation = () => {
    return (
        <nav className="container">

            <div className='logo'>
                <img src='/images/brand_logo.png'></img>
            </div>

            <ul>
                <li> <a href="#">Home</a> </li>
                <li> <a href="#">Menu</a> </li>
                <li> <a href="#">Location</a> </li>
                <li> <a href="#">About</a> </li>
                <li> <a href="#">Contact</a> </li>
            </ul>

            <button>Login</button>

        </nav>

    )
}

export default Navigation;