package io.github.kamalyes.javatech;

import org.junit.Test;

/**
 * @author <a href="mailto:forbreak@163.com">Kamalyes</a>
 * @since 2019/10/29
 */
public class CliUtilTests {

    @Test
    public void prepare() throws Exception {
        String[] args = { "-sql", "select * from aa", "-name", "测试" };
        CliUtil.prepare(args);
    }

}
