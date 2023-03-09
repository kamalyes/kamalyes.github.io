package io.github.kamalyes.springboot.web.client;

public class SimpleGreetingService implements GreetingService {

    @Override
    public String getGreeting() {
        return "Hello world!";
    }

}
