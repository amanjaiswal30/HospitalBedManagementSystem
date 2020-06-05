package com.admissionservice.service;

import static org.junit.Assert.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.Mockito.doThrow;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.util.ArrayList;
import java.util.List;

import org.junit.Before;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.MockitoJUnitRunner;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import com.admissionservice.dao.PatientDAOImpl;
import com.admissionservice.model.Patient;
import com.admissionservice.model.PatientList;
//@RunWith(MockitoJUnitRunner.class)
@ExtendWith(SpringExtension.class)
//@SpringBootTest
class PatientServiceImplTest {
	@InjectMocks
	private PatientServiceImpl patientServiceImpl;
	@Mock
	private PatientDAOImpl patientDaoImpl;
	Patient patient=null;
	@BeforeEach
	public void setUp()
	{
		patient=new Patient();
		patient.setAddress("3,Jadunath Dey Road,Kolkata-700012");
		patient.setBedRequest("ICU");
		patient.setGender("male");
		patient.setId(6);
		patient.setName("Aman Jaiswal");
	}
	@Test
	public void testSaveUser()
	{
		
		patientServiceImpl.save(patient);
		verify(patientDaoImpl).save(patient);
	}
	@Test
	public void testGetUserById()
	{
		when(patientDaoImpl.get(6)).thenReturn(patient);
		Patient patientObj=patientServiceImpl.get(6);
		assertEquals(patient,patientObj);
	}
	@Test
	public void testGetUserByNonExistingId()
	{
		when(patientDaoImpl.get(10)).thenThrow(new NullPointerException("Employee does not exist"));
		assertThrows(NullPointerException.class,()->patientServiceImpl.get(10));
	
	}
	@Test
	public void testGetUserByNegativeId()
	{
		when(patientDaoImpl.get(-6)).thenThrow(new IllegalArgumentException("Id cannot be negative"));
		assertThrows(IllegalArgumentException.class,()->patientServiceImpl.get(-6));
//		patientServiceImpl.delete(-6);
//		verify(patientDaoImpl).get();
		
	}
	@Test
	public void testDeleteUserbyId()
	{
		patientServiceImpl.delete(6);
		verify(patientDaoImpl).delete(6);
		
	}
	@Test
	public void testDeleteUserByInvalidId()
	{
		doThrow(NullPointerException.class).when(patientDaoImpl).delete(66);
		assertThrows(NullPointerException.class,()->patientServiceImpl.delete(66));
		}
	@Test
	public void testDeleteUserbyNegativeId()
	{
		doThrow(IllegalArgumentException.class).when(patientDaoImpl).delete(-66);
		assertThrows(IllegalArgumentException.class,()->patientServiceImpl.delete(-66));
	}
	@Test
	public void testget()
	{
		List<Patient> list=new ArrayList<>();
		list.add(patient);
		when(patientDaoImpl.get()).thenReturn(list);
		PatientList obj=new PatientList();
		obj.setPatient(list);
		assertEquals(patientServiceImpl.getPatient().patient,obj.getPatient());
	}

}
