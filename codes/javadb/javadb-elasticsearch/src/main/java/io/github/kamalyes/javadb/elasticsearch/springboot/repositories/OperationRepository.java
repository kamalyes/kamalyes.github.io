package io.github.kamalyes.javadb.elasticsearch.springboot.repositories;

import io.github.kamalyes.javadb.elasticsearch.springboot.entities.Operation;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

public interface OperationRepository extends ElasticsearchRepository<Operation, Long> {
}
