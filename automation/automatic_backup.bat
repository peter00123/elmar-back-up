echo " enabling back up"

xcopy "E:\Elmar builders" "E:\automations\elmar backup" /E /I /H /Y 


cd E:\automations\elmar backup

echo " adding file"

git add .

git commit -m" automatic back up "

echo " git pushing"

git push origin main
