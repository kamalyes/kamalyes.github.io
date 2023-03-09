package io.github.kamalyes.springboot;

import lombok.Data;
import lombok.ToString;
import lombok.experimental.Accessors;

import java.util.Date;

/**
 * @author <a href="mailto:forbreak@163.com">Kamalyes</a>
 * @since 2019-11-20
 */
@Data
@ToString
@Accessors(chain = true)
public class KafkaTestBean<T> {

    Date timestamp;

    T data;

}
