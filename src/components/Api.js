import React from 'react';

class API extends React.Component {
    render() {
        return (
            <React.Fragment>
                <h1>
                    <strong>
                        API data for{' '}
                        <a href="https://www.tft-helper.com/" target="_blank" rel="noopener noreferrer">
                            TFT Helper's
                        </a>{' '}
                        champ drop rates and meta compositions.
                    </strong>
                </h1>
                <div>
                    <ul>
                        <li>
                            <a href="https://github.com/lestgabo/tft-helper-api/tree/master/public" target="_blank" rel="noopener noreferrer">
                                Edit data here. Under the files <strong>champDropRates.json and metaCompositions.json</strong>.
                            </a>
                        </li>
                        <li>
                            <a href="https://lestgabo.github.io/tft-helper-api/champDropRates.json" target="_blank" rel="noopener noreferrer">
                                JSON of champ drop rates.
                            </a>
                        </li>
                        <li>
                            <a href="https://lestgabo.github.io/tft-helper-api/metaCompositions.json" target="_blank" rel="noopener noreferrer">
                                JSON of meta composition.
                            </a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2>
                        <i>
                            Need to run <code>`yarn run deploy`</code> to update the github page!
                        </i>
                    </h2>
                </div>
            </React.Fragment>
        );
    }
}

export default API;
