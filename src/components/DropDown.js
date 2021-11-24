import React, { useEffect, useRef, useState } from 'react';
import Id from './Id';

const DropDown = (props) => {
    const [open, setOpen] = useState(false);
    const dropdownRef = useRef();
    const options = props.options.map((option) => {
        if (option === props.select) {
            return null;
        }
        return (
            <div className="item"
                key={Id()}
                onClick={() => { props.setSelect(option); }}
            >
                {option.label}
            </div>
        );
    });
    useEffect(() => {
        const closeDropdown = (e) => {
            // console.log("body clicked");
            if (dropdownRef.current && dropdownRef.current.contains(e.target)) return;
            setOpen(0);
        }
        document.body.addEventListener('click', closeDropdown);
        return (() => {
            document.body.removeEventListener('click', closeDropdown);
        });
    }, []);
    return (
        <div className="ui form " ref={dropdownRef}>
            <div className="field">
                <label className="label">Select color : </label>
                <div className={`ui selection dropdown ${open ? "active visible" : ''}`}
                    onClick={() => { setOpen(!open); }}
                >
                    <i className="dropdown icon"></i>
                    <div className="default text">{props.select.label}</div>
                    <div className={`menu ${open ? 'visible transition' : ''}`}>
                        {options}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DropDown;