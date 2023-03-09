package io.github.kamalyes.javatech.seriralize.binary;

import io.github.kamalyes.javatech.bean.sample.TestBean;
import io.github.kamalyes.javatech.seriralize.FstDemo;
import io.github.kamalyes.javatech.seriralize.JdkSerializeDemo;
import io.github.kamalyes.javatech.seriralize.KryoDemo;
import io.github.kamalyes.javatech.util.BeanUtils;
import org.junit.jupiter.api.Test;

import java.io.IOException;

import static org.assertj.core.api.Assertions.assertThat;

/**
 * 序列化、反序列化性能测试
 *
 * @author <a href="mailto:forbreak@163.com">Kamalyes</a>
 * @since 2019-11-22
 */
public class BinarySerializePerformanceTest {

    private static final int BATCH_SIZE = 100000;

    @Test
    public void testJdkSerialize() throws IOException, ClassNotFoundException {
        long begin = System.currentTimeMillis();
        for (int i = 0; i < BATCH_SIZE; i++) {
            TestBean oldBean = BeanUtils.initJdk8Bean();
            byte[] bytes = JdkSerializeDemo.writeToBytes(oldBean);
            assertThat(bytes).isNotEmpty();
            TestBean newBean = JdkSerializeDemo.readFromBytes(bytes, TestBean.class);
            assertThat(newBean).isNotNull();
        }
        long end = System.currentTimeMillis();
        System.out.printf("JDK 默认序列化/反序列化耗时：%s", (end - begin));
    }

    @Test
    public void testFst() throws IOException {
        long begin = System.currentTimeMillis();
        for (int i = 0; i < BATCH_SIZE; i++) {
            TestBean oldBean = BeanUtils.initJdk8Bean();
            byte[] bytes = FstDemo.writeToBytes(oldBean);
            assertThat(bytes).isNotEmpty();
            TestBean newBean = FstDemo.readFromBytes(bytes, TestBean.class);
            assertThat(newBean).isNotNull();
        }
        long end = System.currentTimeMillis();
        System.out.printf("FST 序列化/反序列化耗时：%s", (end - begin));
    }

    @Test
    public void testKryo() throws IOException {
        long begin = System.currentTimeMillis();
        for (int i = 0; i < BATCH_SIZE; i++) {
            TestBean oldBean = BeanUtils.initJdk8Bean();
            byte[] bytes = KryoDemo.writeToBytes(oldBean);
            assertThat(bytes).isNotEmpty();
            TestBean newBean = KryoDemo.readFromBytes(bytes, TestBean.class);
            assertThat(newBean).isNotNull();
        }
        long end = System.currentTimeMillis();
        System.out.printf("Kryo 序列化/反序列化耗时：%s", (end - begin));
    }

}
