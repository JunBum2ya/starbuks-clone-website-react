import starbucksLogo from "../../images/starbucks_logo.png";
import MainMenuItem from "./MainMenuItem";
import { headerData } from "../../data/data";
import Badges from "./Badges";
import "../../css/header.css";
import MaterialIcon from "../MaterialIcon";
import { useRef, useState } from "react";

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
                    <SearchArea/>
                </div>
                <ul className="main-menu">
                    {
                        headerData.map((item,index) => <MainMenuItem key={`item-${index}`} name={item.name} contents={item.contents} textureContents={item.textureContents} />)
                    }
                </ul>
            </div>
            <Badges/>
        </header>
    );
};

const SearchArea = () => {

    const [focused, setFocused] = useState(false);
    const searchRef = useRef<HTMLInputElement>(null);
    const handleClick = (event: any) => {
        searchRef.current?.focus();
    }

    const handleFocus = () => {
        setFocused(it => !it);
    }

    const handleBlur = () => {
        setFocused(it => !it);
    }

    return (
        <div className="search" onClick={handleClick}>
            <input className={focused ? "focused" : ""} placeholder={focused ? "통합검색" : ""} ref={searchRef} type="text" onFocus={handleFocus} onBlur={handleBlur}/>
            <MaterialIcon>search</MaterialIcon>
        </div>
    );
};

export default Header;