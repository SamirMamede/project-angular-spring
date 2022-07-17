package com.projeto.crudspring.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.Data;

@Data
@Entity
public class Curriculum {
    
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @JsonProperty("_id")
    private Long id;

    @Column(length = 200, nullable = false)
    private String nome;

    @Column(nullable = false)
    private String competencias;

    @Column(length = 100, nullable = false)
    private String vagaDesejada;

    @Column(length = 50, nullable = false)
    private String numeroContato;

    @Column(length = 200, nullable = false)
    private String linkedin;
}
