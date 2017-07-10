export interface EventCreationState {
    date: string;
    location: GeoRegion;
    details: LocationDetails | any;
    people: number;
}

export interface GeoRegion {
    latitude: number;
    longitude: number;
    latitudeDelta?: number;
    longitudeDelta?: number;
}

export interface LocationDetails {
    latitude: number;
    longitude: number;
    id: string;
    name: string;
    address: string;
    rating: number;
    phone: string;
}
