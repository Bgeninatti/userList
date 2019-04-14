#!/bin/sh

ASSETS_FOLDER="../django_app/assets/"
INDEX_FOLDER="../django_app/templates"
CSS_FOLDER="$ASSETS_FOLDER/css"
JS_FOLDER="$ASSETS_FOLDER/js"

npm run build

rm -rf $CSS_FOLDER
rm -rf $JS_FOLDER
rm -rf $ASSETS_FOLDER
mkdir $ASSETS_FOLDER
cp build/index.html $INDEX_FOLDER
cp -r build/static/js/ $ASSETS_FOLDER
cp -r build/static/css/ $ASSETS_FOLDER
cp build/manifest.json $ASSETS_FOLDER

sed -i '1s/^/{% load static %}/' "$INDEX_FOLDER/index.html"
sed -i 's/<[^>]*link href=\"\/static\/\(css\/[\.0-9a-z\.]\+\.chunk.css\)\"/<link href=\"{% static \x27\1\x27 %}\"/gi' "$INDEX_FOLDER/index.html"
sed -i 's/<[^>]*script src=\"\/static\/\(js\/[\.0-9a-z]\+\.chunk.js\)\">/<script src=\"{% static \x27\1\x27 %}\">/gi' "$INDEX_FOLDER/index.html"
