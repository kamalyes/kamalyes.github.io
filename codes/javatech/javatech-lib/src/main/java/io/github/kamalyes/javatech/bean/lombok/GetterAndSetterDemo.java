package io.github.kamalyes.javatech.bean.lombok;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.Setter;

/**
 * <code>@Getter</code> 和 <code>@Setter</code> 示例
 *
 * @author <a href="mailto:forbreak@163.com">Kamalyes</a>
 * @see <a href="http://jnb.ociweb.com/jnb/jnbJan2010.html#gettersetter">@Getter and @Setter</a>
 * @since 2019-11-22
 */
public class GetterAndSetterDemo {

    @Getter
    @Setter
    private boolean employed = true;

    @Setter(AccessLevel.PROTECTED)
    private String name;

}
