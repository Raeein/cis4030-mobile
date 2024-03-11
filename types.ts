export interface ProfileInfo {
    data: string,
    information: string[]
}

export interface UserTripData {
    name: string,
    location: string,
    dateStart: string,
    dateEnd: string,
    collaborators: TripCollaborator[],
    events?: Event[]
}

export interface TripCollaborator {
    name: string,
    imageURL: string
}

export interface Event {
    name: string,
    location: string,
    date: string,
    timeStart: string,
    timeEnd: string,
}