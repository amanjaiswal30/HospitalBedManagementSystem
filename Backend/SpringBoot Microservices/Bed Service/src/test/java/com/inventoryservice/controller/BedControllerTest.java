package com.inventoryservice.controller;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;
import java.util.ArrayList;
import java.util.List;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.junit.runner.RunWith;
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

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.inventoryservice.model.Bed;
import com.inventoryservice.model.BedList;
import com.inventoryservice.service.BedServiceImpl;
@ExtendWith(SpringExtension.class)
@WebMvcTest(value=BedController.class)
class BedControllerTest {

	@Autowired
	private MockMvc mockmvc;
	@MockBean
	private BedServiceImpl service;
	private String mapToJson(Object object) throws JsonProcessingException{
		ObjectMapper objmapper=new ObjectMapper();
		return objmapper.writeValueAsString(object);
	}
	Bed bed=null;
	@BeforeEach
	public void setUp()
	{
		bed=new Bed();
		bed.setAvailability(1);
		bed.setBedtype("ICU");
		bed.setId(5);
	}
	@Test
	public void testSave() throws Exception
	{
		String inputInJson=this.mapToJson(bed);
		String URI="/api/bed";
		RequestBuilder req=MockMvcRequestBuilders.post(URI).accept(MediaType.APPLICATION_JSON).content(inputInJson).contentType(MediaType.APPLICATION_JSON);
		MvcResult result=mockmvc.perform(req).andReturn();
		MockHttpServletResponse response=result.getResponse();
		verify(service).save(Mockito.any(Bed.class));		assertEquals(HttpStatus.OK.value(),response.getStatus());
	}
	@Test
	public void testDelete() throws Exception
	{
		String URI="/api/bed/5";
		String res="Bed has been deleted with id:5";
		RequestBuilder req=MockMvcRequestBuilders.delete(URI).accept(MediaType.APPLICATION_JSON);
		MvcResult result=mockmvc.perform(req).andReturn();
		verify(service).delete(5);
		String output=result.getResponse().getContentAsString();
		assertEquals(output,res);
	}
	@Test
	public void testUpdate() throws Exception
	{
		bed.setId(9);
		String inputInJson=this.mapToJson(bed);
		String URI="/api/bed";
		RequestBuilder req=MockMvcRequestBuilders.put(URI).accept(MediaType.APPLICATION_JSON).content(inputInJson).contentType(MediaType.APPLICATION_JSON);
		MvcResult result=mockmvc.perform(req).andReturn();
		MockHttpServletResponse response=result.getResponse();
		verify(service).save(Mockito.any(Bed.class));
		assertEquals(HttpStatus.OK.value(),response.getStatus());
		
	}
	@Test
	public void testGetEmployee() throws Exception
	{
		String URI="/api/bed";
		List<Bed> list=new ArrayList<>();
		list.add(bed);
		BedList obj=new BedList();
		obj.setBed(list);
		when(service.getBed()).thenReturn(obj);
		RequestBuilder req=MockMvcRequestBuilders.get(URI).accept(MediaType.APPLICATION_JSON);
		MvcResult result=mockmvc.perform(req).andReturn();
		String expectedJson=this.mapToJson(obj);
		String output=result.getResponse().getContentAsString();
		assertEquals(expectedJson,output);
	}
	@Test
	public void testGet() throws Exception
	{
		String URI="/api/bed/5";
		when(service.get(5)).thenReturn(bed);
		RequestBuilder req=MockMvcRequestBuilders.get(URI).accept(MediaType.APPLICATION_JSON);
		MvcResult result=mockmvc.perform(req).andReturn();
		String expectedJson=this.mapToJson(bed);
		String output=result.getResponse().getContentAsString();
		assertEquals(expectedJson,output);
	}
	@Test
	public void testGetbyAvaialbility() throws Exception
	{
		String URI="/api/bed/available/ICU";
		when(service.getbyAvailability("ICU")).thenReturn(bed);
		RequestBuilder req=MockMvcRequestBuilders.get(URI).accept(MediaType.APPLICATION_JSON);
		MvcResult result=mockmvc.perform(req).andReturn();
		String expectedJson=this.mapToJson(bed);
		String output=result.getResponse().getContentAsString();
		assertEquals(expectedJson,output);
		
	}

}
