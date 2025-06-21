package com.brdo.brdo_backend.entity;

import com.brdo.brdo_backend.enums.SchoolType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "school")
public class School {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @Column(name = "name", nullable = false)
  private String name;

  @Column(name = "edrpou")
  private String edrpou;

  @Column(name = "region")
  private String region;

  @Enumerated(EnumType.STRING)
  @Column(name = "type")
  private SchoolType type;

  @Column(name = "is_active", columnDefinition = "bool default true")
  private Boolean isActive;

}
