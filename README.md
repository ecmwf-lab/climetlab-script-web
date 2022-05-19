# CliMetLab Web

A web application, to manage the cache content and configuration settings of the [CliMetLab](https://github.com/ecmwf/climetlab) Python package.

## Installation

Installation in a virtual environment is advised.

### Clone repository

```
git clone https://github.com/ecmwf-lab/climetlab-script-web
```

### Install Python packages

This installs the CliMetLab package and packages required for the backend.

```
cd climetlab-script-web
pip install -e .
```

### Install Python dev requirements

```
pip install -r requirements.txt
```

### Install Frontend

Check out Github actions file.

```
cd frontend
npm install
npm test
npm run build
mv build ../climetlab_script_web/build
```

## Run server

Run the following command from project's root and navigate to `http://127.0.0.1:8080` in your browser.

```
climetlab_web
```

## Development

#### Make changes and add features

#### Run frontend server

The frontend server is running at `http://127.0.0.1:3000`.

```
cd frontend/
npm start
```

#### Run backend server

The backend server is running at `http://127.0.0.1:5000`.

```
cd climetlab_script_web/
flask run
```

#### Code changes

- Open your browser and navigate to `localhost:3000`
- Any changes you make in the frontend will automatically reflect here.
- For changes you make in the backend will require a restart of flask server.

### Prepare for deployment

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
