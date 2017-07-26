---
layout: default
title: MVDM Emulation Demo
---

# MVDM Emulation Demonstration

The following sections describe how to run the Master VISTA Data Model (MVDM) demo. __The demo focuses on how MVDM audits, secures, and emulates current production VISTA clients such as CPRS using the RPC Emulator__: 

<br><br>

![CPRS-MVDM-Clients -width70](/demo/images/common/demo-cprs-mvdm-clients3.png)


## Orientation
1. [Open nodeVISTA Manager](#open-the-nodevista-manager)
2. [CPRS Sign-On / RPC Emulation](#cprs-sign-on--rpc-emulation)


## Domain Demo HOW TOs
* [Allergies](Allergies)
* [Problems](Problems)
* [Vitals](Vitals)
* [Patient](Patient_1)


<br><br>
# Open the nodeVISTA Manager


* If **nodeVISTA** VM is not already running, start it by entering the following command:
    ```shell
    $ vagrant reload
    ```
    
* Enter the **nodeVISTA Manager** URL into your web browser: [http://10.2.2.100:9020/#rpcCounts](http://10.2.2.100:9020/#rpcCounts).

![nodeVISTA Manager RPC Counts -width70](/demo/images/common/management-client/rpc-counts-view.png)

[ Back to top ↑](#top)




<br><br><br><br>
# CPRS Sign-on / RPC Emulation

To watch the RPC events, select the **RPC Events** tab in the **nodeVISTA Manager** [(http://10.2.2.100:9020/#rpcEvents)](http://10.2.2.100:9020/#rpcEvents)

![nodeVISTA Manager Open -width70](/demo/images/common/management-client/open-empty.png)

Start CPRS...

![CPRS Connect Screen -width70](/demo/images/common/cprs/connect.png)

Before logging in, notice that the **nodeVISTA Manager** **RPC Events** tab shows the first RPC traffic coming from CPRS.

![MVDM Client CPRS Connect -width70](/demo/images/common/management-client/connect.png)

Login into VISTA as **ALEXANDER,ROBERT** using the following credentials:
```
   Access Code: fakedoc1
   Verify Code: 1doc!@#$
```

![CPRS Sign On -width70](/demo/images/common/cprs/signon.png)

After login, you will be brought to the patient selection dialog...

![CPRS Patient Select -width70](/demo/images/common/cprs/patient-select.png)
Before choosing patient **Carter,David**, look in the **nodeVISTA Manager** and see just how _chatty_ CPRS is. Before any patient is
selected, over 80 RPCs have been sent...

![MVDM Client Patient Select -width70](/demo/images/common/management-client/p1postlogsmall.png)


Back at CPRS, select 'OK' and you will be brought to the (empty) patient chart

![CPRS Patient Chart -width70](/demo/images/common/cprs/patient-chart.png)

and the **nodeVISTA Manager** shows the extra RPCs invoked - the total is now at 133...

![MVDM Client P2 Patient Chart -width70](/demo/images/common/management-client/p2patient-chart-no-data.png)

and the **MVDM Events** tab shows MVDM model events for emulated RPCs...

![MVDM Client P2 MVDM Events -width70](/demo/images/common/management-client/p2mvdmevents.png)

[ Back to top ↑](#top)



<br><br><br><br>
# Domain Demo HOW TOs

* [Allergies](Allergies)
* [Problems](Problems)
* [Vitals](Vitals)
* [Patient](Patient_1)


[ Back to top ↑](#top)

