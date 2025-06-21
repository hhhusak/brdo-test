export interface School {
    id: number;
    name: string;
    edrpou: string;
    region: string;
    type: string;
    isActive: boolean;
}

export interface SchoolFilters {
    region: string;
    type: string;
    activeOnly: boolean;
}