package io.github.kamalyes.algorithm.sort;

import io.github.kamalyes.algorithm.sort.strategy.*;
import io.github.kamalyesyesyes.algorithm.util.ArrayUtil;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.util.Arrays;

/**
 * 排序算法单元测试 如果需要打印每趟排序的结果，可以修改 logback.xml 中
 * <logger name="io.github.kamalyes" level="INFO" additivity="false"> 的 level 级别，改为 DEBUG，
 * 日志就会打印 debug 信息。
 *
 * @author Kamalyes
 */
public class SortStrategyTest {

    /**
     * 随机样本一
     */
    private static Integer[] origin01;

    private static Integer[] target01;

    private static Integer[] expected01;

    /**
     * 随机样本二
     */
    private static Integer[] origin02;

    private static Integer[] target02;

    private static Integer[] expected02;

    /**
     * 随机样本三
     */
    private static Integer[] origin03;

    private static Integer[] target03;

    private static Integer[] expected03;

    /**
     * 生成随机数组样本，并调用 JDK api 生成期望的有序数组
     */
    @BeforeAll
    public static void beforeClass() {
        // 在 [0, 100] 间生成长度为 10 的存在重复的随机数组
        origin01 = ArrayUtil.randomRepeatIntegerArray(0, 10, 9);
        expected01 = Arrays.copyOf(origin01, origin01.length);
        Arrays.sort(expected01);

        // 在 [0, 100] 间生成长度为 17 的不重复的随机数组
        origin02 = ArrayUtil.randomNoRepeatIntegerArray(0, 100, 17);
        expected02 = Arrays.copyOf(origin02, origin02.length);
        Arrays.sort(expected02);

        // 在 [0, 100] 间生成长度为 100 的不重复的随机数组
        origin03 = ArrayUtil.randomNoRepeatIntegerArray(0, 100, 100);
        expected03 = Arrays.copyOf(origin03, origin03.length);
        Arrays.sort(expected03);
    }

    /**
     * 每次执行 @Test 前都使用生成的随机样本初始化实际用于排序的数组
     */
    @BeforeEach
    public void before() {
        target01 = Arrays.copyOf(origin01, origin01.length);
        target02 = Arrays.copyOf(origin02, origin02.length);
        target03 = Arrays.copyOf(origin03, origin03.length);
    }

    @Test
    public void testBubbleSort() {
        SortStrategy strategy = new SortStrategy(new BubbleSort());
        executeSort(strategy);
    }

    /**
     * 注入 SortStrategy，执行对三个样本的排序测试
     */
    private void executeSort(SortStrategy strategy) {
        strategy.sort(target01);
        Assertions.assertArrayEquals(expected01, target01);
        strategy.sort(target02);
        Assertions.assertArrayEquals(expected02, target02);
        strategy.sort(target03);
        Assertions.assertArrayEquals(expected03, target03);
    }

    @Test
    public void testBubbleSort2() {
        SortStrategy strategy = new SortStrategy(new BubbleSort2());
        executeSort(strategy);
    }

    @Test
    public void testQuickSort() {
        SortStrategy strategy = new SortStrategy(new QuickSort());
        executeSort(strategy);
    }

    @Test
    public void testInsertSort() {
        SortStrategy strategy = new SortStrategy(new InsertSort());
        executeSort(strategy);
    }

    @Test
    public void testShellSort() {
        SortStrategy strategy = new SortStrategy(new ShellSort());
        executeSort(strategy);
    }

    @Test
    public void testSelectionSort() {
        SortStrategy strategy = new SortStrategy(new SelectionSort());
        executeSort(strategy);
    }

    @Test
    public void testHeapSort() {
        SortStrategy strategy = new SortStrategy(new HeapSort());
        executeSort(strategy);
    }

    @Test
    public void testMergeSort() {
        SortStrategy strategy = new SortStrategy(new MergeSort());
        executeSort(strategy);
    }

}
