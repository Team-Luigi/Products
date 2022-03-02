

CREATE TABLE products (
 id BIGSERIAL,
 name VARCHAR NOT NULL,
 slogan VARCHAR NOT NULL,
 description VARCHAR NOT NULL,
 default_price INTEGER NOT NULL,
);


ALTER TABLE products ADD CONSTRAINT products_pkey PRIMARY KEY (id);

CREATE TABLE features (
 id BIGSERIAL,
 feature VARCHAR NOT NULL,
 value VARCHAR NOT NULL
);


ALTER TABLE features ADD CONSTRAINT features_pkey PRIMARY KEY (id);

CREATE TABLE styles (
 id BIGSERIAL,
 id_products INTEGER,
 name VARCHAR NOT NULL,
 original_price INTEGER NOT NULL,
 sale_price INTEGER,
 default? BOOLEAN NOT NULL
);


ALTER TABLE styles ADD CONSTRAINT styles_pkey PRIMARY KEY (id);

CREATE TABLE photos (
 id BIGSERIAL,
 id_styles INTEGER,
 thumbnail_url VARCHAR,
 url VARCHAR
);


ALTER TABLE photos ADD CONSTRAINT photos_pkey PRIMARY KEY (id);

CREATE TABLE skus (
 id BIGSERIAL,
 id_styles INTEGER,
 sku INTEGER NOT NULL,
 quantity INTEGER NOT NULL,
 size VARCHAR NOT NULL,
 UNIQUE (sku)
);


ALTER TABLE skus ADD CONSTRAINT skus_pkey PRIMARY KEY (id);

CREATE TABLE related (
 id BIGSERIAL,
 id_products INTEGER,
 related_product_id INTEGER,
 UNIQUE (related_product_id)
);

CREATE TABLE products_features (
 id BIGSERIAL,
 id_products INTEGER,
 id_features INTEGER
);



ALTER TABLE products_features ADD CONSTRAINT products_features_pkey PRIMARY KEY (id);

ALTER TABLE styles ADD CONSTRAINT styles_id_products_fkey FOREIGN KEY (id_products) REFERENCES products(id);
ALTER TABLE photos ADD CONSTRAINT photos_id_styles_fkey FOREIGN KEY (id_styles) REFERENCES styles(id);
ALTER TABLE skus ADD CONSTRAINT skus_id_styles_fkey FOREIGN KEY (id_styles) REFERENCES styles(id);
ALTER TABLE products_features ADD CONSTRAINT products_features_id_products_fkey FOREIGN KEY (id_products) REFERENCES products(id);
ALTER TABLE products_features ADD CONSTRAINT products_features_id_features_fkey FOREIGN KEY (id_features) REFERENCES features(id);