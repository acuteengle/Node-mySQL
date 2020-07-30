USE pokemonDB;

CREATE TABLE pokemon
(
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(45) NOT NULL,
    type_id INT NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE pokemon_type
(
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(45) NOT NULL,
    PRIMARY KEY (id)
);
