# BugTraq

A Bug Tracking application to make managing bugs and projects easier, both for developers and project managers.

### Next Sprint

+ Add avatars to users, tie them to user schema, add image to both home page and messages pages
+ Fix time display for messages and alerts

+ Update reinitialization function to create 3 days' worth of data
    + Make it so timestamps are automatically generated to:
        + Hand out tickets at 0800 every day
        + Have responses filed throughout the day
        + Have reviews filed after responses
+ Update the dashboard to allow you to choose 1, 2 or 3 or more days' worth of data

+ Make page for each component
+ Make endpoints for the following:
    + /user/profile
    + /user/messages
    + /user/messages/:id (individual message thread)
    + /user/team
    + /bugs/open
    + /bugs/ (same as /bugs/all)
    + /bugs/mine
    + /bugs/bug/:id (the actual bug profile being worked on)

### Development notes

The `/initialize` route initializes the data. The data is displayed nicely in a HUD at the dashboard. The alerts and messages have been hidden, so next is figuring out how to integrate messages and alerts into the model, and getting them to display. This is the next priority as 1) the model has to be updated for the view and be complete for the controller, and 2) The menu and navbar will the be the same on all pages, so it must be _done_ before the rest of the pages are fleshed out and worked on.

### Features

+ Coming Soon

## API Documentation

+ Coming Soon
