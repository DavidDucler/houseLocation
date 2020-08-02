 export interface HouseModel {
    key: number;
    agent: string;
    agentName: string;
    houseType: string;
    monthlyPrice: number;
    numberOfRooms: number;
    numberOfLiveRooms: number;
    numberOfShowers: number;
    numberOfKitchen: number;
    numberOfDiningRoom: number;
    numberOfTerrace: number
    houseDescription: string;
    houseCity: string;
    location: {
        longitude: number,
        latitude: number,
    };


}
interface Photo {
    filepath: string;
    webviewPath: string;
    base64?: string;
}
