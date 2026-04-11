# Domain IP Enrichment

A Python/Flask-based enrichment pipeline and web app for ingesting IP/domain CSVs, enriching indicators with multiple data sources, storing results in MongoDB, and exporting filtered datasets for analysis.

## What This Project Does

- Accepts CSV uploads containing IP addresses, domains, or URLs.
- Normalizes and stores records in MongoDB.
- Enriches indicators with telemetry and metadata (for example VirusTotal responses, DNS, WHOIS, certificate, and archived-page context where applicable).
- Exposes web pages and API-style endpoints for upload, processing, filtering, and CSV export.
- Includes frontend code for UI flows and data upload workflows.

## Repository Structure

- `Flask_App/`: main backend web app and enrichment logic.
- `Flask_App/model/`: processing services (`ipService.py`, domain/IP enrichment helpers).
- `Flask_App/templates/`: server-rendered HTML pages.
- `Flask_App/resources/`: logs, uploads, and generated artifacts.
- `frontend_app/`: React frontend (TypeScript + MUI).
- `react-csv-upload/`: standalone React CSV upload prototype.
- `Domain Enrichment/` and `IP Enrichment/`: notebooks, historical data, and analysis artifacts.
- `Data Analysis/`: exploratory and reporting notebooks.

## Backend Setup (Flask)

### 1. Prerequisites

- Python 3.10+ (recommended)
- `pip`
- Access to a MongoDB instance used by the app

### 2. Install dependencies

```bash
cd Flask_App
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
```

### 3. Configure database target

Current DB/collection defaults are defined in `Flask_App/config.py`:

- `db`
- `collection`

Update these values to match your target MongoDB dataset before running jobs.

### 4. Run the backend

```bash
cd Flask_App
python3 app.py
```

Default local endpoint: `http://127.0.0.1:5000`

## Frontend Setup (`frontend_app`)

```bash
cd frontend_app
npm install
npm start
```

This starts the React development server (typically `http://localhost:3000`).

## Core Routes (Flask)

Commonly used routes from `Flask_App/app.py` include:

- `GET /login`
- `GET /home`
- `GET,POST /uploadcsv`
- `POST /uploadIP`
- `POST /uploadDomain`
- `GET /processParent`
- `GET /process_without_vtcall`
- `GET /process_only_vtcall`
- `GET /showiprecords`
- `GET /showdomainrecords`
- `GET /filter`
- `GET /exportcsv`
- `GET /export_filtered_csv`
- `GET /export_db`

## Typical Workflow

1. Log in via the Flask UI.
2. Upload CSV with either IPs or domains/URLs.
3. Trigger processing endpoint(s) to enrich queued records.
4. Review records through listing/filter routes.
5. Export processed or filtered output as CSV.

## Security and Configuration Notes

Before production deployment, review and harden:

- MongoDB connection strings should come from environment variables.
- API keys should not be hardcoded in source files.
- `app.secret_key` should be moved to a secret manager or environment variable.
- Access control and input validation should be reviewed for all upload and processing routes.

## Notes

This repository contains historical notebooks, generated artifacts, and archived data from prior runs. For day-to-day development, start with `Flask_App/` and `frontend_app/`.
