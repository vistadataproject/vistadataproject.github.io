---
layout: default
title: VICS Demo 1.1 (Build 1.1)
---

# VICS Demonstration (January 2018)

The following _Coversheet Demo_ illustrates the _Veteran Integrated Care Services (VICS) Architecture_. This architecture enables the incremental migration of VA provider workflow from 130 separate, legacy VISTA Servers to one set of enterprise-wide care services. It addresses how to centralize relevant VISTA data while ensuring continued support for CPRS, the VA's primary client for physicians.

The demonstration involves five components - the pre-existing _VISTA Server_ ("Demo VISTA") and its client _CPRS_ and the new _VICS Server_, _RPC Router_ and _RPC Router Manager_. The [meta data of Demo VISTA](../vamB1_1DemoVISTADatasetContents) is shadowed in the VICS Server. To run the demonstration yourself, you'll need first follow the [VICS Vagrant Setup instructions](/vam/build1_1/setupVagrant). 

![build1_1Demo](images/build1_1Demo.png)

The _VICS Server_ is layered - Remote Procedure Call (RPC) Emulation is built over well designed  Services. These Services normalize and refine the cryptically-named and redundantly-implemented RPCs and rely on normalized copies of data from supported VISTAs.

In addition to establishing basic routing and server infrastructure, the first builds focused on the Meta or non patient data of VISTA and the RPCs that access that data ("Meta Data RPCs"). Specifically, they built out a generic _Parameter Service_ to hold system configurations, a basic _Time Service_, a _User Service_ for provider information, a _Location Service_ for managing clinical care locations, an _Identifier Service_ for working between local VISTA identifiers and national equivalents, a _Lexicon Service_ for medical concept management and meta-data support for the four clinical services required in VICS - Allergy, Problem, Vital and Outpatient Pharmacy. 

__Note:__ by design the Router communicates with one VICS Server and one VISTA. In Build 1.1, it only handles one CPRS. Build 2 will add support for many concurrent CPRSs.

In this _Coversheet Demo_, CPRS connects, logs in, clicks on a patient's name ("soft select"), fully selects that patient ("hard select") and then exits. The _Router Manager_ will show the seven screens of RPCs that come from this simple interaction. Though many of these RPCs go to the VICS Server and not to VISTA, CPRS continues unaffected.

