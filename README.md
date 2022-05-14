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
cd frontend
npm install
npm test
npm run build
mv build ../climetlab_script_web/build
```

## Run server
```
cd ..
flask run  # need to update setuptool entrypoint: climetlab web
```

<!-- Now browse to http://127.0.0.1:51979 (front-end) and http://127.0.0.1:51979/api/cache (API). -->
Now browse to http://127.0.0.1:5000 (front-end) and http://127.0.0.1:5000/api (API).

# Licence
See LICENSE file.
