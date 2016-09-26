echo "All" | xcopy "bower.json" "..\Website" && xcopy ".gitignore" "..\" && cd "..\" && git init && git add . && git commit -m "FIRST" && cd "Website" && bower install
