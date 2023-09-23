package com.ida.rnr.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="user")
public class User {
	public User() {

	}
	public User(String userId, String password, String employeeId, String employeeName, long points) {
		super();
		this.userId = userId;
		this.password = password;
		this.employeeId = employeeId;
		this.employeeName = employeeName;
		this.points = points;
	}

	@Id
	@GeneratedValue( strategy = GenerationType.IDENTITY)
	private int id;
	@Column(name = "user_id")
	private String userId;
	@Column(name = "password")
	private String password;
	@Column(name = "emp_id")
	private String employeeId;
	@Column(name = "emp_name")
	private String employeeName;
	@Column(name = "points")
	private long points;
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getUserId() {
		return userId;
	}
	public void setUserId(String userId) {
		this.userId = userId;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getEmployeeId() {
		return employeeId;
	}
	public void setEmployeeId(String employeeId) {
		this.employeeId = employeeId;
	}
	public String getEmployeeName() {
		return employeeName;
	}
	public void setEmployeeName(String employeeName) {
		this.employeeName = employeeName;
	}
	public long getPoints() {
		return points;
	}
	public void setPoints(long points) {
		this.points = points;
	}
}