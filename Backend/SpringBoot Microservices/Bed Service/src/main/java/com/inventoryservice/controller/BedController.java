package com.inventoryservice.controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.inventoryservice.model.Bed;
import com.inventoryservice.model.BedList;
import com.inventoryservice.service.BedService;
@CrossOrigin
@RestController
@RequestMapping("/api")
public class BedController {

	@Autowired
	private BedService bedService;
	
	@PostMapping("/bed")
	public Bed save(@RequestBody Bed bed) {
		bedService.save(bed);
		return bed;
	}
	
	@GetMapping("/bed")
	public BedList getBed(){
		return bedService.getBed();
	}
	
	@GetMapping("/bed/{id}")
	public Bed get(@PathVariable int id) {
		Bed bed = bedService.get(id);
		return bed;
	}
	
	@PutMapping("/bed")
	public Bed update(@RequestBody Bed bed) {
		bedService.save(bed);
		return bed;
	}
	
	@DeleteMapping("/bed/{id}")
	public String delete(@PathVariable int id) {
		bedService.delete(id);
		return "Bed has been deleted with id:"+id;
	}
	@GetMapping("/bed/available/{bedType}")
	public Bed getbyAvailability(@PathVariable String bedType)
	{
		return bedService.getbyAvailability(bedType);
	}
}
