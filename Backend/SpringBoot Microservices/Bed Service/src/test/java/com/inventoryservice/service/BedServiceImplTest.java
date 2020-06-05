package com.inventoryservice.service;

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

import com.inventoryservice.dao.BedDAOImpl;
import com.inventoryservice.model.Bed;
import com.inventoryservice.model.BedList;
@ExtendWith(SpringExtension.class)
class BedServiceImplTest {
	@InjectMocks
	private BedServiceImpl bedServiceImpl;
	@Mock
	private BedDAOImpl bedDaoImpl;
	Bed bed=null;
	@BeforeEach
	public void setUp()
	{
		bed=new Bed();
		bed.setId(6);
		bed.setAvailability(1);
		bed.setBedtype("Isolation");
	}
	@Test
	public void testSaveNewBed()
	{
		
		bedServiceImpl.save(bed);
		verify(bedDaoImpl).save(bed);
	}
	@Test
	public void testGetBedById()
	{
		when(bedDaoImpl.get(6)).thenReturn(bed);
		Bed bedObj=bedServiceImpl.get(6);
		assertEquals(bed,bedObj);
	}
	@Test
	public void testGetBedByNonExistingId()
	{
		when(bedDaoImpl.get(10)).thenThrow(new NullPointerException("Employee does not exist"));
		assertThrows(NullPointerException.class,()->bedServiceImpl.get(10));
	
	}
	@Test
	public void testGetBedByNegativeId()
	{
		when(bedDaoImpl.get(-6)).thenThrow(new IllegalArgumentException("Id cannot be negative"));
		assertThrows(IllegalArgumentException.class,()->bedServiceImpl.get(-6));
		
		
	}
	@Test
	public void testDeleteBedbyId()
	{
		bedServiceImpl.delete(6);
		verify(bedDaoImpl).delete(6);
		
	}
	@Test
	public void testDeleteBedByInvalidId()
	{
		doThrow(NullPointerException.class).when(bedDaoImpl).delete(66);
		assertThrows(NullPointerException.class,()->bedServiceImpl.delete(66));
		}
	@Test
	public void testDeleteBedbyNegativeId()
	{
		doThrow(IllegalArgumentException.class).when(bedDaoImpl).delete(-66);
		assertThrows(IllegalArgumentException.class,()->bedServiceImpl.delete(-66));
	}
	@Test
	public void testgetBed()
	{
		List<Bed> list=new ArrayList<>();
		list.add(bed);
		BedList obj=new BedList();
		when(bedDaoImpl.get()).thenReturn(list);
		obj.setBed(list);
		assertEquals(bedServiceImpl.getBed().getBed().get(0),obj.getBed().get(0));
		
	}
	@Test
	public void testgetByAvailability()
	{
		Bed obj=new Bed();
		obj=bed;
		when(bedDaoImpl.getbyAvailability("ICU")).thenReturn(obj);
		obj=bedServiceImpl.getbyAvailability("ICU");
		verify(bedDaoImpl).save(obj);
		
	}

}
