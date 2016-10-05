xcopy /Y "bower.json" "..\Website"
xcopy /Y ".gitignore" "..\"

cd "..\"


timeout 3 >nul

git init

git add Website\bin
git commit -m "CMS Binaries"

git add Website\App_Code
git commit -m "App Code"

git add Website
git commit -m "CMS"

git add HTML
git commit -m "KIT"

git add .
git commit -m "Utils"

timeout 3 >nul
cd "Website"
bower install
timeout 3 >nul

test&cls
type HTML\sign.txt

