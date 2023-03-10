/*
 * Copyright 2014-2018 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package io.github.kamalyes.javadb.mongodb.springboot.textsearch;

import org.springframework.data.mongodb.core.query.TextCriteria;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

/**
 * @author Christoph Strobl
 */
public interface BlogPostRepository extends CrudRepository<BlogPost, String> {

    List<BlogPost> findAllBy(TextCriteria criteria);

    List<BlogPost> findAllByOrderByScoreDesc(TextCriteria criteria);

}
