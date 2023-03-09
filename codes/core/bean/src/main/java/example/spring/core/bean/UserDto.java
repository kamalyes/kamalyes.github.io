package example.spring.core.bean;

import lombok.Data;
import lombok.ToString;

/**
 * @author Kamalyes
 * @since 2018-11-02
 */
@Data
@ToString
public class UserDto {

    private long id;

    private String name;

    private InfoDto infoDTO;

}
