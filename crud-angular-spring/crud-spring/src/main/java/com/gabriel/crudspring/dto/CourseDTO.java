package com.gabriel.crudspring.dto;

import org.hibernate.validator.constraints.Length;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;

public record CourseDTO(
    Long _id, 
    @NotBlank @NotNull @Length(min = 5, max=100) String name, 
    @NotNull  @NotBlank  @Length(max = 20) @Pattern(regexp = "Back-End|Front-End") String category) {
    
}