package com.brdo.brdo_backend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication(scanBasePackages = "com.brdo")
public class BrdoBackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(BrdoBackendApplication.class, args);
	}

}
