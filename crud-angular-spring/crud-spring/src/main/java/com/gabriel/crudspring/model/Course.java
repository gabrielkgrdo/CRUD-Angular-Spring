package com.gabriel.crudspring.model;

import com.fasterxml.jackson.annotation.JsonProperty;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

@Data
@Entity
public class Course {
    
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)   
    @JsonProperty("_id")
    private Long id;

    @Column(name = "curso", length = 100, nullable = false)
    private String name; 

    @Column(name = "categoria", length = 20, nullable = false)
    private String category;
}
