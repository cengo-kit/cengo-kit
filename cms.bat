echo "All" | xcopy "bower.json" "..\Website" && xcopy ".gitignore" "..\" && cd "..\" && git init && cd "Website" && bower install
