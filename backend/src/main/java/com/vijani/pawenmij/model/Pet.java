package com.vijani.pawenmij.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.GenericGenerator;

import java.util.UUID;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "pet")
public class Pet {

    @Id
    @Column(name = "id")
    @GeneratedValue(generator = "uuid-hibernate-generator")
    @GenericGenerator(name = "uuid-hibernate-generator", strategy = "org.hibernate.id.UUIDGenerator")
    private UUID id;

    @Column(name = "type", nullable = false)
    private String type;

    @Column(name = "breed", nullable = false)
    private String breed;

    @Column(name = "gender", nullable = false)
    private String gender;

    @Column(name = "status")
    private String status = "Available";

    @Column(name = "name")
    private String name;

    @Column(name = "age")
    private Double age = 0.0;

    @Column(name = "vaccinated")
    private Boolean vaccinated = false;

    @Column(name = "chipped")
    private Boolean chipped = false;

    @Column(name = "neutered")
    private Boolean neutered = false;

    @Column(name = "description", length = 1000)
    private String description;

    @ManyToOne(optional = false)
    @JoinColumn(name = "owner_id")
    private User owner;

    public Pet(String type, String breed, String gender, String status, String name, Double age, Boolean vaccinated, Boolean chipped, Boolean neutered, String description, User owner) {
        this.type = type;
        this.breed = breed;
        this.gender = gender;
        this.status = status;
        this.name = name;
        this.age = age;
        this.vaccinated = vaccinated;
        this.chipped = chipped;
        this.neutered = neutered;
        this.description = description;
        this.owner = owner;
    }
}
