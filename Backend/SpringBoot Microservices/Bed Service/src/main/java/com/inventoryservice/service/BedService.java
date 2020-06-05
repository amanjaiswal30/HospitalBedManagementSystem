package com.inventoryservice.service;

import java.util.List;

import com.inventoryservice.model.Bed;
import com.inventoryservice.model.BedList;

public interface BedService {
	
	Bed get(int id);
	
	void save(Bed bed);
	
	void delete(int id); 
	
	BedList getBed();
	
	Bed getbyAvailability(String bedType);
	
}
