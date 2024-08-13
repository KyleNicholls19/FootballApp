import data from './NameConversion.json'

export function DisplayNameLeague(name_match) {
    const name = data.names.find((item) => item.url === name_match)

    return name.display
}