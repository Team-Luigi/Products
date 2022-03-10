DROP DATABASE IF EXISTS sdcproducts;
CREATE DATABASE sdcproducts;
\c sdcproducts;

DROP TABLE IF EXISTS products, features, styles, photos, skus;

CREATE TABLE products (
 id BIGSERIAL PRIMARY KEY,
 name VARCHAR NOT NULL,
 slogan VARCHAR NOT NULL,
 description VARCHAR NOT NULL,
 category VARCHAR NOT NULL,
 default_price INTEGER NOT NULL
);

CREATE TABLE features (
 id BIGSERIAL PRIMARY KEY,
 product_id INTEGER,
 feature VARCHAR NOT NULL,
 value VARCHAR NOT NULL
);

CREATE TABLE styles (
 id BIGSERIAL PRIMARY KEY,
 product_id INTEGER,
 name VARCHAR NOT NULL,
 sale_price INTEGER,
 original_price INTEGER NOT NULL,
 default_style BOOLEAN NOT NULL
);

CREATE TABLE photos (
 id BIGSERIAL PRIMARY KEY,
 style_id INTEGER,
 thumbnail_url VARCHAR,
 url VARCHAR
);

CREATE TABLE skus (
 id BIGSERIAL PRIMARY KEY,
 style_id INTEGER,
 size VARCHAR NOT NULL,
 quantity INTEGER NOT NULL
);


\COPY products FROM '../Files/product.csv' DELIMITER ',' CSV HEADER;
\COPY features FROM '../Files/features.csv' DELIMITER ',' CSV HEADER;
\COPY styles FROM '../Files/styles.csv' DELIMITER ',' CSV NULL AS 'null' HEADER;
UPDATE styles SET sale_price=0 WHERE sale_price IS NULL;
\COPY photos FROM '../Files/photos.csv' DELIMITER ',' CSV HEADER;
\COPY skus FROM '../Files/skus.csv' DELIMITER ',' CSV HEADER;

ALTER TABLE features ADD CONSTRAINT features_product_id_fkey FOREIGN KEY (product_id) REFERENCES products(id);
ALTER TABLE styles ADD CONSTRAINT styles_product_id_fkey FOREIGN KEY (product_id) REFERENCES products(id);
ALTER TABLE photos ADD CONSTRAINT photos_style_id_fkey FOREIGN KEY (style_id) REFERENCES styles(id);
ALTER TABLE skus ADD CONSTRAINT skus_style_id_fkey FOREIGN KEY (style_id) REFERENCES styles(id);

-- Creating secondary index for constant time lookup vs linear lookup
CREATE INDEX ON features (product_id);
CREATE INDEX ON styles (product_id);
CREATE INDEX ON photos (style_id);
CREATE INDEX ON skus (style_id);






