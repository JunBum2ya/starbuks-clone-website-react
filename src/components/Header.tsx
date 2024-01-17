import starbucksLogo from "../images/starbucks_logo.png";

const Header = () => {
    return (
        <header>
            <div className="inner">
                <a className="logo" href="#none">
                    <img src={starbucksLogo} alt="STARBUCKS"></img>
                </a>
                <div className="sub-menu">
                    <ul className="menu">
                        <li>
                            <a href="#none">Sign In</a> 
                        </li>
                        <li>
                            <a href="#none">My Starbucks</a> 
                        </li>
                        <li>
                            <a href="#none">Customer Service & Ideas</a> 
                        </li>
                        <li>
                            <a href="#none">Find Store</a> 
                        </li>
                    </ul>
                    <div className="search">
                        <input type="text"/>
                        <div className="material-icons">search</div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;