import React, { useEffect } from "react";
import axios from "axios";

const Convert = ({ language, text }) => {
    useEffect(() => {
        var options = {
            method: 'POST',
            url: 'https://microsoft-translator-text.p.rapidapi.com/translate',
            params: { to: language.value, 'api-version': '3.0', profanityAction: 'NoAction', textType: 'plain' },
            headers: {
                'content-type': 'application/json',
                'x-rapidapi-host': 'microsoft-translator-text.p.rapidapi.com',
                'x-rapidapi-key': '698c56c988mshd68805862fd9132p1c4550jsn47f0da9c632b'
            },
            data: [{ Text: text }]
        };

        axios.request(options).then(function (response) {
            console.log(response.data);
        }).catch(function (error) {
            console.error(error);
        });
    }, [language, text]);
    return (
        <div></div>
    );
};

export default Convert;