# meteor-coffeescript-x

this is a jsx capable version of the meteor coffeescript compiler.

it builds upon the original meteor `coffeescript` compiler (just copy the newest coffeescript code in plugin/coffee-cjsx.js to update to a newer version of the original compiler). 

Sadly meteor does not export the compiler itself to be used outside of the original coffeescript package (or at least I could not get it) so I had to copy & paste its code in here.

The other thing this package uses is `coffee-react-transform`