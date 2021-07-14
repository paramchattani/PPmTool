package com.example.fullstack.ppmtool.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;


public class ProjectIdException extends RuntimeException  {
    public ProjectIdException(String message) {
        super(message);
    }
}
