export class Marker {
    constructor(
        public latitude: number,
        public longitude: number,
        public title: string,
        public icon: string,
        public iconWidth: number,
        public iconHeight: number,
    ) { }
}

export class Coordinates {
    constructor(
        public latitude: number,
        public longitude: number,
    ) { }
}

export class CoordinateBoundaries {
    constructor(
        public minLatitude: number,
        public maxLatitude: number,
        public minLongitude: number,
        public maxLongitude: number
    ) { }
}

export class EarthInteractions {
    constructor(
        public mapCenter: Coordinates,
        public mapBoundaries: CoordinateBoundaries,
    ) { }
}


export class Address {
    constructor(
        public street: string,
        public country: string,
        public county: string,
        public city: string
    ) { }
}
