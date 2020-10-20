const express = require('express');

const userRoutes = require('./routes/user');
const studentRoutes = require('./routes/student');
const teacherRoutes = require('./routes/teacher');
const subjectRoutes = require('./routes/subject');
const classroomRoutes = require('./routes/classroom');

const application = express();

// Static resources setup
application.use(express.static('public'));

// Content-Type will be application/json, (this MUST come before application routes)
application.use(express.json());

// Routes middleware configuration
application.use('/api/users', userRoutes);
application.use('/api/students', studentRoutes);
application.use('/api/teachers', teacherRoutes);
application.use('/api/subject', subjectRoutes);
application.use('/api/classroom', classroomRoutes);

module.exports = application;
