package io.github.kamalyes.springboot.security.config;

import lombok.Data;
import lombok.ToString;
import org.springframework.boot.context.properties.ConfigurationProperties;

/**
 * @author <a href="mailto:forbreak@163.com">Kamalyes</a>
 * @since 2019-11-18
 */
@Data
@ToString
@ConfigurationProperties(prefix = "kamalyes.security")
public class KamalyesSecurityProperties {

    private String registerUrl = "/register";

    private String loginPage = "/login/unauthorized";

    private String loginProcessingUrl = "/login";

    private String logoutUrl = "/logout";

    /**
     * 无需鉴权即可访问的 url 列表
     */
    private String[] permitUrls;

}
