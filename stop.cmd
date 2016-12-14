cd "%~dp0"
call env.cmd

set PM2_HOME=%CD%\.pm2

call pm2 stop all
call pm2 kill