# Contributing Guide

## Installation

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

### Run

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
- Changes in the backend will require a restart of flask server unless you do: `export FLASK_ENV=development`.
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

Bump package version in the `climetlab_script_web/version` file.

Finally, run `climetlab_web` from the project's root and navigate to `http://127.0.0.1:8080` in your browser.

## Architecture

### Frontend

The frontend starts from `frontend/src/App.tsx`.

- `assets/`: contains images and icons used throughout the app.
- `components/`: contains global components used throughout the app.
  - `Buttons.tsx`: reusable buttons such as _submit_ or _delete_.
  - `Containers.tsx`: contains components to ensure a uniform page layout throughout the app.
  - `Dropdown.tsx`: general dropdown component modified by local components.
  - `Input.tsx`: general input components which are modified by local components. These inputs handle the setting of state and onChange events.
  - `Navbar.tsx`: navbar component used throughout the app.
  - `Table.tsx`: general table component with a few base styles.
  - `Text.tsx`: for page/section title text.
- `hooks/`: contains global hooks used throughout the app.
  - `useClickOutside`: hook to close the dropdown on mouse click outside the dropdown.
- `interfaces/`: contains interfaces for global components.
- `utils/`: contains general utility functions.
- `pages/`: contains the three main packages. Each folder contains local _components/_ and _interfaces/_. These local components can inherit parts from the global components.
  - `cache/`
  - `settings/`
  - `stats/`

#### Frontend how to

##### Add a new page

- Create a new folder `frontend/src/pages/my-new-folder/`.
- Add a new file called `MyNewFile.tsx` inside this folder and export the default component.
- Add a new `<Route path="/my-path" element={<MyNewComponent />} />` inside `App.tsx`.

##### Add a new input for filtering cache

- Either reuse an existing global input component (`/frontend/src/components/Inputs.tsx`) or create a new one there.
- Create a page-specific local input component.
- Add this new component in `pages/cache/component/HeaderForm.tsx`. You should now see your component in the UI.

### Backend

The backend is mainly used to respond to requests from the frontend. The response is mainly created by functions from the `CliMetLab` library. The backend starts from `climetlab_script_web/app.py`.
