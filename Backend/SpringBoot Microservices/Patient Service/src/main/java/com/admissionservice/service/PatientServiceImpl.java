package com.admissionservice.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.admissionservice.dao.PatientDAO;
import com.admissionservice.model.Patient;
import com.admissionservice.model.PatientList;

@Service
public class PatientServiceImpl implements PatientService {

	@Autowired
	private PatientDAO patientDAO; 
	

	@Transactional
	@Override
	public Patient get(int id) {
		return patientDAO.get(id);
	}

	@Transactional
	@Override
	public void save(Patient patient) {
		patientDAO.save(patient);
	}

	@Transactional
	@Override
	public void delete(int id) {
		patientDAO.delete(id);
	}
	@Transactional
	@Override
	public PatientList getPatient() {
		PatientList patientlist=new PatientList();
		patientlist.setPatient(patientDAO.get());
		return patientlist;
	}

}
