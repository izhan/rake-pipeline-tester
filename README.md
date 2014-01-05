Rake Pipeline Test
====================

This is a simple [rake pipeline](https://github.com/livingsocial/rake-pipeline) that tests a [ES6 Module Transpiler filter](https://github.com/izhan/rake-pipeline-web-filters) that I recently created.

The filter itself depends on the [ruby_es6_module_transpiler](https://github.com/izhan/ruby_es6_module_transpiler) gem.  You should have Node.js available as well.

To test, run

    $ rakep
     
in the command line.  With the current configuration, it will take javascript or coffeescript files nested under source/javscript and compile it using Square's [ES6 Module Transpiler](https://github.com/square/es6-module-transpiler), with the globals option enabled.  Your compiled code will appear as compiled/application.js

You may modify the Assetfile to test out different options.  For any bugs, please submit a PR to any of the repositories linked to above.  Fiddle around with the rake pipeline as well -- it's a great tool for both css and javascript files!

Be sure to run

    $ rakep clean
      
as well for future runs!