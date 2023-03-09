package io.github.kamalyes.pattern.producer_consumer.factory;

import io.github.kamalyes.pattern.producer_consumer.product.Cheese;
import io.github.kamalyes.pattern.producer_consumer.product.Milk;
import io.github.kamalyes.pattern.producer_consumer.product.StarterCulture;
import lombok.extern.slf4j.Slf4j;

/**
 * @author <a href="mailto:forbreak@163.com">Kamalyes</a>
 * @since 2020-08-09
 */
@Slf4j
public class CheeseCreator implements AbstractProductCreator {

    private Milk produceMilk() {
        log.debug("生产一份牛奶");
        return new Milk();
    }

    private StarterCulture produceStarterCulture() {
        log.debug("生产一份发酵剂");
        return new StarterCulture();
    }

    @Override
    public Cheese produceCheese() {
        Milk milk1 = produceMilk();
        Milk milk2 = produceMilk();
        StarterCulture starterCulture = produceStarterCulture();
        milk1.use();
        milk2.use();
        starterCulture.use();
        log.debug("消耗两份牛奶，一份发酵剂");
        log.debug("生产一份奶酪");
        return new Cheese();
    }

}
