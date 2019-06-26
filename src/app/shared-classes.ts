export class Marker {
    latitude: number;
    longitude: number;
    title: string;
    icon: string;
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
        public userClick: Coordinates
    ) { }
}
