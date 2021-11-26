import React from 'react';
import Accordion from './Accordion';
import ButtonClickCounter from './ButtonClickCounter';
import Header from './Header';
import Route from './Route';
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
            <Header />
            <Route path="/"> <Accordion items={items} /></Route>
            <Route path="/translate"> <Translate /></Route>
            <Route path="/clickCounter"> <ButtonClickCounter /></Route>
            <Route path="/search"> <Search /></Route>
        </div>
    );
}

export default App;