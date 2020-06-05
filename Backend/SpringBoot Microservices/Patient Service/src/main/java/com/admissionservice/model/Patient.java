package com.admissionservice.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "tbl_patient")
public class Patient {

	@Column
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Integer id;
	@Column
	private String name;
	@Column
	private String gender;
	@Column
	private String address;
	@Column
	private String BedRequest;
	@Column
	private Integer BedId;
	
	public Integer getBedId() {
		return BedId;
	}
	public void setBedId(Integer bedId) {
		BedId = bedId;
	}
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getBedRequest() {
		return BedRequest;
	}
	public void setBedRequest(String bedRequest) {
		BedRequest = bedRequest;
	}
	@Override
	public String toString() {
		return "Patient [id=" + id + ", name=" + name + ", gender=" + gender + ", address=" + address + ", BedRequest="
				+ BedRequest + ", BedId=" + BedId + "]";
	}


	
	

	
	
}
