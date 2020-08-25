export class Card {
    id: number
    name: string
    nationalPokedexNumber: number
    imageUrl: string
    subtype: string
    supertype: string
    ability?: string
    ancientTrait?: string
    hp: string
    number: string
    artist: string
    rarity: string
    series: string
    set: string
    setCode: string
    retreatCost: string[]
    text: string[]
    types: string[]
    attacks?: {
        convertedEnergyCost: number
        cost: string[]
        damage: string
        name: string
        text: string
    }[]
    weaknesses?: {
        type: string
        value: string
    }[]
    resistances?: {
        type: string
        value: string
    }[]
    color?: string
}