package io.github.kamalyes.springboot.web.exception;

/**
 * @author Kamalyes
 * @since 2018-12-29
 */
public class AppException extends RuntimeException {

    public AppException() {
        super();
    }

    public AppException(String message) {
        super(message);
    }

}
