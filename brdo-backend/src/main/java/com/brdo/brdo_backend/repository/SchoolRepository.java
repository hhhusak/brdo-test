package com.brdo.brdo_backend.repository;

import com.brdo.brdo_backend.entity.School;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

public interface SchoolRepository extends JpaRepository<School, Long>, JpaSpecificationExecutor<School> {

    @Modifying
    @Transactional
    @Query(value = "UPDATE School s SET s.isActive = false WHERE s.id = :id")
    void deactivateSchool(@Param("id") Long id);
}