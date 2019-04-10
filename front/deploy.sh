npm run build

rm -rf ../django_app/assets/css/
rm -rf ../django_app/assets/js/
cp -r build/static/js/ ../django_app/assets/
cp -r build/static/css/ ../django_app/assets/

