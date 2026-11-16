package com.nh.bffhr.controller;

import com.nh.bffhr.model.Employee;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class EmployeeController {

    private static final List<Employee> EMPLOYEES = List.of(
        new Employee(1, "Ana Torres", "Ingeniería"),
        new Employee(2, "Luis Peña", "Marketing"),
        new Employee(3, "Carla Ruiz", "Ingeniería"),
        new Employee(4, "Marta Gómez", "Ventas")
    );

    @GetMapping("/api/employees")
    public List<Employee> getEmployees() {
        return EMPLOYEES;
    }
}
