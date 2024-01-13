export interface Planet {
    name : string,
    description: string,
    massValue : number,
    massExponent : number,
    volValue : number,
    volExponent : number,
    gravity: number,
    sideralOrbit: number,
    sideralRotation: number,
    avgTemp: number,
    moons: [{}],
    distanceFromSun: number
    img :string
}