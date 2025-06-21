package com.brdo.brdo_backend.service;

import com.brdo.brdo_backend.entity.School;
import com.brdo.brdo_backend.enums.SchoolType;
import com.brdo.brdo_backend.repository.SchoolRepository;
import jakarta.persistence.criteria.Predicate;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@Slf4j
@RequiredArgsConstructor
public class SchoolService {

  private final SchoolRepository schoolRepository;

  public List<School> getSchools(SchoolType type, String region, Boolean isActive) {
    return schoolRepository.findAll((root, query, cb) -> {
        List<Predicate> predicates = new ArrayList<>();

        if (type != null) {
            predicates.add(cb.equal(root.get("type"), type));
        }
        if (region != null && !region.isEmpty()) {
            predicates.add(cb.equal(root.get("region"), region));
        }
        if (isActive != null) {
            predicates.add(cb.equal(root.get("isActive"), isActive));
        }

        return predicates.isEmpty() ? null : cb.and(predicates.toArray(new Predicate[0]));
    });
  }

  public School createSchool(School school) {
    return schoolRepository.save(school);
  }

  public void deactivateSchool(Long id) {
    schoolRepository.deactivateSchool(id);
  }

}
