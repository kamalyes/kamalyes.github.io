package io.github.kamalyes.javadb.elasticsearch.springboot.entity.ecommerce;

import lombok.Data;

@Data
public class Geoip {
    private String continentName;
    private String cityName;
    private String countryIsoCode;
    private Location location;
    private String regionName;
}
