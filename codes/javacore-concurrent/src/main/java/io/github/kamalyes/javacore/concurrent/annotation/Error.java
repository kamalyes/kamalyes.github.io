package io.github.kamalyes.javacore.concurrent.annotation;

import java.lang.annotation.*;

/**
 * 标记注解，用于标注示例为错误示例。与 {@link io.github.kamalyes.javacore.concurrent.annotation.Right} 相对应
 *
 * @author <a href="mailto:forbreak@163.com">Kamalyes</a>
 * @since 2019-12-23
 */
@Documented
@Target({ ElementType.TYPE, ElementType.FIELD, ElementType.METHOD })
@Retention(RetentionPolicy.RUNTIME)
public @interface Error {

}
