# React + Vite

## Contact form API

The contact forms submit to the Django API at `/api/contact/`.

For local development, start the contact API by running `start-contact-api.bat` from the project root. It applies database migrations and serves Django at `127.0.0.1:8000`. Install backend dependencies first with `py -m pip install -r tesla-backend\requirements.txt` if needed.

Run the frontend with `npm run dev` in a separate terminal.

Vite proxies `/api` requests to the local Django server. Production builds require `VITE_API_BASE_URL` to be set to the HTTPS Django backend origin (for example, `https://api.example.com`) before building. The frontend will not silently send production requests to its own origin or to localhost. Configure backend `FRONTEND_URL` or `FRONTEND_URLS` with the deployed frontend origin and `ALLOWED_HOSTS` with the backend hostname. Set `DEBUG=False` and provide `DJANGO_SECRET_KEY` in the backend environment.

The enquiry model uses Django's configured SQLite database. On a hosting platform with ephemeral filesystems, set `SQLITE_DATABASE_PATH` to a persistent mounted-disk path and run `py manage.py migrate --noinput` as a deployment step before serving requests.

To add or update the supplied Tesla business profile in the existing MongoDB `contact-details` collection, run `py manage.py seed_contact_details` from `tesla-backend`. The command uses `MONGODB_URI` and `MONGODB_NAME` from the backend environment and is safe to rerun.

Successful submissions are stored by Django before the form is cleared. Staff can review, search, and update enquiry statuses in Django Admin at `/admin/`; the staff-only API list is available at `/api/contact/list/`. The backend tests can be run from `tesla-backend` with `py manage.py test contact_api`.

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and Oxlint's TypeScript related rules in your project.
