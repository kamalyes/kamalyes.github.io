package io.github.kamalyes.algorithm.sort;

/**
 * @author Kamalyes
 */
public interface Sort {

    /**
     * 排序接口
     *
     * @param list 要排序的数组
     */
    <T extends Comparable<T>> void sort(T[] list);

}
