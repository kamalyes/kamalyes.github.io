package io.github.kamalyes.spring.dubbo.api;

/**
 * @author Kamalyes
 */
public interface HelloProvider {

    /**
     * 定义接口
     *
     * @param name
     * @return
     */
    String sayHello(String name);

}
