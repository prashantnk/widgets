import React from 'react';
import Accordion from './Accordion';
import ButtonClickCounter from './ButtonClickCounter';
import Search from './Search';
import Translate from './Translate';

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

const App = () => {
    return (
        <div style={{ margin: "20px" }}>
            <Translate />
            <Accordion items={items} />
            <ButtonClickCounter />
            <Search />
        </div>
    );
}

export default App;