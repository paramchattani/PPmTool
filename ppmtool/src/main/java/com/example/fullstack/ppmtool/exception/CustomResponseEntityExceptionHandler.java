package com.example.fullstack.ppmtool.exception;

import org.apache.coyote.Response;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

//Global exception handling for  controllers  via  controller  advice
@ControllerAdvice
@RestController
public class CustomResponseEntityExceptionHandler {
@ExceptionHandler

    public ResponseEntity<Object> handleProjectIdException(ProjectIdException ex)
{
    ProjectIdExceptionResponse e=new ProjectIdExceptionResponse(ex.getMessage());
return new ResponseEntity<>(e, HttpStatus.BAD_REQUEST);
}

}
