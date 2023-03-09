package io.github.kamalyes.pattern.producer_consumer.product;

import lombok.extern.slf4j.Slf4j;

/**
 * @author <a href="mailto:forbreak@163.com">Kamalyes</a>
 * @since 2020-08-09
 */
@Slf4j
public class Milk extends AbstractProduct {

    @Override
    public void use() {
        log.debug("使用牛奶");
    }

}
