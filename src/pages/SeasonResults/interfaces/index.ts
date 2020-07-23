interface Params {
    season: string
}

interface SeasonResultsResponse {
    MRData: {
        RaceTable: {
            Races: [{
                season: string,
                round: string,
                raceName: string,
                Circuit: {
                    circuitId: string,
                    circuitName: string,
                    Location: {
                        locality: string,
                        country: string
                    }
                },
                date: string
            }]
        }
    }
}

interface Races {
    season: string,
    round: string,
    raceName: string,
    Circuit: {
        circuitId: string,
        circuitName: string,
        Location: {
            locality: string,
            country: string
        }
    },
    date: string
}

export { Params, SeasonResultsResponse, Races };