package com.gabriel.crudspring.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PathVariable;

import com.gabriel.crudspring.dto.CourseDTO;
import com.gabriel.crudspring.dto.mapper.CourseMapper;
import com.gabriel.crudspring.exception.RegistroNaoEncontrado;
import com.gabriel.crudspring.repository.CourseRepository;

import jakarta.validation.Valid;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;

@Validated
@Service
public class CourseService {

    private final CourseRepository courseRepository;
    private final CourseMapper courseMapper;

    public CourseService(CourseRepository courseRepository, CourseMapper courseMapper){
        this.courseRepository = courseRepository;
        this.courseMapper =  courseMapper;
    }

    public List<CourseDTO> list() {
        return courseRepository.findAll()
            .stream()
            .map(courseMapper::toDto)
            .collect(Collectors.toList());
    }

    public CourseDTO findById(@PathVariable @NotNull @Positive Long id) {
        return courseRepository.findById(id)
        .map(courseMapper::toDto)
        .orElseThrow(() -> new RegistroNaoEncontrado(id));
    }

    public CourseDTO create(@Valid @NotNull CourseDTO course) {
        return courseMapper.toDto(courseRepository.save(courseMapper.toEntity(course)));
    }

    public CourseDTO update(@NotNull @Positive Long id, @Valid @NotNull CourseDTO course) {
        return courseRepository.findById(id)
                .map(registro -> {
                    registro.setName(course.name());
                    registro.setCategory(course.category());
                    return courseMapper.toDto(courseRepository.save(registro));
                }) .orElseThrow(() -> new RegistroNaoEncontrado(id));
    }

    public void delete(@PathVariable @NotNull @Positive Long id) {
        courseRepository.delete(courseRepository.findById(id)
        .orElseThrow(() -> new RegistroNaoEncontrado(id)));
        
    }
}
