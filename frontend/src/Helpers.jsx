import data from './NameConversion.json'

export default function DisplayNameLeague(name_match) {
    const name = data.names.find((item) => item.url === name_match)

    return name.display
}


export function DisplayNameTeam(league,team) {
    const name = data[league].find((item) => item.url === team)

    return name.display

}


