jobs/
│
├── controller/
│ └── job.controller.ts
│
├── service/
│ └── job.service.ts
│
├── repository/
│ └── job.repository.ts
│
├── model/
│ └── job.model.ts
│
├── validator/
│ └── job.validator.ts
│
├── routes/
│ └── job.routes.ts
│
└── dto/
└── create-job.dto.ts

Rapido Jobs Backend Architecture

This project follows a Feature-Based Clean Architecture.

Request
↓
Route
↓
Validator
↓
Controller
↓
Service
↓
Repository
↓
MongoDB

Each layer has one responsibility.

Folder Structure
jobs/
│
├── controller/
├── service/
├── repository/
├── model/
├── validator/
├── routes/
└── dto/
routes/

Purpose: Define API endpoints.

Contains:

POST /jobs
GET /jobs
GET /jobs/:id
PUT /jobs/:id
DELETE /jobs/:id

Example:

router.post(
"/",
validateRequest(createJobSchema),
controller.createJob
);

Rule:

Only route definitions.
No business logic.
validator/

Purpose: Validate request data using Zod.

Contains:

Required fields
Data types
Custom validations

Example:

title is required
salary must be number
skills must be array

Rule:

Only validation schemas.
No database queries.
controller/

Purpose: Handle Request and Response.

Contains:

req.body
req.params
req.query

res.json()
res.status()

Example:

const job =
await jobService.createJob(req.body);

return res.json(job);

Rule:

Keep controllers thin.
No database queries.
service/

Purpose: Business Logic Layer.

Contains:

Create Job
Check Duplicate
Send Notification
Update Analytics
AI Matching

Example:

checkDuplicateJob();

createJob();

sendNotification();

Rule:

All business rules belong here.
repository/

Purpose: Database Layer.

Contains:

MongoDB Queries
Create
Find
Update
Delete

Example:

JobModel.create()

JobModel.find()

JobModel.findById()

Rule:

Only database operations.
No business logic.
model/

Purpose: MongoDB Schema.

Contains:

title
company
salary
skills

Example:

const JobSchema =
new mongoose.Schema(...)

Rule:

Database structure only.
dto/

Purpose: Define data shape between layers.

DTO = Data Transfer Object

Example:

export interface CreateJobDto {
title: string;
company: string;
}

Rule:

TypeScript interfaces/types only.
Quick Memory Trick
Routes → Which API?
Validator → Is data valid?
Controller → Receive & Return
Service → Business Logic
Repository → Database Queries
Model → MongoDB Schema
DTO → Data Types
Example Flow
POST /jobs
↓
Route
↓
Validator
↓
Controller
↓
Service
↓
Repository
↓
MongoDB
↓
Response

If you follow this rule consistently, your codebase stays organized even when you have modules like:

auth/
users/
jobs/
applications/
saved-jobs/
notifications/
admin
