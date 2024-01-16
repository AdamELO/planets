export interface Planet {
    name: string,
    description: string,
    mass: {
        massValue: number,
        massExponent: number,
    },
    vol: {
        volValue: number,
        volExponent: number,
    },
    gravity: number,
    sideralOrbit: number,
    sideralRotation: number,
    avgTemp: number,
    moons: [{}],
    distanceFromSun: number,
    img: string
}