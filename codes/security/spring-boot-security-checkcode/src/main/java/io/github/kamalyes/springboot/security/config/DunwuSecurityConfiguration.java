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

        // ????????????
        http.authorizeRequests()
            // ???????????????????????????
            .antMatchers(kamalyesSecurityProperties.getPermitUrls()).permitAll()
            // ???????????????????????????
            .anyRequest().authenticated();

        http.addFilterBefore(validateCodeFilter, UsernamePasswordAuthenticationFilter.class) // ??????????????????????????????
            .formLogin() // ????????????
            .loginPage(kamalyesSecurityProperties.getLoginPage()) // ???????????? URL
            .loginProcessingUrl(kamalyesSecurityProperties.getLoginProcessingUrl()) // ?????????????????? URL
            .successHandler(authenticationSucessHandler) // ??????????????????
            .failureHandler(authenticationFailureHandler); // ??????????????????

        http.rememberMe().tokenRepository(persistentTokenRepository()) // ??????
            // ???????????????
            .tokenValiditySeconds(3600) // remember ????????????????????????
            .userDetailsService(userDetailsManager); // ????????????????????????
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
