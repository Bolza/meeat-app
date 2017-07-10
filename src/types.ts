export interface Event {
    date: string;
    location: GeoRegion;
    people: number;
    createdAt?: any;
    owner?: any;
}

export interface GeoRegion {
    latitude: number;
    longitude: number;
    latitudeDelta: number;
    longitudeDelta: number;
}
