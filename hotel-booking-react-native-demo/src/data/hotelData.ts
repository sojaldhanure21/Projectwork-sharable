import axios from "axios";

export async function hotelData(key:any){

    const data = await axios({
        method:'GET',
        url:`https://api.dev.prrooms.techspian.com/api/hotels/${key}/content`
    })
    return data.data
}