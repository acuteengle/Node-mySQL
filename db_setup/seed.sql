USE pokemonDB;

INSERT INTO pokemon_type
    (name)
VALUES
    ("Electric");
INSERT INTO pokemon_type
    (name)
VALUES
    ("Fire");
INSERT INTO pokemon_type
    (name)
VALUES
    ("Normal");

INSERT INTO pokemon
    (name, type_id)
VALUES
    ("Pikachu", 1);

INSERT INTO pokemon
    (name, type_id)
VALUES
    ("Charmander", 2);

INSERT INTO pokemon
    (name, type_id)
VALUES
    ("Eevee", 3);