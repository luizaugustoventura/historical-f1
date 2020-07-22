export default interface RaceResults {
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
}