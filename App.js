const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');
const session = require('express-session');
const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/CodeStreamDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});

// Define Mongoose schema and model
const projectSchema = new mongoose.Schema({
    projectName: String,
    projectIdea: String,
    projectLink: String,
    authorName: String,
    authorID: String,
});
const Project = mongoose.model('Project', projectSchema);

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Route for serving the index.html file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Route for handling project upload
app.post('/upload', async (req, res) => {
    try {
        const { projectName, projectIdea, projectLink, authorName, authorID } = req.body;

        // Create a new project document
        const project = new Project({
            projectName,
            projectIdea,
            projectLink,
            authorName,
            authorID,
        });

        // Save the project to MongoDB
        const savedProject = await project.save();
        console.log('Project saved to MongoDB:', savedProject);
        res.json({ message: 'Project uploaded successfully' });
    } catch (error) {
        console.error('Error saving project to MongoDB:', error);
        res.status(500).json({ error: 'Failed to upload project' });
    }
});


// Route for fetching all code data
app.get('/codes', (req, res) => {
    Code.find({})
        .then(codes => {
            res.json(codes);
        })
        .catch(err => {
            console.error('Error fetching codes from MongoDB:', err);
            res.status(500).json({ error: 'Failed to fetch codes' });
        });
});



// Contact form


mongoose.connect('mongodb://localhost:27017/CodeStreamDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('');
}).catch(err => {
    console.error('Error connecting to MongoDB:', err.message);
});

// Define Contact model
const Contact = mongoose.model('Contact', {
    fname: String,
    lname: String,
    email: String,
    phone: String,
    country: String,
    message: String
});

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// POST route to handle form submission
app.post('/contact', async (req, res) => {
    try {
        const { fname, lname, email, phone, country, message } = req.body;
        const contact = new Contact({
            fname,
            lname,
            email,
            phone,
            country,
            message
        });
        await contact.save();
        res.redirect('/contact.html');
        
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});


// Route to handle user login and signup
mongoose.connect('mongodb://localhost:27017/CodeStreamDB', { useNewUrlParser: true, useUnifiedTopology: true });


// Define schema and model for user
const userSchema = new mongoose.Schema({
    fullName: String,
    studentID: String,
    email: String,
    password: String
});
const User = mongoose.model('User', userSchema);

// Use body-parser middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));

// Use express-session middleware
app.use(session({
    secret: 'secret-key',
    resave: false,
    saveUninitialized: true
}));

app.use(express.static('public'));

app.get('/signup', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'signup.html'));
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'login.html'));
});

// Route for handling signup
app.post('/signup', async (req, res) => {
    const { fullName, studentID, email, password } = req.body;
    if (!email.endsWith('diu.edu.bd')) {
        return res.status(400).send('Only DIU email addresses are allowed');
    }
    try {
        const newUser = new User({ fullName, studentID, email, password });
        await newUser.save();
        res.redirect('/login');
    } catch (err) {
        console.error(err);
        res.status(500).send('Error signing up');
    }
});

// Route for handling login
app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email, password });
        if (!user) {
            return res.status(401).send('Invalid email or password');
        }
        req.session.userId = user._id;
        res.redirect('/');
    } catch (err) {
        console.error(err);
        res.status(500).send('Error logging in');
    }
});




// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
