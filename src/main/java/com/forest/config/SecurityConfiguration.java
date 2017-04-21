package com.forest.config;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.password.StandardPasswordEncoder;

@Configuration
@EnableWebSecurity
public class SecurityConfiguration extends WebSecurityConfigurerAdapter {

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http
                .httpBasic()
                .and()
                .authorizeRequests()
                .antMatchers( "/", "/css/*", "/js/**", "/img/**", "/pages/*", "/favicon.ico", "/login", "/registration", "/statistics").permitAll()
                .anyRequest().authenticated();
        http.csrf().disable();

    }

    @Bean
    public StandardPasswordEncoder standardPasswordEncoder() {
        return new StandardPasswordEncoder();
    }

}