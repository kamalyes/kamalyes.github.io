package io.github.kamalyes.algorithm.str;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;

/**
 * @author Kamalyes
 * @since 2018-11-05
 */
public class LongestCommonPrefixTest {

    @Test
    public void test() {
        String[] strs1 = { "flower", "flow", "flight" };
        String[] strs2 = { "dog", "racecar", "car" };

        Assertions.assertEquals("fl", LongestCommonPrefix.longestCommonPrefix(strs1));
        Assertions.assertEquals("", LongestCommonPrefix.longestCommonPrefix(strs2));
    }

}
