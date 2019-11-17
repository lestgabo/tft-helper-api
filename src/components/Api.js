import React from 'react';

import ChampDropRate from './ChampDropRates';

class API extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div>Hello did it update?</div>
                <div>
                    <p>
                        <ChampDropRate />
                    </p>
                </div>
            </React.Fragment>
        );
    }
}

export default API;
