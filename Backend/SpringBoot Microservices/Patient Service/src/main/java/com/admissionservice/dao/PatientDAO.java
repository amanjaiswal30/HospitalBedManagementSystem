package com.admissionservice.dao;

import java.util.List;

import com.admissionservice.model.Patient;

public interface PatientDAO {
	
	List<Patient> get();
	
	Patient get(int id);
	
	void save(Patient patient);
	
	void delete(int id); 
}
