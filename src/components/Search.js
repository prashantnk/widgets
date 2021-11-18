import React, { useEffect } from "react";
import axios from 'axios';
const useState = React.useState;
const Search = () => {

    const [term, setTerm] = useState(" ");
    const [results, setResults] = useState([]);

    useEffect(() => {

        const search = async () => {
            const result = await axios.get("https://en.wikipedia.org/w/api.php", {
                params: {
                    action: "query",
                    list: "search",
                    origin: '*',
                    format: "json",
                    srsearch: term
                }
            });
            setResults(result.data.query.search.map((result) => {
                return (
                    <div className="item" key={result.pageid}>
                        <div className="right floated content">
                            <a className="ui button"
                                href={`https://en.wikipedia.org/?curid=${result.pageid}`}>GO
                            </a>
                        </div>
                        <div className="header">
                            {result.title}
                        </div>
                        <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
                    </div>
                );
            }));
        }

        const timeoutId = setTimeout(() => {
            search();
        }, 500);

        return (() => {
            clearTimeout(timeoutId);
        });

    }, [term]);


    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter Search Term : </label>
                    <input type="text" value={term} onChange={(e) => setTerm(e.target.value)} />
                </div>
            </div>
            <div className="ui celled list">
                {results}
            </div>
        </div>
    );
}

export default Search;