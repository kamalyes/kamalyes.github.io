package io.github.kamalyes.springboot;

import org.springframework.stereotype.Service;

/**
 * @author <a href="mailto:forbreak@163.com">Kamalyes</a>
 * @since 2019-12-13
 */
@Service
public class HelloService {

    public String hello() {
        return "Hello World";
    }

}
