module.exports = [
    /* Initialize users, 7 developers, 1 intern, 1 project manager */
    /* recreate passwords to make them all functional to login to */
    { "db" : "Users",
      "collection": [
        {
            "date" : 1141039663666,
            "employeeID": "0811c",
            "email": "terry@example.com",
            "password": "$2a$08$i0Kr9p9kvXYzBXsykEZdLetoVHC2wdPfDbGW5HoAWYvWrDZLNUv7i",
            "firstName": "Terry",
            "lastName": "Davis",
            "submittedPRs": [],
            "role": "Project Manager",
            "assignedBugs": [],
            "resolvedBugs": [],
        },{
            "date" : 1141039663666,
            "employeeID": "0369",
            "email": "nikola@example.com",
            "password": "$2a$08$i0Kr9p9kvXYzBXsykEZdLetoVHC2wdPfDbGW5HoAWYvWrDZLNUv7i",
            "firstName": "Nikola",
            "lastName": "Tesla",
            "submittedPRs": ["16ba53bf3"],
            "role": "Developer",
            "assignedBugs": ["44ef33c79"],
            "resolvedBugs": ["f81194e16"],
        },{
            "date" : 1141039663666,
            "employeeID": "5613",
            "email": "josh@example.com",
            "password": "$2a$08$i0Kr9p9kvXYzBXsykEZdLetoVHC2wdPfDbGW5HoAWYvWrDZLNUv7i",
            "firstName": "Joshua",
            "lastName": "Campbell",
            "submittedPRs": ["15663263b"],
            "role": "Developer",
            "assignedBugs": [],
            "resolvedBugs": ["3ec13b959"],
            "messages": {
                unreadMessages: 2, 
                unreadThreads: 1, 
                threads: [
                    {
                        senderName: "Terry",
                        senderID: "0811c",
                        lastMessage: 1141039663667,
                        unread: 2,
                        messages: [
                            {   
                                type: "IN",
                                time: 1141039663667,
                                message: "Nevermind, reassigned",
                                read: false
                            }, {
                                type: "IN",
                                time: 1141039663666,
                                message: "Can you jump on that Critical bug right now?",
                                read: false
                            }                
                        ]
                    },
                    {
                        senderName: "Kayla",
                        senderID: "0999",
                        lastMessage: 1141039963666,
                        unread: 0,
                        messages: [
                            {   
                                type: "OUT",
                                time: 1141039963666,
                                message: "Thank you!",
                                read: true
                            }, {
                                type: "IN",
                                time: 1141039663666,
                                message: "Here's the stuff you requested!",
                                read: true
                            }                
                        ]
                    } 
                ] 
            },
            "alerts": [
                {
                    time: 1141039963666,
                    message: "You have an alert!",
                    icon: "" /* Icon to display with alert */
                }
            ]
        },{
            "date" : 1141039663666,
            "employeeID": "0999",
            "email": "kayla@example.com",
            "password": "$2a$08$i0Kr9p9kvXYzBXsykEZdLetoVHC2wdPfDbGW5HoAWYvWrDZLNUv7i",
            "firstName": "Kayla",
            "lastName": "Smith",
            "submittedPRs": ["7de0dc374"],
            "role": "Developer",
            "assignedBugs": [],
            "resolvedBugs": ["10db168eb"],
        },{
            "date" : 1141039663666,
            "employeeID": "3169",
            "email": "john@example.com",
            "password": "$2a$08$i0Kr9p9kvXYzBXsykEZdLetoVHC2wdPfDbGW5HoAWYvWrDZLNUv7i",
            "firstName": "John",
            "lastName": "McClane",
            "submittedPRs": [],
            "role": "Developer",
            "assignedBugs": ["ad59dec99", "96a0bfb77"],
            "resolvedBugs": [],
        },{
            "date" : 1141039663666,
            "employeeID": "c137",
            "email": "rick@example.com",
            "password": "$2a$08$i0Kr9p9kvXYzBXsykEZdLetoVHC2wdPfDbGW5HoAWYvWrDZLNUv7i",
            "firstName": "Rick",
            "lastName": "Sanchez",
            "submittedPRs": [],
            "role": "Developer",
            "assignedBugs": [],
            "resolvedBugs": [],
        },{
            "date" : 1141039663666,
            "employeeID": "1011",
            "email": "bender@example.com",
            "password": "$2a$08$i0Kr9p9kvXYzBXsykEZdLetoVHC2wdPfDbGW5HoAWYvWrDZLNUv7i",
            "firstName": "Bender",
            "lastName": "Rodriguez",
            "submittedPRs": [],
            "role": "Developer",
            "assignedBugs": ["6a9293a24"],
            "resolvedBugs": [],
        },{
            "date" : 1141039663666,
            "employeeID": "3144",
            "email": "captain@example.com",
            "password": "$2a$08$i0Kr9p9kvXYzBXsykEZdLetoVHC2wdPfDbGW5HoAWYvWrDZLNUv7i",
            "firstName": "Captain",
            "lastName": "Crunch",
            "submittedPRs": ["52b0df3cb","1e9a5fbb2","d68926019"],
            "role": "Developer",
            "assignedBugs": [],
            "resolvedBugs": ["f176ce974"],
        },{
            "date" : 1141039663666,
            "employeeID": "c371",
            "email": "morty@example.com",
            "password": "$2a$08$i0Kr9p9kvXYzBXsykEZdLetoVHC2wdPfDbGW5HoAWYvWrDZLNUv7i",
            "firstName": "Morty",
            "lastName": "Smith",
            "submittedPRs": ["d60de5073", "63af28149", "b3bd63f21"],
            "role": "Intern",
            "assignedBugs": ["1deadbeef"],
            "resolvedBugs": ["147971f66"],
        }
    ]},{ "db" : "PRs",
      "collection": [
        {
            "date" : 1580551359315,
            "employeeID": "3144",
            "prID": "52b0df3cb",
            "prURL": "https://github.com/OmegaPointZero/example/pull/1",
            "bugID": "f176ce974",
            "resolvedIssue": true,
            "notes": "Refactored the save() function to prevent duplicate entries with multiple \"employee_role\" objects.",
            "reviewedBy": {
                "employeeID": "0811c",
                "name": "Terry",
                "date" : 1580581352122,
                "notes": "Passes all test cases that triggered issue"
            }
        },{
            "date" : 1580554359315,
            "employeeID": "3144",
            "prID": "1e9a5fbb2",
            "prURL": "https://github.com/OmegaPointZero/example/pull/2",
            "bugID": "869b7e0a5",
            "resolvedIssue": false,
            "notes": "Added function to validate login IDs",
            "reviewedBy": {
                "employeeID": "0811c",
                "name": "Terry",
                "date" : 1580581452144,
                "notes": "Still causes problems if ID is null instead of just invalid"
            }
        },{
            "date" : 1580581531227,
            "employeeID": "3144",
            "prID": "d68926019",
            "prURL": "https://github.com/OmegaPointZero/example/pull/3",
            "bugID": "869b7e0a5",
            "resolvedIssue": true,
            "notes": "Validates login ID and handles all possible inputs",
            "reviewedBy": {
                "employeeID": "0811c",
                "name": "Terry",
                "date" : 1580571491227,
                "notes": "Server no longer crashing upon invalid inputs"
            }
        },{
            "date" : 1580587452145,
            "employeeID": "0369",
            "prID": "16ba53bf3",
            "prURL": "https://github.com/OmegaPointZero/example/pull/4",
            "bugID": "f81194e16",
            "resolvedIssue": true,
            "notes": "Altered vibrations to create wireless tx",
            "reviewedBy": {
                "employeeID": "0811c",
                "name": "Terry",
                "date" : 1580589452145,
                "notes": "Power successfully programmed to transmit wirelessly"
            }
        },{
            "date" : 1580602452594,
            "employeeID": "c371",
            "prID": "d60de5073",
            "prURL": "https://github.com/OmegaPointZero/example/pull/5",
            "bugID": "147971f66",
            "resolvedIssue": false,
            "notes": "Documented all endpoints and their purposes",
            "reviewedBy": {
                "employeeID": "0811c",
                "name": "Terry",
                "date" : 1580602452594,
                "notes": "Needs to be reformatted to follow standards, all endpoints and request types need to be included"
            }
        },{
            "date" : 1580605452593,
            "employeeID": "c371",
            "prID": "63af28149",
            "prURL": "https://github.com/OmegaPointZero/example/pull/6",
            "bugID": "147971f66",
            "resolvedIssue": false,
            "notes": "Documented all endpoints, added request types, formatted to standards",
            "reviewedBy": {
                "employeeID": "0811c",
                "name": "Terry",
                "date" : 1580605752599,
                "notes": "Example data needs to be present for POST requests"
            }
        },{
            "date" : 1580605490593,
            "employeeID": "0999",
            "prID": "7de0dc374",
            "prURL": "https://github.com/OmegaPointZero/example/pull/7",
            "bugID": "10db168eb",
            "resolvedIssue": true,
            "notes": "updated role_handler() route to always return an object containing the results rather than the raw results",
            "reviewedBy": {
                "employeeID": "0811c",
                "name": "Terry",
                "date" : 1580607153349,
                "notes": ""
            }
        },{
            "date" : 1580605690593,
            "employeeID": "5613",
            "prID": "15663263b",
            "prURL": "https://github.com/OmegaPointZero/example/pull/8",
            "bugID": "3ec13b959",
            "resolvedIssue": true,
            "notes": "implemented input sanitations to prevent SQL injection attacks against the server",
            "reviewedBy": {
                "employeeID": "0811c",
                "name": "Terry",
                "date" : 1580607355507,
                "notes": ""
            }
        },{
            "date" : 1580606990593,
            "employeeID": "c371",
            "prID": "b3bd63f21",
            "prURL": "https://github.com/OmegaPointZero/example/pull/9",
            "bugID": "147971f66",
            "resolvedIssue": true,
            "notes": "Documented everything to standards with example POST data and accurate request responses for each endpoint",
            "reviewedBy": {
                "employeeID": "0811c",
                "name": "Terry",
                "date" : 1580607980507,
                "notes": "Documentation accepted"
            }
        },{
            "date" : 1580607000593,
            "employeeID": "1011",
            "prID": "3735dd7f2",
            "prURL": "https://github.com/OmegaPointZero/example/pull/10",
            "bugID": "6a9293a24",
            "resolvedIssue": false,
            "notes": "Piping much faster",
            "reviewedBy": {
                "employeeID": "0811c",
                "name": "Terry",
                "date" : 1580608080507,
                "notes": "While faster, we need to reduce to O(log(n)) complexity"
            }
        },{
            "date" : 1580607000594,
            "employeeID": "c137",
            "prID": "12204085c",
            "prURL": "https://github.com/OmegaPointZero/example/pull/11",
            "bugID": "c1e542079",
            "resolvedIssue": false,
            "notes": "Got child threads to be killed reliably",
            "reviewedBy": {}
        },
    ]},
    {"db" : "Bugs",
    "collection": [
        {
            "project": "Employee Management Suite",
            "repo": "https://github.com/OmegaPointZero/example",
            "bugID": "f176ce974",
            "commit": "8101ae6a9647d20d54c30029eaa01f9e1bdd9f06",
            "summary": "Saving records of employees with multiple roles results in multiple employee profiles being saved.",
            "dateFiled": 1580551359315,
            "assignedTo": "3144",
            "status": "Resolved",
            "type": "Low",
            "active": false,
            "submittedPRs": ["52b0df3cb"],
            "fixedOn": 1580581352122,
            "finalPR": "52b0df3cb"
        },
        {
            "project": "Employee Management Suite",
            "repo": "https://github.com/OmegaPointZero/example",
            "bugID": "869b7e0a5",
            "commit": "8101ae6a9647d20d54c30029eaa01f9e1bdd9f06",
            "summary": "Invalid employee ID being passed to login causes server crash.",
            "dateFiled": 1580551359315,
            "assignedTo": "3144",
            "status": "Resolved",
            "type": "High",
            "active": false,
            "submittedPRs": ["1e9a5fbb2", "d68926019"],
            "fixedOn": 1580602452594,
            "finalPR": "d68926019"
        },
        {
            "project": "Employee Management Suite",
            "repo": "https://github.com/OmegaPointZero/example",
            "bugID": "f81194e16",
            "commit": "8101ae6a9647d20d54c30029eaa01f9e1bdd9f06",
            "summary": "Power still transmitted via cables, not wirelessly.",
            "dateFiled": 1580551359315,
            "assignedTo": "0369",
            "status": "Resolved",
            "type": "Medium",
            "active": false,
            "submittedPRs": ["16ba53bf3"],
            "fixedOn": 1580602452594,
            "finalPR": "16ba53bf3"
        },
        {
            "project": "Employee Management Suite",
            "repo": "https://github.com/OmegaPointZero/example",
            "bugID": "147971f66",
            "commit": "8101ae6a9647d20d54c30029eaa01f9e1bdd9f06",
            "summary": "API needs to be documented.",
            "dateFiled": 1580551359315,
            "assignedTo": "c371",
            "status": "Resolved",
            "type": "Documentation",
            "active": false,
            "submittedPRs": ["d60de5073", "63af28149", "b3bd63f21"],
            "fixedOn": 1580607980507,
            "finalPR": "b3bd63f21"
        },{
            "project": "Employee Management Suite",
            "repo": "https://github.com/OmegaPointZero/example",
            "bugID": "3ec13b959",
            "commit": "8101ae6a9647d20d54c30029eaa01f9e1bdd9f06",
            "summary": "Login form vulnerable to SQL injection attacks",
            "dateFiled": 1580551359315,
            "assignedTo": "5613",
            "status": "Resolved",
            "type": "Critical",
            "active": false,
            "submittedPRs": ["15663263b"],
            "fixedOn": 1580607355507,
            "finalPR": "15663263b"
        },{
            "project": "Employee Management Suite",
            "repo": "https://github.com/OmegaPointZero/example",
            "bugID": "10db168eb",
            "commit": "8101ae6a9647d20d54c30029eaa01f9e1bdd9f06",
            "summary": "Server crashes when employee tasks are updated with anything other than the default task type",
            "dateFiled": 1580551359315,
            "assignedTo": "0999",
            "status": "Resolved",
            "type": "High",
            "active": false,
            "submittedPRs": ["7de0dc374"],
            "fixedOn": 1580607153349,
            "finalPR": "7de0dc374"
        },{
            "project": "Employee Management Suite",
            "repo": "https://github.com/OmegaPointZero/example",
            "bugID": "1deadbeef",
            "commit": "8101ae6a9647d20d54c30029eaa01f9e1bdd9f06",
            "summary": "Manually create a ton of mock database entries to populate the DB with for testing and demo purposes",
            "dateFiled": 1580551359315,
            "assignedTo": "c371",
            "status": "In Progress",
            "type": "Low",
            "active": true,
            "submittedPRs": [],
            "fixedOn": 0,
            "finalPR": ""
        },{
            "project": "Employee Management Suite",
            "repo": "https://github.com/OmegaPointZero/example",
            "bugID": "ad59dec99",
            "commit": "8101ae6a9647d20d54c30029eaa01f9e1bdd9f06",
            "summary": "Test sandbox escape vulnerability and create fix",
            "dateFiled": 1580551359315,
            "assignedTo": "3169",
            "status": "In Progress",
            "type": "Medium",
            "active": true,
            "submittedPRs": [],
            "fixedOn": 0,
            "finalPR": ""
        },{
            "project": "Employee Management Suite",
            "repo": "https://github.com/OmegaPointZero/example",
            "bugID": "96a0bfb77",
            "commit": "8101ae6a9647d20d54c30029eaa01f9e1bdd9f06",
            "summary": "Test sandbox escape vulnerability and create fix",
            "dateFiled": 1580551359315,
            "assignedTo": "3169",
            "status": "Assigned",
            "type": "Low",
            "active": true,
            "submittedPRs": [],
            "fixedOn": 0,
            "finalPR": ""
        },{
            "project": "Employee Management Suite",
            "repo": "https://github.com/OmegaPointZero/example",
            "bugID": "44ef33c79",
            "commit": "8101ae6a9647d20d54c30029eaa01f9e1bdd9f06",
            "summary": "Add wireless electricity to the entire building",
            "dateFiled": 1580551359315,
            "assignedTo": "0369",
            "status": "In Progress",
            "type": "Feature Request",
            "active": true,
            "submittedPRs": [],
            "fixedOn": 0,
            "finalPR": ""
        },{
            "project": "Employee Management Suite",
            "repo": "https://github.com/OmegaPointZero/example",
            "bugID": "6a9293a24",
            "commit": "8101ae6a9647d20d54c30029eaa01f9e1bdd9f06",
            "summary": "Refactor of all pipe functions",
            "dateFiled": 1580551359315,
            "assignedTo": "1011",
            "status": "PR Rejected",
            "type": "Low",
            "active": true,
            "submittedPRs": ["3735dd7f2"],
            "fixedOn": 0,
            "finalPR": ""
        },{
            "project": "Employee Management Suite",
            "repo": "https://github.com/OmegaPointZero/example",
            "bugID": "c1e542079",
            "commit": "8101ae6a9647d20d54c30029eaa01f9e1bdd9f06",
            "summary": "Child threads not being killed correctly in cleanup()",
            "dateFiled": 1580551359315,
            "assignedTo": "c137",
            "status": "Under Review",
            "type": "Low",
            "active": true,
            "submittedPRs": ["12204085c"],
            "fixedOn": 0,
            "finalPR": ""
        },{
            "project": "Employee Management Suite",
            "repo": "https://github.com/OmegaPointZero/example",
            "bugID": "",
            "commit": "8101ae6a9647d20d54c30029eaa01f9e1bdd9f06",
            "summary": "",
            "dateFiled": 1580551359315,
            "assignedTo": "",
            "status": "Unassigned",
            "type": "Low",
            "active": true,
            "submittedPRs": [],
            "fixedOn": 0,
            "finalPR": ""
        }
    ]}
]

