#!/usr/bin/env sh

# остановить публикацию при ошибках
set -e

# сборка
npm run build

# переход в каталог сборки
cd dist

# если вы публикуете на пользовательский домен
echo 'betonblock.ipx.lv' > CNAME

git init
git add -A
git commit -m 'deploy'

npm run deploy
# если вы публикуете по адресу https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# если вы публикуете по адресу https://<USERNAME>.github.io/<REPO>
#git push -f git@github.com:ivarsplsk/bbsale.git master:gh-pages

cd -