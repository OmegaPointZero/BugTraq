# BugTraq

A Bug Tracking application to make managing bugs and projects easier, both for developers and project managers.

### Next Sprint

+ Update Schema for bugs to include longer description of issues, update bug submission form to include them, THEN build the /bugs/bug/:id view 

+ Make endpoints for the following:
    + /bugs/pr/:id (details of PR)

    + /user/profile
    + /user/profile/:id
    + /user/messages
    + /user/messages/:id (individual message thread)

+ Create new database collection for "projects", to keep track of bugs better. Projects will also be used to auto-populate information being submitted to the new bug data controller.

#### Bigger things to add

+ Integrate Github via their API
    + Update user schema to hold authentication keys

#### Tertiary objectives

+ Update the dashboard to allow you to choose 1, 2 or 3 or more days' worth of data
    + Create 3 days' worth of data
+ Sort the messages in the dashboard by the most recent, unread first
+ Flash messages for login failures
+ Add "projects", that auto-populate parts of the new bug creator, and let the user specify the project
+ Add function to "remember" user longer with cookies, and then make password recovery email-sending stuff.

### Development notes

The /bugs/all route works, but is not linked to anywhere. What I need to do now, is to tweak the allbugs.ejs to be THE singular bugs template file, so that all other /bugs/ endpoints use that template (with the exception of /bugs/bug/:id and /bugs/new, as the former will have more detailed information displayed differently (and allow the user to submit a PR to fix it), and the latter will allow a user to file a new bug. Schemas have to be tweaked, and from an individual bug's page it should have the option to "claim" it and assign it to yourself.

### Features

+ Coming Soon

## API Documentation

+ Coming Soon
