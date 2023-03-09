package io.github.kamalyes.javacore.jvm.classloader.exception;

/**
 * ClassCastException 示例
 *
 * @author <a href="mailto:forbreak@163.com">Kamalyes</a>
 * @since 2020-03-07
 */
public class ClassCastExceptionDemo {

    public static void main(String[] args) {
        Object obj = new Object();
        EmptyClass newObj = (EmptyClass) obj;
    }

    static class EmptyClass {}

}
