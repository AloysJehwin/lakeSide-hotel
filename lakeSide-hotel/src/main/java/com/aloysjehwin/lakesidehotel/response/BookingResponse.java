package com.aloysjehwin.lakesidehotel.response;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.nio.FloatBuffer;
import java.time.LocalDate;
import java.util.*;
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class BookingResponse {
    private Long id;
    private LocalDate checkInDate;
    private LocalDate checkOutDate;
    private String guestName;
    private int numOfAdults;
    private int numOfChildren;
    private int totalNumOfGuests;
    private String bookingConfirmationCode;
    private  boolean roomResponse;

    public BookingResponse(String bookingConfirmationCode, LocalDate checkOutDate, LocalDate checkInDate, Long id) {
        this.bookingConfirmationCode = bookingConfirmationCode;
        this.checkOutDate = checkOutDate;
        this.checkInDate = checkInDate;
        this.id = id;
    }
}
