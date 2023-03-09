package io.github.kamalyes.javadb.elasticsearch.springboot.elasticsearch;


import io.github.kamalyes.javadb.elasticsearch.springboot.constant.QueryJudgeType;

import java.lang.annotation.*;

/**
 * @author <a href="mailto:forbreak@163.com">Kamalyes</a>
 * @since 2019-12-17
 */
@Documented
@Inherited
@Retention(RetentionPolicy.RUNTIME)
@Target(ElementType.FIELD)
public @interface QueryField {

    String value() default "";

    QueryJudgeType judgeType() default QueryJudgeType.Equals;

}
