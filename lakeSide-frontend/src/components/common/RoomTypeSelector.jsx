import React,{ useEffect, useState } from 'react';
import { getRoomTypes } from '../api/roomTypes';

const RoomTypeSelector =(handleRoomInputChange, newRoom)=>{
    const[roomTypes,setRoomTypes]=useState([])
    const[showNewRoomTypeInput,setNewShowRoomTypeInput]=useState(false)
    const[newRoomType,setNewRoomType]=useState("")

    useEffect(()=>{
        getRoomTypes().then((data)=>{
            setRoomTypes(data)
        })
    },[])

    const handleNewRoomTypeInputChange=(e)=>{
        setNewRoomType(e.target.value);
    }

    const handleAddNewRoomType = ()=>{
        if(newRoomType !== ""){
            setRoomTypes([...roomTypes, newRoomType])
            setNewRoomType("")
            setNewShowRoomTypeInput(false)
        }
    }

    return(
        <>
        {roomTypes.legth > 0 && (
            <div>
                <select
                id='roomType'
                name='roomType'
                className='form-select'
                value={newRoom.roomType}
                onChange={(e)=>{
                    if(e.target.value === "Add New Room Type"){
                        setNewShowRoomTypeInput(true)
                    }
                    else{
                        handleRoomInputChange(e)
                    }
                }}>
                    <option value={""}>select a room type</option>
                    <option value={"Add New"}>Add New</option>
                    {roomTypes.map((type, index)=>(
                        <option key={index} value={type}>
                            {type}
                        </option>
                    ))}
                </select>
                {showNewRoomTypeInput && ( 
                    <div className='input-group'>
                        <input 
                        className="form-control"
                        type='test'
                        placeholder='Enter a new Room Type'
                        onChange={handleNewRoomTypeInputChange} />
                        <button className='btn btn-hotel' type='button' onClick={handleAddNewRoomType}>
                            Add
                        </button>
                    </div>                   
                    )}
            </div>
        )}
        </>
    )
}
export default RoomTypeSelector;