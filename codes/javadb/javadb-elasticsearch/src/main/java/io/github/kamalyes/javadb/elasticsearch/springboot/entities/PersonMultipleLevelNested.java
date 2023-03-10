package io.github.kamalyes.javadb.elasticsearch.springboot.entities;

import lombok.Data;
import lombok.ToString;
import org.springframework.data.annotation.Id;
import org.springframework.data.elasticsearch.annotations.Document;
import org.springframework.data.elasticsearch.annotations.Field;
import org.springframework.data.elasticsearch.annotations.FieldType;

import java.util.List;

@Data
@ToString
@Document(indexName = "person-nested")
public class PersonMultipleLevelNested {

    @Id
    private String id;

    private String name;

    @Field(type = FieldType.Nested)
    private List<GirlFriend> girlFriends;

    @Field(type = FieldType.Nested)
    private List<Car> cars;

}
