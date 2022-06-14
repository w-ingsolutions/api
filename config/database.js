module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'eu-central-1.22f36672-2673-4092-8ef8-a4484274a9e4.aws.ybdb.io'),
      port: env.int('DATABASE_PORT', 5433),
      database: env('DATABASE_NAME', 'yugabyte'),
      user: env('DATABASE_USERNAME', 'strapiuser'),
      password: env('DATABASE_PASSWORD', '2vc2BLL4ZiFwRy2'),
      schema: env('DATABASE_SCHEMA', 'public'), // Not required
      ssl: {
        rejectUnauthorized: env.bool('DATABASE_SSL_SELF', false), // For self-signed certificates
      },
    },
    debug: false,
  },
});
