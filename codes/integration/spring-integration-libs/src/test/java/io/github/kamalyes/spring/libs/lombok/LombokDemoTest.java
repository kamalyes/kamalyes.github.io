package io.github.kamalyes.spring.libs.lombok;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;

/**
 * @author Kamalyes
 */
public class LombokDemoTest {

    @Test
    public void test01() {
        Person person = new Person();
        person.setName("张三");
        person.setAge(20);
        person.setSex("男");
        String expected = "Person(name=张三, sex=男)";
        Assertions.assertEquals(expected, person.toString());
    }

}
