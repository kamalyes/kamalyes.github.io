package example.spring.core.property;

import example.spring.core.property.config.CustomConfig;
import example.spring.core.property.config.KamalyesProperties;
import example.spring.core.property.config.ValidatedProperties;
import example.spring.core.property.config.ValidatedPropertiesValidator;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.validation.Validator;

import java.text.SimpleDateFormat;

@Slf4j
@RequiredArgsConstructor
@SpringBootApplication
public class PropertyApplication implements CommandLineRunner {

    private final KamalyesProperties kamalyesProperties;

    private final ValidatedProperties validatedProperties;

    private final CustomConfig.Topics topics;

    /**
     * 注册 Validator Bean 的方法必须为 static 方法，且必须名为 configurationPropertiesValidator
     *
     * @return Validator
     */
    @Bean
    public static Validator configurationPropertiesValidator() {
        return new ValidatedPropertiesValidator();
    }

    public static void main(String[] args) {
        new SpringApplicationBuilder(PropertyApplication.class).run(args);
    }

    @Override
    public void run(String... args) {
        log.info("validator.host: {}", validatedProperties.getHost());
        log.info("validator.port: {}", validatedProperties.getPort());
        log.info("profile: {}", kamalyesProperties.getProfile());
        log.info("ID: {}", kamalyesProperties.getId());
        log.info("作者姓名: {}", kamalyesProperties.getAuthor());
        log.info("性别: {}", kamalyesProperties.getSex().getValue());
        log.info("日期: {}", new SimpleDateFormat("yyyy-MM-dd HH:mm:ss").format(kamalyesProperties.getDate()));
        log.info("邮件: {}", kamalyesProperties.getMail());
        log.info("手机号: {}", kamalyesProperties.getMobile());
        log.info("Host: {}", kamalyesProperties.getHost());
        log.info("=========== 兴趣 ===========");
        kamalyesProperties.getInterestList().forEach(log::info);
        log.info("=========== 信息 ===========");
        kamalyesProperties.getInfoMap().forEach((key, value) -> log.info("{} : {}", key, value));
        log.info("=========== 技能 ===========");
        kamalyesProperties.getSkillMap().forEach((key, value) -> {
            log.info("{} 技术项：", key);
            value.forEach(log::info);
        });

        log.info("custom.topic1: {}", topics.getTopic1());
        log.info("custom.topic2: {}", topics.getTopic2());
    }

}
