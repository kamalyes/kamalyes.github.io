package io.github.kamalyes.javatech.reflections;

import org.junit.jupiter.api.Test;
import org.reflections.util.FilterBuilder;

import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertTrue;

public class FilterBuilderTest {

    @Test
    public void includeExcludePackage() {
        FilterBuilder filter = new FilterBuilder()
            .includePackage("io.github.kamalyes.javatech.reflections")
            .excludePackage("io.github.kamalyes.javatech.reflections.exclude")
            .includePackage("io.foo");

        doAssert(filter);
    }

    @Test
    public void parsePackages() {
        FilterBuilder filter = FilterBuilder
            .parsePackages("+io.github.kamalyes.javatech.reflections ,  -io.github.kamalyes.javatech.reflections.exclude,+io.foo"); // not trimmed

        doAssert(filter);
    }

    @Test
    public void includeExcludePattern() {
        FilterBuilder filter = new FilterBuilder()
            .includePattern("io\\.github\\.kamalyes\\.javatech\\.reflections\\..*")
            .excludePattern("io\\.github\\.kamalyes\\.javatech\\.reflections\\.exclude\\..*")
            .includePattern("io\\.foo\\..*");

        doAssert(filter);
    }

    private void doAssert(FilterBuilder filter) {
        assertFalse(filter.test(""));
        assertFalse(filter.test("io"));
        assertFalse(filter.test("io."));
        assertFalse(filter.test("io.github.kamalyes.javatech.reflections"));
        assertTrue(filter.test("io.github.kamalyes.javatech.reflections."));
        assertTrue(filter.test("io.github.kamalyes.javatech.reflections.Reflections"));
        assertTrue(filter.test("io.github.kamalyes.javatech.reflections.foo.Reflections"));
        assertFalse(filter.test("io.github.kamalyes.javatech.reflections.exclude.it"));
        assertFalse(filter.test("io.foo"));
        assertTrue(filter.test("io.foo."));
        assertTrue(filter.test("io.foo.bar"));
        assertFalse(filter.test("io.bar.Reflections"));
    }

}
