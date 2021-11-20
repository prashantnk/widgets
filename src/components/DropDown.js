import React, { useState } from 'react';
import Id from './Id';

const DropDown = (props) => {
    const [open, setOpen] = useState(false);
    const options = props.options.map((option) => {
        if (option === props.select) {
            return null;
        }
        return (
            <div className="item"
                key={Id()}
                onClick={() => props.setSelect(option)}
            >
                {option.label}
            </div>
        );
    });
    return (
        <div className="ui form ">
            <div className="field">
                <label className="label">Select color : </label>
                <div className={`ui selection dropdown ${open ? "active visible" : ''}`}
                    onClick={() => setOpen(!open)}
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