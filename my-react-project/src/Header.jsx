//react components are capable of returning a single element, but can also return children elements
function Header(){
//combination of js and html language can be written hgere

    return( //can write pure html         
        <header>
            <h1>My website</h1>
            <nav>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
            <hr/>
        </header>
    );
}

export default Header