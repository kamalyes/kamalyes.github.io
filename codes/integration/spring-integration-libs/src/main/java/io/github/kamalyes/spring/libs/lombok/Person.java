package io.github.kamalyes.spring.libs.lombok;

import lombok.Data;
import lombok.ToString;

/**
 * @author Kamalyes
 */
@Data
@ToString(exclude = "age")
public class Person {

    private String name;

    private Integer age;

    private String sex;

}
