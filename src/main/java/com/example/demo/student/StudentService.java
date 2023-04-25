package com.example.demo.student;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PostMapping;

import java.util.List;

@AllArgsConstructor
@Service
public class StudentService {
    private final StudentRepository studentRepository;

    public List<Student> getAllStudents(){
        return studentRepository.findAll();
    }
    @PostMapping
    public void addStudent(Student student) {
        studentRepository.save(student);
    }
}
