// Noninstantiable utility class
package io.github.kamalyes.javacore.effective.chapter02.item04;

public class UtilityClass {

    // Suppress default constructor for noninstantiability
    private UtilityClass() {
        throw new AssertionError();
    }

}
