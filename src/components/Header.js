import React from "react";
import Link from "./Link";

const Header = () => {
    return (
        <div className="ui four item menu">
            <Link className="item" href="/">Accordian</Link>
            <Link className="item" href="/translate">translate</Link>
            <Link className="item" href="/clickCounter">clickCounter</Link>
            <Link className="item" href="/search">search</Link>
        </div>
    );
}

export default Header;