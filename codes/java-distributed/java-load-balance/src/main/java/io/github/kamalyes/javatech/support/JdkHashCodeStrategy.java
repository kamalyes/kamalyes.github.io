package io.github.kamalyes.javatech.support;

public class JdkHashCodeStrategy implements HashStrategy {

    @Override
    public int hashCode(String key) {
        return key.hashCode();
    }

}