After setting up the VICS Vagrant, open your browser and go to the _Router Manager_ at _[http://10.2.2.222:9012](http://10.2.2.222:9012)_. This web client let's you monitor RPCs sent by CPRS through the Router ...

![RM Open Empty -width70](images/RM_1_OpenEmpty.png)

It opens to an empty _RPC Events_ tab which lists the RPCs seen by the Router. The _Route_ column shows which RPCs were sent to _VISTA_ and which were routed to the _VICS Server_. 

Click on the _Management_ tab. The first thing you see is a toggle for controlling whether supported RPCs are routed to the _VICS Server_ or sent to VISTA ...

![RM Management Top](images/RM_1_MgmtTop.png)

It defaults to _On_ which means the Router will dispatch select RPCs to the Server. The second part of the Management tab lists the RPCs supported by the Server ...

![RM Management Supported Start](images/RM_1_MgmtSupStart.png)

This list is fetched from the Server by the Router using a custom RPC. In _Build 1.1_, the Server supports [_103 VISTA RPCs_](../vamB1_1RPCsEmulated.md). In other words, 103 RPCs have been migrated from VISTA to centralized services ...

![RM Management Supported End](images/RM_1_MgmtSupEnd.png)

Now, switch back to the _RPC Events_ tab. To run this part of the demo, CPRS must be installed on your local machine. Start _CPRS_ ...

![CPRS Start](images/CPRS_Start.png)

CPRS should be connected to _10.2.2.222:9011_. After connecting, CPRS presents a login screen ...

![CPRS Login -width70](images/CPRS_Login.png)

Back in the _Router Manager_, the _RPC Events_ tab shows the three RPCs sent by CPRS ...

![RM Connect Before Login -width70](images/RM_2_ConnectBeforeLogin.png)

Double click on the row with the _XUS INTRO_ RPC ...

![RM XUS INTRO DETAILS -width70](images/RM_2_XUS_INTRO_DETAILS.png)

Enhancing RPC auditing and security is a key requirement for VICS. The popup above, like all detail popups, shows five aspects of an RPC monitored by the Router:
  1. When the RPC was received 
  2. Where it was routed to - this RPC was routed to _VISTA_.
  3. A unique transaction id is given to every RPC received by the Router. This id allows RPC traffic to be [a] identified uniquely in audit logs and [b] RPC emulation to be traced through the VICS Server.
  4. The arguments passed in a request
  5. The response from either VISTA or the VICS Server 

Now briefly go back to CPRS and login as Dr Robert Alexander using the following credentials ...

```
   Access Code: fakedoc1
   Verify Code: 1doc!@#$
```

Back in the _Router Manager_, RPC after RPC cascades through the _RPC Event_ tab. CPRS is very "chatty" ...

![RM Post Logon](images/RM_3_5TAB_LIST_HIGHUSERINFO.png)

Before patient selection, CPRS has sent five pages of RPCs, some handled in _VISTA_, others - those bolded - dispatched to the _VICS Server_. _ORWU DT_ was sent more than once by CPRS - CPRS asks for the date and time many many times ...

![RM_O_ORWU_DT -width70](images/RM_O_ORWU_DT.png)

This and other date and time queries are handled by the VICS Server's _Time Service_.

The RPC, _XUS GET USER INFO_ is highlighted in red. Clicking on that row of the table brings up that RPC's details ...

![RM_3_ORQPT_DEFAULT_LIST_SOURCE -width70](images/RM_3_XUS_GET_USER_INFO.png)

Unlike _XUS INTRO DETAILS_, this RPC was handled by the _VICS Server_ and not by _VISTA_. The server's _User Service_ knows about all the users of _Demo VISTA_. 

Centralizing data requires unambiguous national identifiers for all VA data. Traditionally, data is identified within a single VISTA. For example, the response above of _XUS GET USER INFO_ shows _63_ is _Demo VISTA_'s identifier of Robert Alexander. A different VISTA may use _63_ for a different user. The _VICS Identifier Service_ turns such per VISTA identifiers into national, unambiguous equivalents while maintaining per VISTA identification for CPRS RPC emulation.

__Note__: the _User Service_ is designed to scale and could centrally manage the users of all 130 VISTAs deployed in the VA. 

Back in CPRS, you are asked to select a Patient ...

![CPRS Patient Select Open -width70](images/CPRS_PSEL_Open.png)

With a single click ("soft select") on _Carter, David_, you'll see that this patient's demographics appear to the right of the selection box ...

![CPRS Patient Select Open](images/CPRS_PSEL_See_Demos.png)

The _Router Manager_ shows this information comes from three RPC calls ...

![DM_3_1_SINGLE_CLICK_SEL_LIST](images/DM_3_1_SINGLE_CLICK_SEL_LIST.png)

The main RPC, _ORWPT ID INFO_, is resolved in VISTA like other Patient data RPCs ...

![DM_3_1_ORWPT_ID_INFO -width70](images/DM_3_1_ORWPT_ID_INFO.png)

Patient information will move to the VICS Server in Build 2 following the pattern established for User management in earlier builds. 

Clicking _Ok_ ("hard select") will bring you to the Patient's "Coversheet" ...

![CPRS Coversheet -width70](images/CPRS_Coversheet.png)

and fill another tab of RPCs in the Router Manager ...

![RM_6TABS](images/RM_6TABS.png)

The VICS Server stores coversheet configurations for different users in its _Parameter Service_. 

__Note__: in VICS, the Parameter Service holds configurations of one VISTA but this and other VICS services have been built to store and unambiguously manage data from all 130 VA VISTAs.

![RM_4_COVERSHEET_TO_RPCS](images/RM_4_COVERSHEET_TO_RPCS.png)

Configurations are returned in the VICS-supported RPC, _ORWCV1 COVERSHEET LIST_, ...

![RM_3_ORWCV1_COVERSHEET_LIST -width70](images/RM_3_ORWCV1_COVERSHEET_LIST.png)

This RPC not only tells CPRS what data to show in its _coversheet_ including the allergies, vitals, problems and prescriptions. It also specifies the RPCs that return such data for the selected patient and the Router Manager shows the invocation of those RPCs right after CPRS receives the coversheet list. For example, _ORQQAL LIST_ lists the allergies of a patient ...

![RM_5_ORQQAL_LIST -width70](images/RM_5_ORQQAL_LIST.png)

This and other coversheet invoked Patient Data RPCs will move to the VICS Server in Build 2.

Finally, when you exit from CPRS ...

![CPRS Exit](images/CPRS_Exit.png)

the _Router Manager_ will show the RPC sign out messages ending in _BYE_ ...

![RM END BYE -width70](images/RM_END_BYE.png)

Once CPRS disconnects, the Router will close its connection to both VISTA and the VICS Server.

The _Router Manager_ shows this quick _connect-logon-patient select (soft and hard)-exit_ sequence took up 7 pages of RPCs ...

![RM_7TABS](images/RM_7TABS.png)

and by Build 2, the majority of content in all 7 pages will be emulated or explicitly managed in the VICS Server.
