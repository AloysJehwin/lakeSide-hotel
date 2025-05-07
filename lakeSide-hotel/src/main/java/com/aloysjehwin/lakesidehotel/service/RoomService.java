package com.aloysjehwin.lakesidehotel.service;


import com.aloysjehwin.lakesidehotel.RoomRepsitory.RoomRepository;
import com.aloysjehwin.lakesidehotel.model.Room;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import javax.sql.rowset.serial.SerialBlob;
import java.io.IOException;
import java.math.BigDecimal;
import java.sql.Blob;
import java.sql.SQLException;
@Service
@RequiredArgsConstructor
public class RoomService implements IRoomService {
    private final RoomRepository roomRepository;
    @Override
    public Room addNewRoom(MultipartFile file, String roomType, BigDecimal roomPrice) throws SQLException, IOException {
        Room room = new Room();
        room.setRoomType(roomType);
        room.setRoomPrice(roomPrice);
        if(!file.isEmpty()){
            byte[] photobytes= file.getBytes();
            Blob photoBlob = new SerialBlob(photobytes);
            room.setPhoto(photoBlob);
        }
        return roomRepository.save(room);
    }
}
