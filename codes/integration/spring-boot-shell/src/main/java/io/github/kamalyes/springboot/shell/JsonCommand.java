package io.github.kamalyes.springboot.shell;

import cn.hutool.json.JSONUtil;
import io.github.kamalyes.tool.io.AnsiColorUtil;
import org.springframework.shell.standard.ShellComponent;
import org.springframework.shell.standard.ShellMethod;

import java.util.Map;

/**
 * @author <a href="mailto:forbreak@163.com">Kamalyes</a>
 * @since 2020-03-13
 */
@ShellComponent
public class JsonCommand {

    @ShellMethod("JSON 序列化")
    public void tojson(Map<String, Object> map) {
        AnsiColorUtil.BLUE.println(JSONUtil.toJsonStr(map));
    }

}
