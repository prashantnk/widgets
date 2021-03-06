import React, { useState } from "react";
import DropDown from "./DropDown"
import Convert from "./Convert";
const options = [
    {
        label: "Afrikaans",
        value: "af"
    },
    {
        label: "Arabic",
        value: "ar"
    },
    {
        label: "Hindi",
        value: "hi"
    }
];

const Translate = () => {
    const [language, setLanguage] = useState(options[0]);
    const [text, setText] = useState("");
    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label> Enter Text : </label>
                    <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
                </div>
            </div>
            <DropDown options={options} select={language} setSelect={setLanguage} label="Select Language :" />
            <h2 className="ui header">Translation : </h2>
            <Convert language={language} text={text} />
        </div>
    );

}

export default Translate;