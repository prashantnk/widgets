import React from "react";

const Header = () => {
    return (
        <div class="ui four item menu">
            <a className="item" href="/">Accordian</a>
            <a className="item" href="/translate">translate</a>
            <a className="item" href="/clickCounter">clickCounter</a>
            <a className="item" href="/search">search</a>
        </div>
    );
}

export default Header;