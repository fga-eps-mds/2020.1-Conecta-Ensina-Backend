const express = require('express');

const userRoutes = require('./routes/user');
const studentRoutes = require('./routes/student');
const teacherRoutes = require('./routes/teacher');
const subjectRoutes = require('./routes/subject');
const classroomRoutes = require('./routes/classroom');
const rateRoutes = require('./routes/rate');
const complainRoutes = require('./routes/complain');

const application = express();

// Static resources setup
application.use(express.static('public'));

// Content-Type will be application/json, (this MUST come before application routes)
application.use(express.json());

// Routes middleware configuration
application.use('/api/user', userRoutes);
application.use('/api/student', studentRoutes);
application.use('/api/teacher', teacherRoutes);
application.use('/api/subject', subjectRoutes);
application.use('/api/classroom', classroomRoutes);
application.use('/api/rate', rateRoutes);
application.use('/api/complain', complainRoutes);

module.exports = application;
