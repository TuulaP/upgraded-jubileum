// Load environment variables from .env file if available
require('dotenv').load();

var config = {
    env: 'prod',

    host: 'localhost',
    port: process.env.PORT || 5000,

    // Available themes:
    // + night-blue
    // + light-grey
    // + yellow
    // + light-yellow
    // + bordeau
    theme: 'light-grey',

    // clients configs
    api: {
        aws: {
            region: 'eu-west-1'
        },
        jenkins: {
            baseUrl: 'https://my-jenkins.com',
            auth: {
                user: 'me',
                password: 'me'
            }
        }
    },

    // define duration between each dashboard rotation (ms)
    rotationDuration: 8000,

    // define the interval used by Mozaïk Bus to call registered APIs
    apisPollInterval: 35000,

    dashboards: [

        // first dashboard
        {
            // 4 x 3 dashboard
            columns: 4,
            rows: 3,
            widgets: [
                {
                    type: 'embed.markup',
                    title: 'Up?',
                    content: '<img src="http://digi.kansalliskirjasto.fi/aikakausi/binding/1004796/articles/143747/images/163106?scale=1.0"></img>',
                    columns: 1, rows: 1, x: 0, y: 0
                },
                {
                    type: 'time.clock',
                    title: ' ',
                    displayDate: true,
                    columns: 1, rows: 1,
                    x: 0, y: 1
                },
                {
                    type: 'github.status',
                    columns: 1, rows: 1,
                    x: 3, y: 0
                },
                {
                    type: 'weather.weather',
                    city: 'Helsinki',
                    country: 'FI',
                    lang: 'en',
                    limit: 2,
                    columns: 1, rows: 1,
                    x: 1, y: 0
                },
            ]
        },

        // second dashboard
        /*        {
                    // 3 x 2 dashboard
                    columns: 3,
                    rows: 2,
                    widgets: [
                        {
                            type: 'github.issue_labels_treemap',
                            repository: 'educloudalliance/xroad-rest-gateway',
                            labels: [
                                { color: '#6bc2c8', count: 13, name: 'blocker' },
                                { color: '#5f8cc0', count: 3, name: 'enhancement' },
                                { color: '#525487', count: 7, name: 'bug' },
                                { color: '#383b72', count: 16, name: 'question' }
                            ],
                            columns: 1, rows: 1,
                            x: 0, y: 0
                        },
                        {
                            type: 'github.organization_badge',
                            organization: 'mikkeliamk',
                            columns: 1, rows: 1,
                            x: 0, y: 1
                        },
                        {
                            type: 'github.organization_badge',
                            organization: 'City-Of-Mikkeli',
                            columns: 1, rows: 1,
                            x: 2, y: 0
                        },
                        {
                            type: 'github.organization_badge',
                            organization: 'hacklabmikkeli',
                            columns: 1, rows: 1,
                            x: 1, y: 0
                        },
                        {
                            type: 'github.organization_badge',
                            organization: 'educloudalliance',
                            columns: 1, rows: 1,
                            x: 1, y: 1
                        },
                        {
                            type: 'github.organization_badge',
                            organization: 'Helsingin-kaupungin-tietokeskus',
                            columns: 1, rows: 1,
                            x: 2, y: 1
                        },
                    ]
                }*/
    ]
};

module.exports = config;
