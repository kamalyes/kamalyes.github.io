package io.github.kamalyes.bigdata.zk.dlock;

/**
 * @author <a href="mailto:forbreak@163.com">Kamalyes</a>
 * @since 2020-01-14
 */
public interface TimeoutHandler<V> {

    V onTimeout() throws InterruptedException;

}
