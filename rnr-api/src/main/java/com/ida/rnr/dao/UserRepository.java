package com.ida.rnr.dao;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import com.ida.rnr.entity.User;

public interface UserRepository extends JpaRepository<User, Integer>{

	Optional<User> findByUserId(String userId);
	
}
