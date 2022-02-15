module.exports = {
    "type": "postgres",
    "url": process.env.DATABASE_URL,
    "entities": [
      process.env.ENTITIES
    ],
    "migrations": [
      process.env.MIGRATIONS
    ],
    "cli": {
      "migrationsDir": "./src/Infra/Data/Migrations"
    },
    "autoSchemaSync": true,
    "extra": {
      "ssl": {
        "rejectUnauthorized": false,
      }
    }
}