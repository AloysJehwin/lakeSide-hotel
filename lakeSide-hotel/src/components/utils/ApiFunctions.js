import axios from "axios"

export const api=axios.create({
    baseURL:"https://localhost:9090.com"
})
// This Function is used to add rooms to the server
export async function addRoom(photo,roomType,roomPrice) {
    const formData=new FormData()
    formData.append("photo",photo)
    formData.append("roomType",roomType)
    formData.append("roomPrice",roomPrice)

    const response=await api.post("/rooms/add/addRoom",formData)
    return response.status===201;

}
// This Function is used to fetch all the room types from the server
export async function getRoomTypes() {
    try{
        const response=await api.get("/rooms/room-types")
        return response.data
    }catch(error){
        throw new Error("Error fetching room types"+error.message)
    }
}