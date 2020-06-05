package com.admissionservice.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.admissionservice.model.Patient;
import com.admissionservice.model.PatientList;
import com.admissionservice.service.PatientService;

@RestController
@CrossOrigin
@RequestMapping("/api")
public class PatientController {
	@Autowired
	private PatientService patientService;
	
	@PostMapping("/patient")
	public Patient save(@RequestBody Patient patientObj) {
		patientService.save(patientObj);
		return patientObj;
	}
	
	@GetMapping("/patient")
	public PatientList getPatient(){
		return patientService.getPatient();
	}
	
	@GetMapping("/patient/{id}")
	public Patient get(@PathVariable int id) {
		Patient patientObj = patientService.get(id);
		return patientObj;
	}
	
	@PutMapping("/patient")
	public Patient update(@RequestBody Patient patientObj) {
		patientService.save(patientObj);
		return patientObj;
	}
	
	
	@DeleteMapping("/patient/{id}")
	public String delete(@PathVariable int id) {
		patientService.delete(id);
		return "Patient has been deleted with id:"+id;
	}
}
