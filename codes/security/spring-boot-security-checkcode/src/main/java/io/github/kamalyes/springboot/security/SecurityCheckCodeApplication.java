package io.github.kamalyes.springboot.security;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

/**
 * @author <a href="mailto:forbreak@163.com">Kamalyes</a>
 * @since 2019-09-25
 */
@SpringBootApplication
@MapperScan("io.github.kamalyes.springboot.security.mapper")
public class SecurityCheckCodeApplication {

    public static void main(String[] args) {
        SpringApplication.run(SecurityCheckCodeApplication.class, args);
    }

}
