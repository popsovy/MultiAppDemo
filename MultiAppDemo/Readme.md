# Multi App Demo

This project contains an example of how to host [Angular] (https://angular.io) apps and Angular web components in [ASP.NET] (https://dotnet.microsoft.com/apps/aspnet) views.

## Prerequisites

- Angular 8
- Visual Studio 2019 v16.3.4 or later (comes with .NET Core 3.0)
- Visual Studio Code recommended for running Angular projects

## Running the solutions

- Clone or download the project
- Open MultiAppDemo.sln in Visual Studio 2019
- Open Apps subfolder in Visual Studio Code
	- In Apps subfolder, open a terminal window and run `ng serve --liveReload=false`
	- In Apps subfolder, open another termal window and run `ng serve App1 --port 4201 --servePath / --baseHref /apps/app1/ --publicHost http://localhost:4201`
- In Visual Studio 2019, start debugging (F5 or Ctrl-F5)

