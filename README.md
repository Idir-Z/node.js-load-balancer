So this is a very simple load balancer made wit node.js, using the http library to create the load balancing server, for now it only uses round robin to direct requests coming to it around the list of servers added to the list in index.js
to run this you will need to have node.js installed on your computer, clone and cd into the project, type into teminal the command ``npm i`` to install all dependencies
next up you have to manually fire up each server, the balancer is at index.js and the dummy servers are numbered 1 through 3, feature updates will allow automatic firing of servers, each one will listen on port (3000+server number)
you can access the js files to change the port number, the same goes for the load balancer wich will be on port 8080, after running all servers all you need to do is send an http resuest to the balancer and notice the  requests' responses and console logs 
at the index.js terminal
the command to run each server is : ``node fileName.js``
