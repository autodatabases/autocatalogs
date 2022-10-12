DROP DATABASE IF EXISTS autocatalogs;
create database autocatalogs;
CREATE USER autocatalogs WITH PASSWORD 'autocatalogs';
GRANT ALL PRIVILEGES ON DATABASE autocatalogs to autocatalogs;
ALTER USER autocatalogs CREATEDB;
