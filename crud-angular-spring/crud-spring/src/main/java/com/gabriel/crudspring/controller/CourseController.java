package com.gabriel.crudspring.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.gabriel.crudspring.model.Course;
import com.gabriel.crudspring.repository.CourseRepository;


@RestController
@RequestMapping("/api/courses")
public class CourseController {

    private final CourseRepository courseRepository;

    
    
    public CourseController(CourseRepository courseRepository) {
        this.courseRepository = courseRepository;
    }



    @GetMapping
    public List<Course> list(){
        return courseRepository.findAll();
    }

    @PostMapping
    public void create(@RequestBody Course course) {
        //System.out.println(course.getName());
        courseRepository.save(course);
    }
}
