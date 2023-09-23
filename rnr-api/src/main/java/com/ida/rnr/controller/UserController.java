package com.ida.rnr.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.ida.rnr.dao.UserRepository;
import com.ida.rnr.entity.User;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1")
public class UserController {

	@Autowired
	private UserRepository userRepository;

	@GetMapping("/users")
	public List<User> getAllUsers() {
		return userRepository.findAll();
	}

	@PostMapping("/users")
	public User saveUser(@RequestBody User user) {
		return userRepository.save(user);
	}

	@GetMapping("/users/{userId}")
	public Optional<User> getByUserId(@PathVariable String userId) {
		Optional<User> lUser = !userRepository.findByUserId(userId).isEmpty() ? userRepository.findByUserId(userId)
				: null;
		return lUser;
	}
}
