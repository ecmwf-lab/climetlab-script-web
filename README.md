This is a draft.


## Get source code
```
pip install climetlab
git clone https://github.com/ecmwf-lab/climetlab-script-web
```

## Install python plugin
```
cd climetlab-script-web
pip install -e .
```

## Build the javascript (See the github actions)
```
cd reactjs
npm install
npm test
npm run build
mv build/static/* build/.
rmdir build/static
rm -rf ../climetlab_script_web/static
mv build ../climetlab_script_web/static
```

## Run server
```
cd ..
climetlab web
```

Now browse to http://127.0.0.1:51979 (front-end) and http://127.0.0.1:51979/api/cache (API).

# Licence
See LICENSE file.
