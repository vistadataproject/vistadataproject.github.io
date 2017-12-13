---
layout: default
title: VAM Demo 1 (Build 1)
---

# VAM Demonstration Build 1 (December 2017)

__TODO__: change to fix broken image links/sizes and flow from list of VAM emulated RPCs to one patient centric one from VISTA. Then say the VISTA one will move to VAM in build 2.

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

CPRS should be connected to _vamdemo.vistadataproject.info:9011_. After connecting CPRS presents a login screen ...

![CPRS Login -width70](images/CPRS_Login.png)

Back in the _Router Manager_, the _RPC Events_ tab shows the three RPCs sent by CPRS, all of which were routed to VISTA ...

![RM Connect Before Login -width70](images/RM_2_ConnectBeforeLogin.png)

Double click on the row with the _XUS INTRO_ RPC ...

![RM XUS INTRO DETAILS -width70](images/RM_2_XUS_INTRO_DETAILS.png)

This, like all detail popups, shows four key aspects of an RPC monitored by the Router:
  1. When the RPC was received and where it was routed to. This RPC was routed to _VISTA_.
  2. A unique transaction id is given to every RPC received by the Router. This id allows RPC traffic to be identified uniquely in audit logs.
  3. The arguments passed in a request
  4. The response from either VISTA or the VICS Server 

Now briefly go back to CPRS and login as Dr Robert Alexander using the following credentials ...

```
   Access Code: fakedoc1
   Verify Code: 1doc!@#$
```

Back in the _Router Manager_, RPC after RPC cascades through the _RPC Event_ tab. CPRS is very "chatty" - Before any patient is selected, it sends over 80 RPCs. RPCs supported by the _VICS Server_ go to the server, not VISTA. As the Server emulates CPRS' RPC interface, CPRS proceeds as if all of its interactions are with the VISTA ...

![RM LOGIN RPCs -width70](images/RM_3_LoginRPCs.png)

Back in CPRS, you are asked to select a Patient ...

![CPRS Patient Select Open -width70](images/CPRS_PSEL_Open.png)

Single Click on _Carter, David_. You'll see that this patient's demographics appear to the left of the selection box ...

![CPRS Patient Select Open -width70](images/CPRS_PSEL_See_Demos.png)

The Router Manager shows this information comes from three RPC calls ...

![DM_3_1_SINGLE_CLICK_SEL_LIST -width25](images/DM_3_1_SINGLE_CLICK_SEL_LIST.png)

mainly from ...

![DM_3_1_SINGLE_CLICK_SEL_LIST -width25](images/DM_3_1_ORWPT_ID_INFO.png).

Now as the image above shows, in Build1, this RPC continues to be processed by VISTA but it and other patient demographics will come from VICS Server in Build 2.

Clicking _Ok_ will bring you to the Patient's Chart ...

![CPRS Coversheet -width70](images/CPRS_Coversheet.png)

Back in the _Router Manager_ ...

![RM_3_5TABS -width40](images/RM_3_5TABS.png)
...
![RM_3_6TABS -width40](images/RM_3_6TABS.png)
...
![RM_3_ORQPT_DEFAULT_LIST_SOURCE -width70](images/RM_3_ORQPT_DEFAULT_LIST_SOURCE.png)
...
![RM_3_ORQPT_DEFAULT_LIST_SOURCE -width70](images/RM_3_XUS_GET_USER_INFO.png)
...
![RM_3_ORWCV1_COVERSHEET_LIST -width70](images/RM_3_ORWCV1_COVERSHEET_LIST.png)
...
![RM_4_MixOfRoutedRPCs](images/RM_4_MixOfRoutedRPCs.png)
...
![RM_4_ManySameRPCs](images/RM_4_ManySameRPCs.png)

Finally, when you exit from CPRS ...

![CPRS Exit -width70](images/CPRS_Exit.png)

the _Router Manager_ will show the RPC sign out messages ending in _BYE_ ...

![RM END BYE -width70](images/RM_END_BYE.png)

Once CPRS disconnects, the Router will close its connection to both VISTA and the VICS Server.

