package io.github.kamalyes.javacore.operator;

/**
 * 算术操作符示例
 *
 * @author <a href="mailto:forbreak@163.com">Kamalyes</a>
 */
public class InstanceofOperatorDemo {

    public static void main(String[] args) {
        Animal animal = new Cat();
        boolean result = animal instanceof Cat;
        System.out.println(result);
    }

    static class Animal {

    }

    static class Cat extends Animal {

    }

}
// output:
// true
