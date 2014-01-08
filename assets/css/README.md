# Framework Structure

The framework is split up into four base folders to help with keeping code
organized and easy to find.

* __globals
* _base-elements
* _helper-classes
* _project-specific

Each folder contains an '__import.scss' file to index and arrange all of the
sub-files in the folder and create one main import file to master.scss.

Each folder also contains sub-folders to group code of a similar nature.

For instance, in the __globals folder, all mixins, silent classes and vars are
collected in their designated folders.

In the _base-elements folder, basic HTML elements are grouped by family into
folders, with a __control.scss file containing any additional vars or silent
classes that are only useful to that subset of files.

All of these files are then collected via their main __import.scss and pulled
into:

* master.scss
* project.scss (or whatever you name this file.)

---

## Customization

Each file that has code that has compilable CSS, meaning non globals, imports
or control files, is surrounded by a basic variable @if statement. Those
variables can then be set to true or false via the master.scss or project.scss
files, to determine whether or not the CSS compiles.

This customization setup is quite handy for including only the files you need,
while still keeping all code in case previously unused components become
required.
