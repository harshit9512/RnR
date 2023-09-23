package com.ida.rnr.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import com.ida.rnr.entity.User;

public interface UserRepository extends JpaRepository<User, Integer>{

	List<User> findByUserId(String userId);
	
}
