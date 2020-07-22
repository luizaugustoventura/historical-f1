interface Params {
    season: string;
    round: string;
}

interface RoundResultsResponse {
    MRData: {
        RaceTable: {
            Races: {
                raceName: string,
                Results: {
                    position: string,
                    Driver: {
                        givenName: string,
                        familyName: string,
                        nationality: string
                    },
                    Constructor: {
                        name: string
                    },
                    status: string,
                    Time?: {
                        time: string
                    }
                }[]
            }[]
        }
    }
}

export { Params, RoundResultsResponse };