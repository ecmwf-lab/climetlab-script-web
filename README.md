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

## During Development

### Run frontend server

The frontend server is running at `localhost:3000`.

```
cd frontend/
npm start
```

### Run backend server

The backend server is running at `localhost:5000`

```
cd climetlab_script_web/
flask run
```

### Code changes

- Open your browser and navigate to `localhost:3000`
- Any changes you make in the frontend will automatically reflect here.
- For changes you make in the backend will require a restart of flask server.

## During Deployment

Create a frontend build output and move the file to backend's root. This can be done running the following commands -

```
cd frontend
npm run build
mv build ../climetlab_script_web/build
```

Or you can also simply type `make build`. (_See `Makefile` for more automation commands._)

Now, navigate to `climetlab_script_web` and enter `flask run`.

# Licence

See LICENSE file.
