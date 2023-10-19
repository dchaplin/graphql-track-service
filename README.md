# GraphQL API for a Track Search Service

### Description

This is a basic GraphQL API service which allows you to manage and search music track data. You can get/update/delete based on trackId (internal id). You can get all tracks. Finally you can get tracks based on the combination of track name and artist name. If the track isn't in the db, the metadata is sourced from the ArcCloud Metadata API (https://docs.acrcloud.com/reference/metadata-api) and stored in the db.

### Steps to run this project:

1. Run `yarn install` command
2. Run `yarn start` command
3. Navigate to http://localhost:4000/ to get to the apollo sandbox
4. (Optional) use the seed gql query to seed the db with a track.

