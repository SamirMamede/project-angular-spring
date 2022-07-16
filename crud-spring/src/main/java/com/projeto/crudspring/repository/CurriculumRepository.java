package com.projeto.crudspring.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.projeto.crudspring.model.Curriculum;

@Repository
public interface CurriculumRepository extends JpaRepository<Curriculum, Long> {
    
}
