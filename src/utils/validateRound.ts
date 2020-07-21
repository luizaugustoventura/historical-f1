export interface ShortDate {
    year: number,
    month: number,
    day: number
}

export default function isValidRound(currentDate: ShortDate, raceDate: ShortDate): boolean {
    if (raceDate.year >= currentDate.year) {
        if (raceDate.month < currentDate.month) {
            return true;
        }

        if ((raceDate.day <= currentDate.day) && (raceDate.month === currentDate.month)) {
            return true;
        }

        return false;
    }
    
    return true;
}