export interface ShowroomInterface {
    _id: number, 
    title: string, 
    boards: Board[]
}

export interface Board {
    id: number,
    title: string,
    image: string
}