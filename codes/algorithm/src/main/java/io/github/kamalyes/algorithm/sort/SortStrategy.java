package io.github.kamalyes.algorithm.sort;

import io.github.kamalyes.algorithm.util.ArrayUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

/**
 * 使用策略模式，对算法进行包装
 *
 * @author Kamalyes
 */
public class SortStrategy {

    private static final Logger logger = LoggerFactory.getLogger(SortStrategy.class);

    private Sort sort;

    public SortStrategy(Sort sort) {
        this.sort = sort;
    }

    public void sort(Integer[] list) {
        logger.info(this.sort.getClass().getSimpleName() + " 排序开始：");
        logger.info("排序前: {}", ArrayUtil.getArrayString(list, 0, list.length - 1));
        this.sort.sort(list);
        logger.info("排序后: {}", ArrayUtil.getArrayString(list, 0, list.length - 1));
    }

}
