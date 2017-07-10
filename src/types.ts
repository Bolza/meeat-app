export interface EventCreationType {
    date: string;
    location: GeoRegion;
    details: Location;
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

export interface Location {
    latitude: number;
    longitude: number;
    id: string;
    name: string;
    address: string;
    rating: number;
    phone: string;
}
