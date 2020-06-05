package com.inventoryservice.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "tbl_inventory")
public class Bed {

	@Column
	@Id
	private Integer id;
	@Column
	private String bedtype;
	@Column
	private Integer availability;
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getBedtype() {
		return bedtype;
	}
	public void setBedtype(String bedtype) {
		this.bedtype = bedtype;
	}
	public Integer getAvailability() {
		return availability;
	}
	public void setAvailability(Integer availability) {
		this.availability = availability;
	}
	@Override
	public String toString() {
		return "Disease [id=" + id + ", bedtype=" + bedtype + ", availability=" + availability + "]";
	}
	
	

}