import React from "react";
import Link from "./Link";

const Header = () => {
    return (
        <div className="ui four item menu">
            <Link className="item" href="/">Accordian</Link>
            <Link className="item" href="/translate">Translate</Link>
            <Link className="item" href="/clickCounter">Click Counter</Link>
            <Link className="item" href="/search">Search</Link>
        </div>
    );
}

export default Header;