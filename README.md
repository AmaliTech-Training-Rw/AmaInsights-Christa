# AmaInsights-Christa
## Page Tracker Service
The Page Tracker Service is a backend application built using Node.js and Express that enables tracking 
user interactions on a website. It integrates with Google Tag Manager and captures user activities such
as page visits and button clicks. This service records user actions, device information, and page details 
for analysis using Google Analytics.

## Table of Contents
Features
Getting Started
Prerequisites
Installation
Usage
Endpoints
### Features
Provides a landing page with buttons that record user actions when clicked.
Captures user interactions, device details, and page information.
Integrates with Google Tag Manager for enhanced analytics tracking.
Supports viewing recorded user actions for analysis.
### Getting Started
#### Prerequisites
Node.js (v14 or later)
npm (Node Package Manager)
### Installation
1.Clone the repository:
```bash
git clone https://github.com/your-username/page-tracker-service.git
```
2. Navigate to the project directory:
```bash
cd page-tracker-service
```
3. Install dependencies:
```bash
npm install
```
#### Usage
To run the Page Tracker Service, execute the following command:
```bash
node app.js
```
By default, the service will be available at http://localhost:3000.

### Endpoints
1. Displays a landing page with buttons to track user actions:
```bash
Landing Page: GET /
```
2. Records user actions, capturing details such as action type, timestamp, user agent, and page information:

```bash
Record User Action: POST /recordAction
```
4. Returns a JSON array containing recorded user actions for analysis:
```bash
View Recorded Actions: GET /viewActions
```
