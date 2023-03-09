package io.github.kamalyes.pattern.producer_consumer.factory;

import io.github.kamalyes.pattern.producer_consumer.product.Cheese;

/**
 * @author <a href="mailto:forbreak@163.com">Kamalyes</a>
 * @since 2020-08-09
 */
public interface AbstractProductCreator {

    Cheese produceCheese();

}
