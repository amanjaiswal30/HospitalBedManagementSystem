package com.admissionservice.controller;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;
import java.util.ArrayList;
import java.util.List;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.junit.runner.RunWith;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.mock.web.MockHttpServletResponse;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.RequestBuilder;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.web.client.RestTemplate;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.admissionservice.model.Patient;
import com.admissionservice.model.PatientList;
import com.admissionservice.service.PatientServiceImpl;
@ExtendWith(SpringExtension.class)
@WebMvcTest(value=PatientController.class)
class PatientControllerTest {
	@Mock
	private RestTemplate restTemplate;
	@Autowired
	private MockMvc mockmvc;
	@MockBean
	private PatientServiceImpl service;
	private String mapToJson(Object object) throws JsonProcessingException{
		ObjectMapper objmapper=new ObjectMapper();
		return objmapper.writeValueAsString(object);
	}
	Patient patient=null;
	@BeforeEach
	public void setUp()
	{
		patient=new Patient();
		patient.setAddress("3,Jadunath Dey Road,Kolkata-700012");
		patient.setBedRequest("ICU");
		patient.setGender("male");
		patient.setId(4);
		patient.setName("Aman Jaiswal");
	}
	@Test
	public void testSave() throws Exception
	{
		String inputInJson=this.mapToJson(patient);
		String URI="/api/patient";
		RequestBuilder req=MockMvcRequestBuilders.post(URI).accept(MediaType.APPLICATION_JSON).content(inputInJson).contentType(MediaType.APPLICATION_JSON);
		MvcResult result=mockmvc.perform(req).andReturn();
		MockHttpServletResponse response=result.getResponse();
		verify(service).save(Mockito.any(Patient.class));
		assertEquals(HttpStatus.OK.value(),response.getStatus());
	}
	@Test
	public void testDelete() throws Exception
	{
		String URI="/api/patient/4";
		String res="Patient has been deleted with id:4";
		RequestBuilder req=MockMvcRequestBuilders.delete(URI).accept(MediaType.APPLICATION_JSON);
		MvcResult result=mockmvc.perform(req).andReturn();
		verify(service).delete(4);
		String output=result.getResponse().getContentAsString();
		assertEquals(output,res);
	}
	@Test
	public void testUpdate() throws Exception
	{
		patient.setId(9);
		String inputInJson=this.mapToJson(patient);
		String URI="/api/patient";
		RequestBuilder req=MockMvcRequestBuilders.put(URI).accept(MediaType.APPLICATION_JSON).content(inputInJson).contentType(MediaType.APPLICATION_JSON);
		MvcResult result=mockmvc.perform(req).andReturn();
		MockHttpServletResponse response=result.getResponse();
		verify(service).save(Mockito.any(Patient.class));
		assertEquals(HttpStatus.OK.value(),response.getStatus());
		
	}
	@Test
	public void testGet() throws Exception
	{
		String URI="/api/patient/4";
		when(service.get(4)).thenReturn(patient);
		RequestBuilder req=MockMvcRequestBuilders.get(URI).accept(MediaType.APPLICATION_JSON);
		MvcResult result=mockmvc.perform(req).andReturn();
		String expectedJson=this.mapToJson(patient);
		String output=result.getResponse().getContentAsString();
		assertEquals(expectedJson,output);
	}
	@Test
	public void testGetList() throws Exception
	{
		String URI="/api/patient";
		List<Patient> list=new ArrayList<>();
		list.add(patient);
		PatientList obj=new PatientList();
		obj.setPatient(list);
		when(service.getPatient()).thenReturn(obj);
		RequestBuilder req=MockMvcRequestBuilders.get(URI).accept(MediaType.APPLICATION_JSON);
		MvcResult result=mockmvc.perform(req).andReturn();
		String expectedjson=this.mapToJson(obj);
		String output=result.getResponse().getContentAsString();
		assertEquals(output,expectedjson);
		
	}
	

}
