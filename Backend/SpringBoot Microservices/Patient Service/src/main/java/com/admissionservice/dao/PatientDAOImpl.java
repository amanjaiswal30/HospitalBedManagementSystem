package com.admissionservice.dao;

import java.util.List;

import javax.persistence.EntityManager;

import org.hibernate.Session;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.admissionservice.model.Patient;

@Repository
public class PatientDAOImpl implements PatientDAO {

	@Autowired
	private EntityManager entityManager;
	
	@Override
	public List<Patient> get() {
		Session currentSession = entityManager.unwrap(Session.class);
		Query<Patient> query = currentSession.createQuery("from Patient", Patient.class);
		List<Patient> list = query.getResultList();
		return list;
	}

	@Override
	public Patient get(int id) {
		Session currentSession = entityManager.unwrap(Session.class);
		Patient patientObj = currentSession.get(Patient.class, id);
		return patientObj;
	}

	@Override
	public void save(Patient patient) {
		Session currentSession = entityManager.unwrap(Session.class);
		currentSession.saveOrUpdate(patient);
	}

	@Override
	public void delete(int id) {
		Session currentSession = entityManager.unwrap(Session.class);
		Patient patientObj = currentSession.get(Patient.class, id);
		currentSession.delete(patientObj);
	}

}
