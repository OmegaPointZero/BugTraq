# BugTraq

A Bug Tracking application to make managing bugs and projects easier, both for developers and project managers.

### Next Sprint

+ Add notifications objects to user Array
    ```
        obj = {
            time: TIMESTAMP,
            message: "",
            icon: "" /* Icon to display with alert */
        }
    ```
+ Figure out how to add messages?
    + Keep as a thread, so one object with an array
    ``` 
        obj = {
            senderName: "",
            senderID: "",
            lastMessage: TIMESTAMP,
            unread: 0,
            messages: [
                {   
                    type: "OUT",
                    time: TIMESTAMP,
                    message: "Thank you!",
                    read: true
                }, {
                    type: "IN",
                    time: TIMESTAMP,
                    message: "Here's the stuff you requested!",
                    read: true
                }                
            ]
        } 

    ```
 
+ Make page for each component
+ Make endpoints for the following:
    + /user/bugs
    + /user/profile
    + /user/messages
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
