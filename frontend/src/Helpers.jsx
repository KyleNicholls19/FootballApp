import data from './NameConversion.json'

export default function DisplayNameLeague(name_match) {
    const name = data.names.find((item) => item.url === name_match)

    return name.display
}


export function DisplayNameTeam(name_match) {

}


