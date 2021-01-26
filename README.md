# Admin Bro

[![codecov](https://codecov.io/gh/SoftwareBrothers/admin-bro/branch/master/graph/badge.svg)](https://codecov.io/gh/SoftwareBrothers/admin-bro)
[![Build Status](https://travis-ci.com/SoftwareBrothers/admin-bro.svg?branch=master)](https://travis-ci.com/SoftwareBrothers/admin-bro)

[AdminBro](https://softwarebrothers.github.io/admin-bro-dev/) is An automatic admin interface which can be plugged into your application. You, as a developer, provide database models (like posts, comments, stores, products or whatever else your application uses), and AdminBro generates UI which allows you (or other trusted users) to manage content.

Inspired by: [django admin](https://docs.djangoproject.com), [rails admin](https://github.com/sferik/rails_admin) and [active admin](https://activeadmin.info/).

## How it looks

<img src='./docs/anim.gif'>

## Example application

Check out the example application with mongodb and postgres models here:

- login: `test@example.com`
- password: `password`

https://admin-bro-example-app-staging.herokuapp.com/admin

## Getting Started

- Check out the [documentation](https://adminbro.com/docs)
- Try the [live demo](https://admin-bro-example-app.herokuapp.com/admin) as mentioned above

## OpenSource SoftwareBrothers community

- [Join the community](https://join.slack.com/t/adminbro/shared_invite/zt-djsqxxpz-_YCS8UMtQ9Ade6DPuLR7Zw) to get help and be inspired.
- subscribe to our [newsletter](http://opensource.softwarebrothers.co)

# What kind of problems it solves

So you have a working service built in Node.js. It uses (for example) [Hapi.js](https://hapijs.com/) for rendering a couple of REST routes and [mongoose](https://mongoosejs.com/) as the _connector_ to the database.

Everything works fine, but now you would like to:
* see all the data in the app,
* perform custom _business_ actions on objects in the database,
* bootstrap the tables with the _initial_ data,
* build custom report pages,
* allow other team members (not necessary programmers) to see what is going on in the application.

And all these cases can be solved by AdminBro. By adding couple of lines of code you have a running admin interface.

# Features

* CRUD any data in any resource
* Custom actions
* Form validation based on schema in your resources
* Full featured dashboard with widgets
* Custom resource decorators


