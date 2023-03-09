package io.github.kamalyes.springboot.security;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication(scanBasePackages = { "io.github.kamalyes" })
@MapperScan("io.github.kamalyes.springboot.security.mapper")
public class SecuritySessionApplication {

    public static void main(String[] args) {
        SpringApplication.run(SecuritySessionApplication.class);
    }

}
