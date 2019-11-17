import React from 'react';

class ChampDropRate extends React.Component {
    render() {
        let champDropRate = [
            {
                key: 'tier1',
                name: 'Tier 1',
                pool: 29,
                cost: 1,
                levels: [
                    {
                        level1: 100,
                        level2: 100,
                        level3: 70,
                        level4: 50,
                        level5: 35,
                        level6: 25,
                        level7: 20,
                        level8: 15,
                        level9: 10
                    }
                ]
            },
            {
                key: 'tier2',
                name: 'Tier 2',
                pool: 22,
                cost: 2,
                levels: [
                    {
                        level1: null,
                        level2: null,
                        level3: 25,
                        level4: 35,
                        level5: 35,
                        level6: 35,
                        level7: 30,
                        level8: 20,
                        level9: 15
                    }
                ]
            },
            {
                key: 'tier3',
                name: 'Tier 3',
                pool: 16,
                cost: 3,
                levels: [
                    {
                        level1: null,
                        level2: null,
                        level3: 5,
                        level4: 15,
                        level5: 25,
                        level6: 30,
                        level7: 33,
                        level8: 35,
                        level9: 30
                    }
                ]
            },
            {
                key: 'tier4',
                name: 'Tier 4',
                pool: 12,
                cost: 4,
                levels: [
                    {
                        level1: null,
                        level2: null,
                        level3: null,
                        level4: null,
                        level5: 5,
                        level6: 10,
                        level7: 15,
                        level8: 24,
                        level9: 30
                    }
                ]
            },
            {
                key: 'tier5',
                name: 'Tier 5',
                pool: 10,
                cost: 5,
                levels: [
                    {
                        level1: null,
                        level2: null,
                        level3: null,
                        level4: null,
                        level5: null,
                        level6: null,
                        level7: 2,
                        level8: 6,
                        level9: 15
                    }
                ]
            }
        ];
        return (
            <div>
                {champDropRate.map(tier => {
                    // return tier;
                    console.log(tier);
                    // return tier;
                })}
            </div>
        );
    }
}

export default ChampDropRate;
