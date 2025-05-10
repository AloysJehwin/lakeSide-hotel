import axios from "axios"

export const api= axios.create({
    baseURL: "http://localhost:9090",
})
// This function is used to add a new room to the backend
export async function addRoom(photo, roomType, roomPrice){
    const formData = new FormData();
    formData.append("photo", photo);
    formData.append("roomType", roomType);
    formData.append("roomPrice", roomPrice);

    const response = await api.post("/rooms/add/new-room", formData) 
    return response.data === 200 ? true : false;
}

// This function is used to fetch all the room types from the backend
export async function getAllRooms(){
    try{
        const response = await api.get("/rooms/roomTypes");
        return response.data;
    }catch (error) {
        throw new Error("Error fetching room types", error);
    }
}