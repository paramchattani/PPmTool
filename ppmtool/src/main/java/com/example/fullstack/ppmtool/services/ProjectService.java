package com.example.fullstack.ppmtool.services;

import com.example.fullstack.ppmtool.domain.Project;
import com.example.fullstack.ppmtool.exception.ProjectIdException;
import com.example.fullstack.ppmtool.repositories.ProjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class ProjectService {
    @Autowired
    private ProjectRepository projectRepository;

    public Project saveOrUpdateProject(Project p)
    {
        try{
            p.setProjectIdentifier(p.getProjectIdentifier().toUpperCase());
            return projectRepository.save(p);
        }
        catch(Exception e ){
            throw new ProjectIdException("Project id "+p.getProjectIdentifier().toUpperCase()+"already exists");
        }

    }
    public Project findByProjectIdentifier(String x)
    {
        Project p=projectRepository.findByProjectIdentifier(x);
        if(p==null)
        {
            throw new ProjectIdException("this Project id does'nt exists");
        }
        return p;
    }
public List<Project> findAllProjects()
{
    List<Project> l=new ArrayList<>();
for(Project p:projectRepository.findAll())
    l.add(p);

return l;

}

public void deleteById(String x)
{
    Project p=projectRepository.findByProjectIdentifier(x);
    if(p==null)
    {
        throw new ProjectIdException("this Project id does'nt exists, hence cannot  be deleted ");
    }

    projectRepository.delete(p);
}
}
