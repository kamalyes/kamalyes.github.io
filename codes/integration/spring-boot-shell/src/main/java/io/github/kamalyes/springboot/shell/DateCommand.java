package io.github.kamalyes.springboot.shell;

import io.github.kamalyes.tool.io.AnsiColorUtil;
import org.springframework.shell.standard.ShellComponent;
import org.springframework.shell.standard.ShellMethod;

import java.util.Date;

/**
 * @author <a href="mailto:forbreak@163.com">Kamalyes</a>
 * @since 2020-03-13
 */
@ShellComponent
public class DateCommand {

    @ShellMethod("当前时间")
    public void date() {
        AnsiColorUtil.BLUE.println(new Date().toString());
    }

}
