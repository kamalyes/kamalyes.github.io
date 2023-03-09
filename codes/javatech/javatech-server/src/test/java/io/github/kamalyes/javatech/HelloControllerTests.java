package io.github.kamalyes.javatech;

import io.github.kamalyes.javatech.service.HelloService;
import org.assertj.core.api.Assertions;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

/**
 * 单元测试
 * @author 11123558
 * @date 2022-07-28
 */
@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations = {"classpath:spring/spring-servlet.xml"})
public class HelloControllerTests {

    @Autowired
    private HelloService service;

    @Test
    public void test() {
        String msg = service.hello();
        Assertions.assertThat("hello").isEqualTo(msg);
    }
}
