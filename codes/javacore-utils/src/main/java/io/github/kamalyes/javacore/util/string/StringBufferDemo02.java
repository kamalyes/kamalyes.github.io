package io.github.kamalyes.javacore.util.string;

public class StringBufferDemo02 {

    public static void main(String[] args) {
        StringBuffer buf = new StringBuffer(); // 声明StringBuffer对象
        buf.append("Hello ");
        fun(buf); // 传递StringBuffer内容
        System.out.println(buf); // 打印内容
    }

    public static void fun(StringBuffer s) { // 接收StringBuffer引用
        s.append("JAVA ").append("Kamalyes"); // 修改StringBuffer的内容
    }

}
