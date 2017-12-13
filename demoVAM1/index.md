---
layout: default
title: VAM Demo 1 (Build 1)
---

# VAM Demonstration Build 1 (December 2017)

The following demo illustrates the components of the _VAM Build 1_ release.

![pdeVICSServerSetup -width70](images/pdeVICSServer.png)

_VAM Build 1_ involves four components, a _VISTA_, a _VICS Server_, an _RPC Router_ and a _CPRS Client_. The first three are hosted on a cloud-based VM at _vamdemo.vistadataproject.info_. You must install and run _CPRS_ from your local machine.

Start by opening your browser and opening the _RPC Router Manager_ at _[http://vamdemo.vistadataproject.info:9012](http://vamdemo.vistadataproject.info:9012)_. This client let's you monitor RPC traffic sent by _CPRS_ ...

![RM Open Empty -width70](images/RM_1_OpenEmpty.png)

It opens to an empty _RPC Events_ tab which lists the RPCs dispatched through Router. The _Route_ column shows which RPCs go to _VISTA_ and which go to the _VICS Server_. 

Click on the _Management_ tab. The first thing you see is a toggle for controlling whether supported RPCs are routed to the _VICS Server_ or sent to VISTA. 

![RM Management Top](images/RM_1_MgmtTop.png)

It defaults to _On_ which means the Server will receive any RPC it supports. The second part of the Management tab lists the RPCs supported by the Server ...

![RM Management Supported Start](images/RM_1_MgmtSupStart.png)

This list is fetched from the Server by the Router using a custom RPC. As Server coverage grows with each VAM release, the Router will send more and more traffic its way. In _Build 1_, the Server supports _71 VISTA RPCs_ ...

![RM Management Supported End](images/RM_1_MgmtSupEnd.png)

Now, switch back to the _RPC Events_ tab and start _CPRS_ ...

![CPRS Start](images/CPRS_Start.png)

CPRS should be connected to _vamdemo.vistadataproject.info:9011_. After connecting CPRS presents a login screen ...

![CPRS Login](images/CPRS_Login.png)

Back in the _Router Manager_, the _RPC Events_ tab shows the three RPCs sent by CPRS, all of which were routed to VISTA ...

![RM Connect Before Login](images/RM_2_ConnectBeforeLogin.png)

Double click on the row with the _XUS INTRO_ RPC ...

![RM XUS INTRO DETAILS](images/RM_2_XUS_INTRO_DETAILS.png)

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

![RM Post Logon](images/RM_3_5TAB_LIST_HIGHUSERINFO.png)

Note that even before patient selection, CPRS has sent five pages of RPCs, some handled in _VISTA_, some in the _VICS Server_. _ORWU DT_ is sent more than once by CPRS - CPRS asks for the date many many times ...

![RM_O_ORWU_DT](images/RM_O_ORWU_DT.png)

which is now handled by the VICS Server's _Time Service_.

The RPC, _XUS GET USER INFO_ is highlighted in red. Clicking on that row of the table brings up its details ...

![RM_3_ORQPT_DEFAULT_LIST_SOURCE](images/RM_3_XUS_GET_USER_INFO.png)

Unlike _XUS INTRO DETAILS_, this RPC was handled by the _VICS Server_ and not by _VISTA_. The server's _User Service_ knows about all the users of the demo _VISTA_ - it is designed to scale and should be able to handle the user's of all _130 VISTAs_ deployed in the VA. 

Back in CPRS, you are asked to select a Patient ...

![CPRS Patient Select Open](images/CPRS_PSEL_Open.png)

Single Click on _Carter, David_. You'll see that this patient's demographics appear to the left of the selection box ...

![CPRS Patient Select Open](images/CPRS_PSEL_See_Demos.png)

The Router Manager shows this information comes from three RPC calls ...

![DM_3_1_SINGLE_CLICK_SEL_LIST](images/DM_3_1_SINGLE_CLICK_SEL_LIST.png)

mainly from ...

![DM_3_1_SINGLE_CLICK_SEL_LIST](images/DM_3_1_ORWPT_ID_INFO.png)

As the image above shows, in Build1, this RPC continues to be processed by VISTA in _Build 1_ - unlike user information, patient data is not yet in the VICS Server. It will migrate in _Build 2_.

Clicking _Ok_ will bring you to the Patient's Chart ...

![CPRS Coversheet](images/CPRS_Coversheet.png)

and fill two more tabs of RPCs from VistA (__TODO__) ...

![RM_3_6TABS](images/RM_3_6TABS.png)

one of which is the VICS Server-supported _ORWCV1 COVERSHEET LIST_ ...

![RM_3_ORWCV1_COVERSHEET_LIST](images/RM_3_ORWCV1_COVERSHEET_LIST.png)

an RPC that tells CPRS what to show in its _coversheet_. Just like VISTA, the VICS Server supports different coversheet configurations for different users in a _Parameter Service_. This service could manage the preferences, permissions and settings of all CPRS users in the VA.

__TODO__: go through any Allergy, Problem, Vital called in this first sequence up to coversheet.

Finally, when you exit from CPRS ...

![CPRS Exit](images/CPRS_Exit.png)

the _Router Manager_ will show the RPC sign out messages ending in _BYE_ ...

![RM END BYE](images/RM_END_BYE.png)

Once CPRS disconnects, the Router will close its connection to both VISTA and the VICS Server.

__BONUS__:

![ORWU TOOLMENU](images/RM_3_ORWU_TOOLMENU.png)

... example of CPRS Service. Centralize CPRS configuration ... but flexibly. You can using a Parameter Service similar to VISTA's, have national, per VISTA, per division, per location and per user settings.

![RM_4_OREVNTX1_DLGIEN](images/RM_4_OREVNTX1_DLGIEN.png)

... example of managing a local VistA's Id for a common concept, "PSH OERR" (ie/ among the links) ... supports lookup ...

![RM_3_ORQPT_DEFAULT_LIST_SOURCE](images/RM_3_ORQPT_DEFAULT_LIST_SOURCE.png)

... add in wednesday clinic ... gets from ??? 44? See Patient Select ...


