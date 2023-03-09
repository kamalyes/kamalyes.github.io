package io.github.kamalyes.javatech.rocketmq.scheduled;

import io.github.kamalyes.javatech.rocketmq.RocketConstant;
import org.apache.rocketmq.client.producer.DefaultMQProducer;
import org.apache.rocketmq.common.message.Message;

/**
 * 发送定时消息
 *
 * @author Kamalyes
 */
public class ScheduledMessageProducer {

	public static void main(String[] args) throws Exception {
		// Instantiate a producer to send scheduled messages
		DefaultMQProducer producer = new DefaultMQProducer("ExampleProducerGroup");
        // Specify name server addresses.
        producer.setNamesrvAddr(RocketConstant.HOST);
		// Launch producer
		producer.start();
		int totalMessagesToSend = 100;
		for (int i = 0; i < totalMessagesToSend; i++) {
			Message message = new Message("TestTopic", ("Hello scheduled message " + i).getBytes());
			// This message will be delivered to consumer 10 seconds later.
			message.setDelayTimeLevel(3);
			// Send the message
			producer.send(message);
		}

		// Shutdown producer after use.
		producer.shutdown();
	}

}
