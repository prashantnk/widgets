import React, { useEffect, useState } from "react";
import axios from "axios";

const Convert = ({ language, text }) => {
    const [traslatedText, setTranslatedText] = useState("");
    const [debouncedData, setDebouncedData] = useState(text);

    useEffect(() => {
        const tid = setTimeout(() => {
            setDebouncedData(text);
        }, 1000);

        return () => {
            clearTimeout(tid);
        };

    }, [text]);

    useEffect(() => {
        const DoTranslation = async () => {
            const options = {
                method: 'POST',
                url: 'https://microsoft-translator-text.p.rapidapi.com/translate',
                params: { to: language.value, 'api-version': '3.0', profanityAction: 'NoAction', textType: 'plain' },
                headers: {
                    'content-type': 'application/json',
                    'x-rapidapi-host': 'microsoft-translator-text.p.rapidapi.com',
                    'x-rapidapi-key': '698c56c988mshd68805862fd9132p1c4550jsn47f0da9c632b'
                },
                data: [{ Text: debouncedData }]
            };

            const result = await axios.request(options);
            setTranslatedText(result["data"][0]["translations"][0]["text"]);
        }
        DoTranslation();

    }, [debouncedData, language]);
    return (
        <div>
            <h1 className="ui header">
                {traslatedText}
            </h1>
        </div>
    );
};

export default Convert;