The mvdm module can be added to a node project by including this dependency in package.json. Then using npm install.

```javascript
"dependencies": {
  "mvdm": "git+https://github.com/vistadataproject/MVDM.git"
}
```

# RPC Facade
The RPC Facade can be included by using 
```javascript
var RPCFacade = require('mvdm/rpcFacade');
var rpcFacade = new RPCFacade(db);
```

The RPC Locker for is set on and off by
```javascript
rpcFacade.setLocking(onOrOffBoolean);
```
If the Locker is on, the Facade will first check if the RPC is implemented in the Locker. If it is, then the Locker implementation of the RPC is called. If the RPC is not supported, the Facade will default to calling the RPC Runner, that is, calling an interface to call the legacy MUMPS code.

Within MVDM, there is also a way to set the RPC connection context. This context is related to the user and connection to the RPC broker. RPCs are not stateless and it is necessary to switch contexts to help ensure that the user or connection has permission to execute the RPC. This call restores the symbol tables in MUMPS to ensure the user has permission and any other state is restored prior to the RPC execution. 

# RPC Context
To set the context
```javascript
var RPCContexts = require('mvdm/rpcRunner').RPCContexts;
var rpcContexts = new RPCContexts(db);
rpcContexts.setContext(contextId);
```

On Server exit or shutdown or on initialization remove any old contexts:
```javascript
rpcContexts.clearAll();
```
 
# Making VDP MUMPS available
The following finds the path to where the .M files are located such as RPCRUN.M. These are dependent on node_modules tree following npm install.
```javascript
var vdmUtils = require('mvdm/vdmUtils');
process.env.gtmroutines = process.env.gtmroutines + ' ' + vdmUtils.getVdmPath(); // make VDP MUMPS available
```

# Setting Handlers to MVDM events
```javascript
var MVDM = require('mvdm/mvdm');
MVDM.on('create', function(mvdmData) {
    var qMessage = {};
    qMessage.type = 'emitMvdmEvent';
    qMessage.event = mvdmData;
    qMessage.eventType = 'mvdmCreate';
    send(qMessage);
});
```