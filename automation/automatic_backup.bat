echo " enabling back up"

xcopy "E:\Elmar builders" "E:\automations\elmar backup" /E /I /H /Y 
pause

cd E:\automations\elmar backup
pause
echo " adding file"

git add .
pause
git commit -m" automatic back up "
pause
echo " git pushing"
pause
git push origin main
pause