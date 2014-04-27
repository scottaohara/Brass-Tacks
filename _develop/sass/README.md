# Framework Structure

The framework is split up into four base folders to help with keeping code
organized and easy to find.


* __globals
* _base-elements
* _helper-classes
* _project


All but the '_project' folder contain an '__import.scss' file to collect and
arrange all of the children sub-files so as to reduce the number of imports
into the master.scss file down to a single instance.


Some folders also contains sub-folders to group families of code.
e.g. typography, buttons, layout, etc.


---


## Customization


###Compiling CSS
Various files contain <code>@if</code> control directives that surround code
partials or components. These directives are mapped to variables within the
master.scss file. By setting a variable to <b>true</b> the matching
<code>@if</code> directive will compile it's contained CSS. If a variable is
set to <b>false</b>, the matching <code>@if</code> directive will not compile
it's CSS.


This customization setup is quite handy for including only the files you need,
while still keeping all code in case previously unused components become
required.


###Updating Values
To update the default styling to Brass Tacks, you do not need to venture into
the source files (though you should still study the files to familiarize
yourself with the code).


Instead, use the <b>_setup.scss</b> file, contained in the <b>_project</b>
folder to redefine the default variable values of Brass Tacks.


For instance, if you wanted to update the default base font-size of the
framework, you would add the following to the <b>_setup.scss</b> file:

```css
  $txt-base: (your new value here);
```

That's it. Anywhere where <code>$txt-base</code> is used within Brass Tacks
would then be updated to reflect your new custom value.


It's best to redefine the variables in the <b>_setup.scss</b> file, rather than
in the master variables files, because if you ever need to pull a new version
of Brass Tacks, there will be less chance for you to receive merge conflicts
or for you to lose any of your custom work.
