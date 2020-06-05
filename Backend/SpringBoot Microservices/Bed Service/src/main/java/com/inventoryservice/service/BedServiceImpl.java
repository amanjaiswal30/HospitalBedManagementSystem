package com.inventoryservice.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.inventoryservice.dao.BedDAO;
import com.inventoryservice.model.Bed;
import com.inventoryservice.model.BedList;

@Service
public class BedServiceImpl implements BedService {

	@Autowired
	private BedDAO bedDAO; 

	@Transactional
	@Override
	public Bed get(int id) {
		return bedDAO.get(id);
	}

	@Transactional
	@Override
	public void save(Bed bed) {
		bedDAO.save(bed);
	}

	@Transactional
	@Override
	public void delete(int id) {
		bedDAO.delete(id);
	}
	@Transactional
	@Override
	public BedList getBed() {
		BedList bedlist=new BedList();
		bedlist.setBed(bedDAO.get());
		return bedlist;
	}
	
	@Transactional
	@Override
	public Bed getbyAvailability(String bedType) {
		Bed obj=new Bed();
		obj=bedDAO.getbyAvailability(bedType);
		obj.setAvailability(0);
		bedDAO.save(obj);
		return obj;
	}



}
