package io.github.kamalyes.javatech.bean.lombok;

import lombok.Data;
import lombok.ToString;

import java.util.List;

/**
 * <code>@Data</code> 示例
 *
 * @author <a href="mailto:forbreak@163.com">Kamalyes</a>
 * @see <a href="http://jnb.ociweb.com/jnb/jnbJan2010.html#data">@Data</a>
 * @since 2019-11-22
 */
@Data(staticConstructor = "of")
@ToString
public class DataDemo {

    private final Person founder;

    protected List<Person> employees;

    private String name;

}
