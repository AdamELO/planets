export interface Planet {
    name: string,
    description: string,
    img: string
    infos: {
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
        moons: [{}] | null,
        aphelion: number,
        perihelion: number,
    }
}