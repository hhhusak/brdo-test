package com.brdo.brdo_backend.controller;

import com.brdo.brdo_backend.entity.School;
import com.brdo.brdo_backend.enums.SchoolType;
import com.brdo.brdo_backend.service.SchoolService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/schools")
@RequiredArgsConstructor
public class SchoolController {

    private final SchoolService schoolService;

    @GetMapping
    public List<School> getAllSchools(
            @RequestParam(required = false) SchoolType type,
            @RequestParam(required = false) String region,
            @RequestParam(required = false) Boolean isActive) {
        return schoolService.getSchools(type, region, isActive);
    }

    @PostMapping
    public School createSchool(@RequestBody School school) {
        return schoolService.createSchool(school);
    }

    @PatchMapping("/{id}/deactivate")
    public void deactivateSchool(@PathVariable Long id) {
        schoolService.deactivateSchool(id);
    }
}