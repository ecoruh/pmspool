cd "%~dp0"

mkdir .pm2\logs
set PM2_HOME=%CD%\.pm2

call pm2 start spool.json

