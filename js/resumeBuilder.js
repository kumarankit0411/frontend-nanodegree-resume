var bio = {
    "name": "Ankit Kr. Singh",
    "role": "Web developer",
    "contacts": {
        "mobile": "9837748752",
        "email": "ankitsingh095@outlook.com",
        "github": "www.github.com/kumarankit0411",
        "location": "Agra"
    },
    "welcomeMessage": "Welcome to my world",
    "skills": ["Python", "Embedded C", "Robotics", "OpenCV", "Java"],
    "biopic": "./images/mypic.jpg"
};

var education = {
    "schools": [{
        "name": "Hindustan College of Science and Technology, Mathura",
        "location": "Mathura",
        "degree": "B.Tech",
        "majors": ["Computer Science & Engineering"],
        "dates": "In progress",
        "url": "www.hcst.edu"
    }, ],
    "onlineCourses": [{
            "title": "Intro to computer science",
            "school": "Udacity",
            "dates": "2016",
            "url": "www.udacity.in"
        },
        {
            "title": "CS50",
            "school": "Harvard",
            "dates": "2016",
            "url": "https://cs50.harvard.edu/"
        }
    ]
};

var work = {
    "jobs": [{
            "employer": "Udacity",
            "title": "Student Ambassador",
            "location": "Agra,India",
            "dates": "in progress",
            "description": "Helping Idacity india spread its word and creating awareness among the students as to how they can master a skill the easy way"
        },
        {
            "employer": "HCST",
            "title": "Workshop convenor",
            "location": "Mathura,India",
            "dates": "in progress",
            "description": "Teaching my juniors about various aspects of programming and how they can improve their skills using the resources available online"
        }
    ]
};

var projects = {
    "projects": [{
            "title": "E-yantra",
            "dates": "2016",
            "description": "This was the robotics competetion held at IIT Bombay and our team managed to win 3rd prize and we learned a lot about robotics and how things works",
            "images": ["./images/robot.jpg"]
        },
        {
            "title": "Socli",
            "dates": "2017",
            "description": "Socli is a command line tool for stack overflow answer search and can be used in almost any terminal either in windows or in linux",
            "images": ["./images/Logo_socli.png"]
        }
    ]
};

bio.display = function() {
    var headerRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").prepend(headerRole);

    var headerName = HTMLheaderName.replace("%data%", bio.name);
    $("#header").prepend(headerName);

    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    $("#topContacts").append(formattedMobile);

    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    $("#topContacts").append(formattedEmail);

    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    $("#topContacts").append(formattedGithub);

    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    $("#topContacts").append(formattedLocation);

    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    $("#footerContacts").append(formattedMobile);

    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    $("#footerContacts").append(formattedEmail);

    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    $("#footerContacts").append(formattedGithub);

    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    $("#footerContacts").append(formattedLocation);

    var bioPic = HTMLbioPic.replace("%data%", bio.biopic);
    $("#header").append(bioPic);

    var welcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(welcomeMsg);

    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);

        for (var skill = 0; skill < bio.skills.length; skill++) {
            var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
            $("#skills").append(formattedSkill);
        }
    }
};

bio.display();

work.display = function() {
    for (var job = 0; job < work.jobs.length; job++) {
        $("#workExperience").append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;

        $(".work-entry:last").append(formattedEmployerTitle);

        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        $(".work-entry:last").append(formattedDates);

        var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
        $(".work-entry:last").append(formattedLocation);

        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        $(".work-entry:last").append(formattedDescription);
    }
};

work.display();

projects.display = function() {
    for (var project = 0; project < projects.projects.length; project++) {
        $("#projects").append(HTMLprojectStart);

        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        $(".project-entry:last").append(formattedTitle);

        var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
        $(".project-entry:last").append(formattedDates);

        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
        $(".project-entry:last").append(formattedDescription);

        if (projects.projects[project].images.length > 0) {
            for (var image = 0; image < projects.projects[project].images.length; image++) {
                var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
                $(".project-entry:last").append(formattedImage);
            }
        }
    }
};

projects.display();

education.display = function() {
    for (var school = 0; school < education.schools.length; school++) {
        $("#education").append(HTMLschoolStart);

        var schoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
        $(".education-entry:last").append(schoolName);

        var schoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
        $(".education-entry:last").append(schoolDegree);

        var schoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
        $(".education-entry:last").append(schoolDates);

        var schoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
        $(".education-entry:last").append(schoolLocation);

        for (var major = 0; major < education.schools[school].majors.length; major++) {
            var schoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors[major]);
            $(".education-entry:last").append(schoolMajor);
        }
    }
    $("#education").append(HTMLonlineClasses);
    for (var course = 0; course < education.onlineCourses.length; course++) {
        $("#education").append(HTMLschoolStart);

        var courseTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
        $(".education-entry:last").append(courseTitle);

        var courseSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
        var courseDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
        var formattedDatesSchool = courseDates + courseSchool;
        $(".education-entry:last").append(formattedDatesSchool);

        var courseUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);
        $(".education-entry:last").append(courseUrl);
    }
};

education.display();

$("#mapDiv").append(googleMap);
