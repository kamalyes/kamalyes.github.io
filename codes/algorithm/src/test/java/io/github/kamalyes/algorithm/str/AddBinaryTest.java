package io.github.kamalyes.algorithm.str;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;

/**
 * @author Kamalyes
 * @since 2018-11-05
 */
public class AddBinaryTest {

    @Test
    public void test() {
        Assertions.assertEquals("100", AddBinary.addBinary("11", "1"));
        Assertions.assertEquals("10101", AddBinary.addBinary("1010", "1011"));
    }

}
