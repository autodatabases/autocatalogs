if (!process.env.DATABASE_URL && process.env['apps.autocatalogs.db']) {
  const databaseUrl = new URL(process.env['apps.autocatalogs.db']);
  if (!databaseUrl.username) {
    databaseUrl.username = process.env['apps.autocatalogs.db_user'];
  }
  if (!databaseUrl.password) {
    databaseUrl.password = process.env['apps.autocatalogs.db_PASSWORD'];
  }
  process.env.DATABASE_URL = databaseUrl.toString();
}
