package com.example.fullstack.ppmtool.web;

import com.example.fullstack.ppmtool.domain.Project;
import com.example.fullstack.ppmtool.services.MapValidationService;
import com.example.fullstack.ppmtool.services.ProjectService;
import org.apache.coyote.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.annotation.*;

import javax.swing.*;
import javax.validation.Valid;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/project")
public class ProjectController {
    @Autowired
    private ProjectService projectService;

    @Autowired
    MapValidationService ms;
//resposne  entity better  contron over json responses

    //valid  request only accepted
    @PostMapping("")
    public ResponseEntity<?> createNewProject(@Valid  @RequestBody Project p, BindingResult result)
    {

        //get field erros  give  us list of errors
        //great trick
        ResponseEntity<?> errorMap=ms.MapService(result);
        if(errorMap!=null)
            return errorMap;


        projectService.saveOrUpdateProject(p);
        return new ResponseEntity<Project>(p, HttpStatus.CREATED);
    }
@GetMapping("/{projectId}")
public ResponseEntity<?> getProjectById(@PathVariable String projectId)
{

    Project p=projectService.findByProjectIdentifier(projectId);

    return new ResponseEntity<Project>(p,HttpStatus.OK);
}

@GetMapping("/projects")
    public ResponseEntity<?> getAllProjects()
{
    return new ResponseEntity<List<Project>>(projectService.findAllProjects(),HttpStatus.OK);
}

@DeleteMapping("/{id}")
public ResponseEntity<?> deleteProject(@PathVariable String id )
{
    projectService.deleteById(id);
    return new ResponseEntity<String>("Project"+"wiht id : "+id+ "deleted",HttpStatus.OK);
}
}

