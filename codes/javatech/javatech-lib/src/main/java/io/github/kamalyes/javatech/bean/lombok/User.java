package io.github.kamalyes.javatech.bean.lombok;

import lombok.Data;
import lombok.ToString;

/**
 * <code>@Data</code> 、<code>@ToString</code>、<code>@EqualsAndHashCode</code> 示例
 *
 * @author <a href="mailto:forbreak@163.com">Kamalyes</a>
 * @see <a href="http://jnb.ociweb.com/jnb/jnbJan2010.html#data"><code>@Data</code>
 * 、<code>@ToString</code>、<code>@EqualsAndHashCode</code></a>
 * @since 2019-11-22
 */
@Data
@ToString
public class User {

    private String name;

    private Integer age;

    private String sex;

}
