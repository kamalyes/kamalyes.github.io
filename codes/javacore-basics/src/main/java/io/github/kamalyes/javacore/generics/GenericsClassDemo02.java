package io.github.kamalyes.javacore.generics;

import io.github.kamalyes.javacore.generics.entity.MyMap;

/**
 * @author <a href="mailto:forbreak@163.com">Kamalyes</a>
 * @since 2019-03-20
 */
public class GenericsClassDemo02 {

    public static void main(String[] args) {
        MyMap<Integer, String> map = new MyMap<>(1, "one");
        System.out.println(map);
    }

}
// Output:
// MyMap{key=1, value=one}
