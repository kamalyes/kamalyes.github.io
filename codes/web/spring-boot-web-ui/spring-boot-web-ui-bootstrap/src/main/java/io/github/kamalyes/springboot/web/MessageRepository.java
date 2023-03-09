package io.github.kamalyes.springboot.web;

public interface MessageRepository {

    void deleteMessage(Long id);

    Iterable<Message> findAll();

    Message findMessage(Long id);

    Message save(Message message);

}
