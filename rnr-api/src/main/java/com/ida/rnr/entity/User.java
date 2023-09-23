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

	public User(int id, String userId, String password, String employeeId, String employeeName, String employeeEmail,
			String employeePhone, long allocatedPoints, long earnedPoints, long totalPoints) {
		super();
		this.id = id;
		this.userId = userId;
		this.password = password;
		this.employeeId = employeeId;
		this.employeeName = employeeName;
		this.employeeEmail = employeeEmail;
		this.employeePhone = employeePhone;
		this.allocatedPoints = allocatedPoints;
		this.earnedPoints = earnedPoints;
		this.totalPoints = totalPoints;
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
	@Column(name = "emp_email")
	private String employeeEmail;
	@Column(name = "emp_phone")
	private String employeePhone;
	@Column(name = "allocated_Points")
	private long allocatedPoints;
	@Column (name = "earnedPoints")
	private long earnedPoints;
	@Column(name = "total_points")
	private long totalPoints;
	
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
	public long getTotalPoints() {
		return totalPoints;
	}
	public void setTotalPoints(long totalPoints) {
		this.totalPoints = totalPoints;
	}
	public String getEmployeeEmail() {
		return employeeEmail;
	}
	public void setEmployeeEmail(String employeeEmail) {
		this.employeeEmail = employeeEmail;
	}
	public String getEmployeePhone() {
		return employeePhone;
	}
	public void setEmployeePhone(String employeePhone) {
		this.employeePhone = employeePhone;
	}
	public long getAllocatedPoints() {
		return allocatedPoints;
	}
	public void setAllocatedPoints(long allocatedPoints) {
		this.allocatedPoints = allocatedPoints;
	}
	public long getEarnedPoints() {
		return earnedPoints;
	}
	public void setEarnedPoints(long earnedPoints) {
		this.earnedPoints = earnedPoints;
	}
}