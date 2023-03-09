package io.github.kamalyes.pattern.singleton;

/**
 * 相同的类在多线程环境中会出错。 多线程可能会同时调用构建方法并获取多个单例类的实例。
 */
public class DemoMultiThread {

    public static void main(String[] args) {
        System.out.println("If you see the same value, then singleton was reused (yay!)" + "\n" +
            "If you see different values, then 2 singletons were created (booo!!)" + "\n\n" +
            "RESULT:" + "\n");
        Thread threadFoo = new Thread(new ThreadFoo());
        Thread threadBar = new Thread(new ThreadBar());
        threadFoo.start();
        threadBar.start();
    }

    static class ThreadFoo implements Runnable {

        @Override
        public void run() {
            Singleton singleton = Singleton.getInstance("FOO");
            System.out.println(singleton.value);
        }

    }

    static class ThreadBar implements Runnable {

        @Override
        public void run() {
            Singleton singleton = Singleton.getInstance("BAR");
            System.out.println(singleton.value);
        }

    }

}
