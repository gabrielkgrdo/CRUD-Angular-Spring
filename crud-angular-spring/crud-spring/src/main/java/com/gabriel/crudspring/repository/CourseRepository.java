package com.gabriel.crudspring.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.gabriel.crudspring.model.Course;


public interface CourseRepository extends JpaRepository<Course, Long>{
    
}
