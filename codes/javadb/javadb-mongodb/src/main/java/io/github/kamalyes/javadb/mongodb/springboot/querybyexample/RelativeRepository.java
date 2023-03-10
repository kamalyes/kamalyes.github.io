/*
 * Copyright 2016-2018 the original author or authors.
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
package io.github.kamalyes.javadb.mongodb.springboot.querybyexample;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.QueryByExampleExecutor;

/**
 * Simple repository interface for {@link Relative} instances. The interface implements {@link QueryByExampleExecutor}
 * and allows execution of methods accepting {@link org.springframework.data.domain.Example}.
 * @author Mark Paluch
 */
public interface RelativeRepository extends CrudRepository<Relative, Long>, QueryByExampleExecutor<Relative> {}
