# Electron Builder for Angular CLI v6+

### Overview

This is a builder for the Angular CLI that allows you to target an Electron environment, 
giving you access to all functions available to Electron such as file system access, which currently
is not supported in the Angular CLI.

##### What this isn't

This is not schematics or anything else that will help scaffold an Electron application for you. This is simply an extension
to the Angular CLI build step to allow your Angular app to have full access to Electron's features without any awkward workarounds
like message passing.
