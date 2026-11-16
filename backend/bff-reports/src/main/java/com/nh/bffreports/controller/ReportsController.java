package com.nh.bffreports.controller;

import com.nh.bffreports.model.DepartmentReport;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class ReportsController {

    private static final List<DepartmentReport> REPORTS = List.of(
        new DepartmentReport("Ingeniería", 32),
        new DepartmentReport("Marketing", 14),
        new DepartmentReport("Ventas", 21)
    );

    @GetMapping("/api/reports")
    public List<DepartmentReport> getReports() {
        return REPORTS;
    }
}
