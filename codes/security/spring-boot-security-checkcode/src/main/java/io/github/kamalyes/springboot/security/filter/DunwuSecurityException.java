package io.github.kamalyes.springboot.security.filter;

import org.springframework.security.core.AuthenticationException;

public class KamalyesSecurityException extends AuthenticationException {

    private static final long serialVersionUID = 5022575393500654458L;

    public KamalyesSecurityException(String message) {
        super(message);
    }

}
