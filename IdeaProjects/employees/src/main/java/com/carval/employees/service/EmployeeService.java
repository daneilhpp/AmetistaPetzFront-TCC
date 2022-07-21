package com.carval.employees.service;

import com.carval.employees.exception.UserNotFoundException;
import com.carval.employees.models.Employee;
import com.carval.employees.repo.EmployeeRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class EmployeeService
{
    private final EmployeeRepo employeeRepo;

    @Autowired
    public EmployeeService(EmployeeRepo employeeRepo)
    {
        this.employeeRepo = employeeRepo;
    }

    public Employee addEmployee(Employee emp)
    {
        emp.setEmployeeCode(UUID.randomUUID().toString());
        return employeeRepo.save(emp);
    }

    public List<Employee> findAllEmployees()
    {
        return employeeRepo.findAll();
    }

    public Employee findEmployeeById(Long id)
    {
        return employeeRepo.findEmployeeById(id).orElseThrow(() -> new UserNotFoundException("Usuario de Id "+id+" nao achado"));
    }

    public Employee updateEmployee(Employee emp)
    {
        return employeeRepo.save(emp);
    }

    public void deleteEmployee(Long id)
    {
        employeeRepo.deleteEmployeeById(id);
    }
}
