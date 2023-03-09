package io.github.kamalyes.javatech.bean.lombok;

import lombok.Data;
import lombok.EqualsAndHashCode;
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
@ToString(exclude = "age")
@EqualsAndHashCode(exclude = { "age", "sex" })
public class Person {

    protected String name;

    protected Integer age;

    protected String sex;

}
