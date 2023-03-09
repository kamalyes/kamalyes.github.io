package io.github.kamalyes.springboot.security.config;

import io.github.kamalyes.springboot.security.filter.ValidateCodeFilter;
import io.github.kamalyes.springboot.security.handler.KamalyesAuthenticationFailureHandler;
import io.github.kamalyes.springboot.security.handler.KamalyesAuthenticationSucessHandler;
import lombok.AllArgsConstructor;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.provisioning.UserDetailsManager;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.security.web.authentication.rememberme.JdbcTokenRepositoryImpl;
import org.springframework.security.web.authentication.rememberme.PersistentTokenRepository;

import javax.sql.DataSource;

@Configuration
@AllArgsConstructor
@EnableWebSecurity
@EnableConfigurationProperties({ KamalyesSecurityProperties.class })
public class KamalyesSecurityConfiguration extends WebSecurityConfigurerAdapter {

    private final DataSource dataSource;
    private final UserDetailsManager userDetailsManager;
    private final ValidateCodeFilter validateCodeFilter;
    private final KamalyesAuthenticationSucessHandler authenticationSucessHandler;
    private final KamalyesAuthenticationFailureHandler authenticationFailureHandler;
    private final KamalyesSecurityProperties kamalyesSecurityProperties;

    @Override
    protected void configure(HttpSecurity http) throws Exception {

        http.csrf().disable();

        // 授权配置
        http.authorizeRequests()
            // 无需认证的请求路径
            .antMatchers(kamalyesSecurityProperties.getPermitUrls()).permitAll()
            // 所有请求都需要认证
            .anyRequest().authenticated();

        http.addFilterBefore(validateCodeFilter, UsernamePasswordAuthenticationFilter.class) // 添加验证码校验过滤器
            .formLogin() // 表单登录
            .loginPage(kamalyesSecurityProperties.getLoginPage()) // 登录跳转 URL
            .loginProcessingUrl(kamalyesSecurityProperties.getLoginProcessingUrl()) // 处理表单登录 URL
            .successHandler(authenticationSucessHandler) // 处理登录成功
            .failureHandler(authenticationFailureHandler); // 处理登录失败

        http.rememberMe().tokenRepository(persistentTokenRepository()) // 配置
            // 持久化仓库
            .tokenValiditySeconds(3600) // remember 过期时间，单为秒
            .userDetailsService(userDetailsManager); // 处理自动登录逻辑
    }

    @Bean
    public PersistentTokenRepository persistentTokenRepository() {
        JdbcTokenRepositoryImpl jdbcTokenRepository = new JdbcTokenRepositoryImpl();
        jdbcTokenRepository.setCreateTableOnStartup(false);
        jdbcTokenRepository.setDataSource(dataSource);
        return jdbcTokenRepository;
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

}
