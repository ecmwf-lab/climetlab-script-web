# CliMetLab Web

A web application to manage the cache content and configuration settings of the [CliMetLab](https://github.com/ecmwf/climetlab) Python package.

## Installation

Installation in a virtual environment is advised.

### Clone Repository

```
git clone https://github.com/ecmwf-lab/climetlab-script-web
```

### Install Backend

This installs `CliMetLab` and related backend packages. Core packages are listed in `setup.py` while development packages are listed in `requirements.txt`.

```
cd climetlab-script-web
pip install -e .
pip install -r requirements.txt
```

### Install Frontend

Check out the Github actions file for details.

```
cd frontend
npm install
npm test
npm run build
mv build ../climetlab_script_web/build
```

## Usage

Run the following command from project's root and navigate to `http://127.0.0.1:8080` in your browser.

```
climetlab_web
```

## Development

### Run Frontend Server

The frontend server runs at `http://127.0.0.1:3000`.

```
cd frontend/
npm start
```

### Run Backend Server

The backend server runs at `http://127.0.0.1:5000`.

```
cd climetlab_script_web/
flask run
```

### Code Changes

- Open your browser and navigate to `http://127.0.0.1:3000`
- Changes in the frontend will automatically reflect here.
- Changes in the backend will require a restart of flask server.
- Use Makefile commands for improved development experience (`make help`).
- A pre-commit hook performs linting, formatting, and testing for both ReactJs and Python code.

### Prepare For Deployment

Create a frontend build output and move the file to backend's root.

```
cd frontend
npm run build
mv build ../climetlab_script_web/build
```

Or you can also simply type `make build`. (_See `Makefile` for automation._)

Finally, run `climetlab_web` from the project's root and navigate to `http://127.0.0.1:8080` in your browser.

# Licence

See LICENSE file.
