package com.takeo.TaskManager.Service.Implement;

import com.takeo.TaskManager.Dto.EmployeeDTO;
import com.takeo.TaskManager.Dto.LoginDTO;
import com.takeo.TaskManager.Entity.Employee;
import com.takeo.TaskManager.Repo.EmployeeRepo;
import com.takeo.TaskManager.Response.LoginResponse;
import com.takeo.TaskManager.Service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class EmployeeIMPL implements EmployeeService {

    @Autowired
    private EmployeeRepo employeeRepo;

    @Autowired
    private PasswordEncoder passwordEncoder;


    @Override
    public String addEmployee(EmployeeDTO employeeDTO) {

        Employee employee= new Employee(

            employeeDTO.getEmployeeid(),
            employeeDTO.getEmployeename(),
            employeeDTO.getEmail(),

            this.passwordEncoder.encode(employeeDTO.getPassword())
        );
        employeeRepo.save(employee);
        return  employee.getEmployeename();

    }
    EmployeeDTO employeeDTO;

    @Override
    public LoginResponse loginEmployee(LoginDTO loginDTO) {
       String msg = "";
       Employee employee1 = employeeRepo.findByEmail((loginDTO.getEmail()));
       if (employee1 != null)
       {
           String password = loginDTO.getPassword();
           String encodedPassword = employee1.getPassword();
           Boolean isPwdRight = passwordEncoder.matches(password,encodedPassword);
           if (isPwdRight)
           {
               Optional<Employee> employee = employeeRepo.findOneByEmailAndPassword(loginDTO.getEmail(),encodedPassword);
               if(employee.isPresent())
               {
                   return new LoginResponse("Login Success", true);

               }
               else {
                   return new LoginResponse("Login Failed", false);
               }
           }
           else{
               return new LoginResponse("Password Doesn't Match", false);
           }
       }
       else {
           return new LoginResponse("Email doesn't exist", false);
       }
    }
}
