drop schema if exists autocatalogs;
create schema autocatalogs;
grant all privileges on *.* to 'autocatalogs'@'localhost' identified by 'autocatalogs';
grant all privileges on autocatalogs.* to 'autocatalogs'@'localhost' identified by 'autocatalogs';
grant all privileges on autocatalogs.* to 'autocatalogs'@'%' identified by 'autocatalogs';
