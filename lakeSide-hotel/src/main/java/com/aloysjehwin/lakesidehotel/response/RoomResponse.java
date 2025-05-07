package com.aloysjehwin.lakesidehotel.response;

import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.util.*;

@Data
@NoArgsConstructor
public class RoomResponse {
    private Long id;
    private String roomType;
    private BigDecimal roomPrice;
    private boolean isBooked;
    private String photo;
    private List<BookingResponse> bookings;

    public RoomResponse(Long id, BigDecimal roomPrice, String roomType) {
        this.id = id;
        this.roomPrice = roomPrice;
        this.roomType = roomType;
    }

    public RoomResponse(Long id, String roomType, boolean isBooked, BigDecimal roomPrice, byte[] photoBytes, List<BookingResponse> bookings) {
        this.id = id;
        this.roomType = roomType;
        this.isBooked = isBooked;
        this.roomPrice = roomPrice;
        this.photo = photoBytes != null ? Base64.getEncoder().encodeToString(photoBytes) : null;
        this.bookings = bookings;
    }
}