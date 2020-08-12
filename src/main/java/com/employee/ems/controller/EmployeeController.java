package com.employee.ems.controller;

import com.employee.ems.exception.ResourceNotFoundException;
import com.employee.ems.model.Employee;
import com.employee.ems.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class EmployeeController {
    @Autowired
    private EmployeeRepository employeeRepository;

    //get all employees
    @GetMapping("/employees")
    public List<Employee> getAllEmployee() {
        return employeeRepository.findAll();
    }

    //create employee rest api
    @PostMapping("/employees")
    public Employee createEmployee(@RequestBody Employee employee) {
        return employeeRepository.save(employee);
    }

    //get employee by id rest api
    @GetMapping("/employees/{id}")
    public ResponseEntity<Employee> getEmployeeById(@PathVariable Long id) {

//        () ->    this is lambda expression to implement custom exception
        Employee employee = employeeRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Employee not exist with id :" + id));
        return ResponseEntity.ok(employee);
    }

    //update employee rest api
    @PutMapping("/employees/{id}")
//    Since are directly map Request JSON object into java object
    public ResponseEntity<Employee> updateEmployee(@PathVariable Long id, @RequestBody Employee employeeDetails) {
       Employee employee = employeeRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Employee not exit with id :" + id));

       employee.setFirstName(employeeDetails.getFirstName());
       employee.setLastName(employeeDetails.getLastName());
       employee.setEmailId(employeeDetails.getEmailId());

       Employee updateEmployee=employeeRepository.save(employee);
       return ResponseEntity.ok(updateEmployee);

    }
    @DeleteMapping("/employees/{id}")
    public ResponseEntity<Map<String,Boolean> >deleteEmployee(@PathVariable Long id){
        {
            Employee employee=employeeRepository.findById(id)
                    .orElseThrow(()->new ResourceNotFoundException("Employee wih id "+id+"does not exist ."));
            employeeRepository.delete(employee);
            Map<String,Boolean> response=new HashMap<>();
            response.put("deleted",Boolean.TRUE);
            return ResponseEntity.ok(response);

        }
    }
}
