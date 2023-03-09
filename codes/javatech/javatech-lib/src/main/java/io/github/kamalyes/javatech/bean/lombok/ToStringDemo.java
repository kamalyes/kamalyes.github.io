package io.github.kamalyes.javatech.bean.lombok;

import lombok.ToString;

/**
 * @author <a href="mailto:forbreak@163.com">Kamalyes</a>
 * @since 2019-11-22
 */
@ToString(callSuper = true, exclude = "someExcludedField")
public class ToStringDemo {

    private boolean someBoolean = true;

    private String someStringField;

    private float someExcludedField;

    public ToStringDemo(boolean someBoolean, String someStringField, float someExcludedField) {
        this.someBoolean = someBoolean;
        this.someStringField = someStringField;
        this.someExcludedField = someExcludedField;
    }

}
