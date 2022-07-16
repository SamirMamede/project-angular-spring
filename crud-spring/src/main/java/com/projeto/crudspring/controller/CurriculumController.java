package com.projeto.crudspring.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.projeto.crudspring.model.Curriculum;
import com.projeto.crudspring.repository.CurriculumRepository;

@RestController
@RequestMapping("/api/curriculums")
public class CurriculumController {
    
    private CurriculumRepository curriculumRepository;

    public CurriculumController(CurriculumRepository curriculumRepository) {
        this.curriculumRepository = curriculumRepository;
    }

    @GetMapping
    public List<Curriculum> list(){
        return curriculumRepository.findAll();
    }
}
