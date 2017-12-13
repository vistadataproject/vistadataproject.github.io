---
layout: default
title: VAM Demo 1 (Build 1)
---

# VAM Demonstration Build 1 (December 2017)

The following walks through the _VAM Build 1_ demo. 

![pdeVICSServerSetup -width70](images/pdeVICSServer.png)

This demo involves four components, a _VISTA_, a _VICS Server_, an _RPC Router_ and a _CPRS Client_. The first three are hosted on a cloud-based VM at _vamdemo.vistadataproject.info_. You must install and run _CPRS_ from your local machine.

Start by opening your browser and opening the _RPC Router Manager_ at _http://vamdemo.vistadataproject.info:9012/_. This client let's you monitor RPC traffic sent by _CPRS_ ...

![RM Open Empty -width70](images/RM_1_OpenEmpty.png)

It opens to an empty _RPC Events_ tab which lists the RPCs dispatched through Router. The _Route_ column shows which RPCs go to _VISTA_ and which go to the _VICS Server_. 

Click on the _Management_ tab. The first thing you see is a toggle for controlling whether supported RPCs are routed to the _VICS Server_ or sent to VISTA. 

![RM Management Top -width70](images/RM_1_MgmtTop.png)

It defaults to _On_ which means the Server will receive any RPC it supports. The second part of the Management tab lists the RPCs supported by the Server ...

![RM Management Supported Start -width70](images/RM_1_MgmtSupStart.png)

This list is fetched from the Server by the Router using a custom RPC. As Server coverage grows with each VAM release, the Router will send more and more traffic its way. In _Build 1_, the Server supports _71 VISTA RPCs_ ...

![RM Management Supported End -width70](images/RM_1_MgmtSupEnd.png)

Now, switch back to the _RPC Events_ tab and start _CPRS_ ...

![CPRS Start -width70](images/CPRS_Start.png)

CPRS should connect to _vamdemo.vistadataproject.info:9011_. After connecting CPRS presents a login screen ...

![RM Management Supported End -width70](images/RM_1_MgmtSupEnd.png)

Back in the _Router Manager_, the _RPC Events_ tab shows the three RPCs sent by CPRS, all of which were routed to VISTA ...

![RM Connect Before Login -width70](images/RM_2_ConnectBeforeLogin.png)

Double lock on the row with the _XUS INTRO_ RPC ...

![RM XUS INTRO DETAILS -width70](images/RM_2_XUS_INTRO_DETAILS.png)

...

Now briefly go back to CPRS and login as Dr Robert Alexander using the following credentials ...

```
   Access Code: fakedoc1
   Verify Code: 1doc!@#$
```

Back in the _Router Manager_, RPC after RPC cascades through the _RPC Event_ tab. CPRS is very "chatty" - Before any patient is selected, it sends over 80 RPCs. RPCs supported by the _VICS Server_ go to the server, not VISTA. As the Server emulates CPRS' RPC interface, CPRS proceeds as if all of its interactions are with the VISTA ...

![RM LOGIN RPCs -width70](images/RM_3_LoginRPCs.png)

Back in CPRS, you are asked to select a Patient ...

![CPRS Patient Select Open -width70](images/CPRS_PSEL_Open.png)

Single Click on _Carter,David_. You'll see that this patient's demographics appear in the 

![CPRS Patient Select Open -width70](images/CPRS_PSEL_See_Demos.png)

Clicking _Ok_ will bring you to the Patient's Chart ...

![CPRS Coversheet -width70](images/CPRS_Coversheet.png)

Back in the _Router Manager_ ...

...

Finally, when you exit from CPRS ...

![CPRS Exit -width70](images/CPRS_Exit.png)

the _Router Manager_ will show the RPC sign out messages ending in _BYE_ ...

...

Once CPRS disconnects, the Router will close its connection to both VISTA and the VICS Server.

