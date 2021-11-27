import React from "react";

const Link = ({ className, href, children }) => {
    const onClick = (e) => {
        if (e.metaKey || e.ctrlKey) return;

        e.preventDefault();

        window.history.pushState({}, "", href); // window.location.pathname = href; {shouldn't be done}

        const navEvent = new PopStateEvent('popstate'); // could have used "Event" class only 
        window.dispatchEvent(navEvent);
    }
    return (
        <a className={className} href={href} onClick={onClick}>
            {children}
        </a>
    );
}

export default Link;