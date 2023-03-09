package io.github.kamalyes.javacore.jvm.classloader.exception;

/**
 * UnsatisfiedLinkError 示例
 *
 * @author <a href="mailto:forbreak@163.com">Kamalyes</a>
 * @since 2020-03-07
 */
public class UnsatisfiedLinkErrorDemo {

    public native void nativeMethod();

    static {
        System.loadLibrary("NoLib");
    }

    public static void main(String[] args) {
        new UnsatisfiedLinkErrorDemo().nativeMethod();
    }

}
