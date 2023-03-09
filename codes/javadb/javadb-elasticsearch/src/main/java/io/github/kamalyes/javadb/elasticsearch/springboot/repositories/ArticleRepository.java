package io.github.kamalyes.javadb.elasticsearch.springboot.repositories;

import io.github.kamalyes.javadb.elasticsearch.springboot.entities.Article;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

public interface ArticleRepository extends ElasticsearchRepository<Article, String> {}
