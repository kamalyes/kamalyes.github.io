package io.github.kamalyes.springboot.security.filter;

import io.github.kamalyes.springboot.security.config.KamalyesSecurityProperties;
import org.apache.commons.lang3.StringUtils;
import org.springframework.security.web.authentication.AuthenticationFailureHandler;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;
import java.time.LocalDateTime;
import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

/**
 * @author <a href="mailto:forbreak@163.com">Kamalyes</a>
 * @since 2019-10-8
 */
@Component
public class ValidateCodeFilter extends OncePerRequestFilter {

    private final KamalyesSecurityProperties kamalyesSecurityProperties;

    private final AuthenticationFailureHandler authenticationFailureHandler;

    public ValidateCodeFilter(KamalyesSecurityProperties kamalyesSecurityProperties,
        AuthenticationFailureHandler authenticationFailureHandler) {
        this.kamalyesSecurityProperties = kamalyesSecurityProperties;
        this.authenticationFailureHandler = authenticationFailureHandler;
    }

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
        throws ServletException, IOException {
        if (StringUtils.equalsIgnoreCase(kamalyesSecurityProperties.getLoginProcessingUrl(), request.getRequestURI())
            && StringUtils.equalsIgnoreCase(request.getMethod(), "post")) {

            try {
                check(request);
            } catch (KamalyesSecurityException e) {
                authenticationFailureHandler.onAuthenticationFailure(request, response, e);
            }
        }

        filterChain.doFilter(request, response);
    }

    private void check(HttpServletRequest httpServletRequest) throws KamalyesSecurityException {

        HttpSession session = httpServletRequest.getSession();
        String code = (String) session.getAttribute("code");
        LocalDateTime expireTime = (LocalDateTime) session.getAttribute("expireTime");
        String checkCode = httpServletRequest.getParameter("checkCode");

        if (StringUtils.isBlank(checkCode)) {

            throw new KamalyesSecurityException("????????????????????????");
        }

        if (StringUtils.isBlank(code)) {
            throw new KamalyesSecurityException("?????????????????????");
        }

        if (expireTime == null || expireTime.isBefore(LocalDateTime.now())) {
            throw new KamalyesSecurityException("?????????????????????");
        }

        if (!code.equalsIgnoreCase(checkCode)) {
            throw new KamalyesSecurityException("?????????????????????");
        }
    }

}
