package com.joyfarm.global.rests;


import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.lang.NonNull;

@Data
@NoArgsConstructor
@RequiredArgsConstructor
public class JSONData {
    private HttpStatus status = HttpStatus.OK;
    private boolean success = true;
    private Object message;
    @NonNull
    private Object data;
}