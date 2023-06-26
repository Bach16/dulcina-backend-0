--CREATE DATABASE IF NOT  EXISTS dulcinadb
SELECT "CREATE DATABASE dulcinadb"
WHERE NOT EXISTS (SELECT FROM pg_database WHERE datname = "dulcinadb")\gexec
