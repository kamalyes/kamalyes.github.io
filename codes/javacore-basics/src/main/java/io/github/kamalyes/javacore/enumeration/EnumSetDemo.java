package io.github.kamalyes.javacore.enumeration;

import java.util.EnumSet;

/**
 * @author <a href="mailto:forbreak@163.com">Kamalyes</a>
 * @since 2019-03-19
 */
public class EnumSetDemo {

    public static void main(String[] args) {
        System.out.println("EnumSet展示");
        EnumSet<ErrorCodeEn> errSet = EnumSet.allOf(ErrorCodeEn.class);
        for (ErrorCodeEn e : errSet) {
            System.out.println(e.name() + " : " + e.ordinal());
        }
    }

}
