package com.inventoryservice.dao;

import java.util.List;

import com.inventoryservice.model.Bed;

public interface BedDAO {
	
	List<Bed> get();
	
	Bed get(int id);
	
	void save(Bed bed);
	
	void delete(int id); 
	
	Bed getbyAvailability(String bedType);
	
}
