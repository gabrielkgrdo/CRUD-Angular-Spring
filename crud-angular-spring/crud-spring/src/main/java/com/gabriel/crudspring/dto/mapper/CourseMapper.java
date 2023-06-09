package com.gabriel.crudspring.dto.mapper;

import org.springframework.stereotype.Component;

import com.gabriel.crudspring.dto.CourseDTO;
import com.gabriel.crudspring.model.Course;

@Component
public class CourseMapper {
    
    public CourseDTO toDto(Course course) {

        if (course == null) {
            return null;
        }

        return new CourseDTO(course.getId(), course.getName(), course.getCategory());
    }

    public Course toEntity(CourseDTO courseDTO) {

        if (courseDTO == null) {
            return null;
        }

        Course course = new Course();
        if (courseDTO._id() != null){
            course.setId(courseDTO._id());
        }
        course.setName(courseDTO.name());
        course.setCategory(courseDTO.category());
        return course;
    }
}
