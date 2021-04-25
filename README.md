# To-do Application

The application provides google authentication with firebase, to keep track of a users to-do's on the cloud service. The application will remember a user for a short amount of time to prevent constant relogging in.
<br />
<br />
The UI of the website uses a soft design that can be toggled between dark and light mode, which is saved on the local machine as well as the web- to provide seamless switching between devices if the color scheme changes.
<br />
<br />
Each task can be marked as complete and can be deleted, the database is updated in real time to prevent errors if the user is using multiple devices.
<br />
<br />
Aside from the color scheme setting, more settings like changing the icons for the to-do's (TBA) are available.

## Live Demo

<a href="https://todo.zackaryjamessantana.com/">https://todo.zackaryjamessantana.com/</a>

## Motivation

I wanted a basic introduction to Svelte! I also wanted to go indepth using firebase and authentication.

## Tech/framework used

<b>Built with</b>

<ul>
<li>- [<a href="https://svelte.dev/">Svelte</a>] - Is the framework of this repo</li>
<li>- [<a href="https://firebase.google.com/">Firebase</a>] - Used to authenticate and store user data</li>
<li>- [<a href="https://github.com/beyonk-adventures/svelte-notifications">Svelte Notifications</a>] - Used to make fluent and nice notifications</li>
<li>- [<a href="https://github.com/6eDesign/svelte-calendar">Svelte Calendar</a>] - Used to make lightweight, compact calendar</li>
</ul>

## Firebase

Using Firestore (a feature in Firebase), the users authenticate a connection (with a google account) and then submit information to be stored on the Firestore.
On the Firestore, there are strict rules to validate the data entered and whether or not the data being created, updated, or deleted is a valid query.

## Installation

After installing this repository, use

```
npm install
```

To run the project use:

```
npm run dev
```
