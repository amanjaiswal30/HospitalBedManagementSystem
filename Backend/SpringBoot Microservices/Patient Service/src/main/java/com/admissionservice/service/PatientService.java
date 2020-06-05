package com.admissionservice.service;

import java.util.List;

import com.admissionservice.model.Patient;
import com.admissionservice.model.PatientList;

public interface PatientService {
	
	
	Patient get(int id);
	
	void save(Patient patient);
	
	void delete(int id);
	
	PatientList getPatient();
}
