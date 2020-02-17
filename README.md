# BugTraq

A Bug Tracking application to make managing bugs and projects easier, both for developers and project managers. It's nearing it's first version completion! Upon completion, a user's guide/documentation will be written.

### This Sprint

+ Make controller to update messages for both users upon message being sent
    + Mark viewed messages as read 

+ Create new database collection for "projects", to keep track of bugs better. Projects will also be used to auto-populate information being submitted to the new bug data controller.

### Next Sprint

+ Functionality to delete alerts? Be able to make it so that you can clear notifications
+ Sort the messages in the dashboard by the most recent, unread first
+ Flash messages for login failures
+ First Site Review
    + Create list of tweaks to be made for 
        + Everybody
        + Developers/Interns
        + Project Managers
    + Go through each page, make list of what needs to be done to polish it


##### Polishing list
+ bugid.ejs
    + Color-code bug type
    + Change everything so it's not ALL in h5 tags
    + Put everything into sub-cards, align the cards nicely
+ Sidebar
    + Link to all PRs, and my PRs (put inside bugs?)
+ PRs.ejs
    + Same overhaul as bugid.ejs
    + Add names to "submitted by" links
+ PR.js
    + Add name to schema
+ Routes
    + All routes that write to the PRs database need to be updated to handle names
    + All .ejs files that access the PRs need to be updated to deal with names


#### Bigger things to add

+ Integrate Github via their API
    + Update user schema to hold authentication keys

#### Tertiary objectives

+ Update the dashboard to allow you to choose 1, 2 or 3 or more days' worth of data
    + Create 3 days' worth of data
+ Add "projects", that auto-populate parts of the new bug creator, and let the user specify the project
+ Add function to "remember" user longer with cookies, and then make password recovery email-sending stuff.

### Development notes

The /bugs/all route works, but is not linked to anywhere. What I need to do now, is to tweak the allbugs.ejs to be THE singular bugs template file, so that all other /bugs/ endpoints use that template (with the exception of /bugs/bug/:id and /bugs/new, as the former will have more detailed information displayed differently (and allow the user to submit a PR to fix it), and the latter will allow a user to file a new bug. Schemas have to be tweaked, and from an individual bug's page it should have the option to "claim" it and assign it to yourself.

## API Documentation

+ Coming Soon
