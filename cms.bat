echo "All" | xcopy "bower.json" "..\Website" && xcopy ".gitignore" "..\" && del /F /S /Q /A .git && cd "..\" && git init && git add . && git commit -m "FIRST" && cd "Website" && bower install
