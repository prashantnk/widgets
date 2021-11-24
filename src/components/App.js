import React, { useState } from 'react';
import Accordion from './Accordion';
import ButtonClickCounter from './ButtonClickCounter';
import DropDown from './DropDown';
import Search from './Search';

const items = [
    {
        title: "Lorem Ipsum is simply dummy text of the printing .",
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    },
    {
        title: "Lorem Ipsum is simply dummy text of the printing .",
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    },
    {
        title: "Lorem Ipsum is simply dummy text of the printing .",
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    }
];

const options = [
    {
        label: "Red",
        value: "red"
    },
    {
        label: "Green",
        value: "green"
    },
    {
        label: "Blue",
        value: "blue"
    }
];

const App = () => {
    const [select, setSelect] = useState(options[0]);
    const [openDropdown, setOpenDropdown] = useState(1);
    return (
        <div style={{ margin: "20px" }}>
            <button onClick={() => setOpenDropdown(!openDropdown)}>Toggle Dropdown</button>
            {
                openDropdown ? <DropDown options={options} select={select} setSelect={setSelect} /> : null
            }
            <Accordion items={items} />
            <ButtonClickCounter />
            <Search />
        </div>
    );
}

export default App;