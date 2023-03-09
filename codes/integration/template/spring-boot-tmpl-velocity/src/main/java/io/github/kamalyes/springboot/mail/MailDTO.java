package io.github.kamalyes.springboot.mail;

import lombok.Data;

import java.util.Date;

/**
 * @author Kamalyes
 * @since 2019-01-09
 */
@Data
public class MailDTO {

    private String from;

    private String replyTo;

    private String[] to;

    private String[] cc;

    private String[] bcc;

    private Date sentDate;

    private String subject;

    private String text;

    private String[] filenames;

}
