export class HouseModel {
    agent: string;
    agentName: string;
    houseType: string;
    monthlyPrice:number;
    houseDetail:{
        numberOfRooms: number,
        numberOfLiveRooms: number,
        numberOfShowers : number,
        numberOfKitchen :number,
        numberOfDiningRoom:number,
        numberOfTerrace:number
    }
    houseDescription: string;
    houseCity: string;
    location:{
        longitude: number,
        latitude: number
    }


}
