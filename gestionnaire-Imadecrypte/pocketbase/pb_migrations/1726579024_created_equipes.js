/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "ovvmlzcheut69w9",
    "created": "2024-09-17 13:17:04.711Z",
    "updated": "2024-09-17 13:17:04.711Z",
    "name": "equipes",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "fflthub6",
        "name": "nom",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "pkt1946s",
        "name": "description",
        "type": "editor",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "convertUrls": false
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("ovvmlzcheut69w9");

  return dao.deleteCollection(collection);
})
