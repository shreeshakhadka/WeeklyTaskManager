package com.takeo.TaskManager.Service;

import com.takeo.TaskManager.Dto.EmployeeDTO;
import com.takeo.TaskManager.Dto.LoginDTO;
import com.takeo.TaskManager.Response.LoginResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("api/v1/employee")

public interface EmployeeService {


    String addEmployee(EmployeeDTO employeeDTO);

    LoginResponse loginEmployee(LoginDTO loginDTO);
}
