package io.github.kamalyes.javatech.zk.dlock;

import java.util.concurrent.TimeUnit;

/**
 * 分布式锁接口
 *
 * @author <a href="mailto:forbreak@163.com">Kamalyes</a>
 * @since 2020-01-14
 */
public interface DistributedLock {

    void lock();

    boolean tryLock(long timeout, TimeUnit unit);

    void unlock();

}
