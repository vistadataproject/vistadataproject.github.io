---
layout: default
title: nodeVISTA Demo Patient Selection
---

# Patient Selection

See the [nodeVISTA Demo Introduction](http://vistadataproject.info/demo/) posting for instructions on logging into the nodeVISTA management client via CPRS.

A discussion on nodeVISTA emulation statistics can be found below in the [Emulation Statistics](#emulation-statistics) section below.

## Demo Procedures

This section will highlight the patient related clinical RPCs that are emulated by nodeVISTA.

* Having logged into CPRS, the patient search screen will appear.

    Take a look at the two patient RPC clinical events in the nodeVISTA Manager that have fired.

    ![](images/patient/1.jpg)

    The first patient RPC to fire is ORWPT TOP. This RPC determines if there was a patient that the user previously had searched for.
    The second RPC, ORWPT LIST ALL performs the patient search.

    If this is your first time running CPRS, ORWPT TOP will not return any patient data.

    ![](images/patient/2.jpg)

    Otherwise you'll see the previously selected patient.

    ![](images/patient/12.jpg)

    The ORWPT LIST ALL return data includes the listed patients.

    ![](images/patient/4.jpg)

    Those two patient RPC calls invoked two MVDM Events. From the nodeVISTA Manager, select MVDM events and observe the two events that were fired.

    ![](images/patient/3.jpg)

* Back at CPRS, search for or clikc on CARTER,DAVID but don't select him. Click back to RPC Events in the nodeVISTA Manager.

    Observe the three additional RPCs that were invoked by CPRS.

     ![](images/patient/5.jpg)

     The ORPRF HASFLG RPC call will determine whether this patient has any special warning flags and will show them before the user selects the patient.

     The OR GET COMBAT VET call returns if a veteran is char marked as a combat veteran.

     ![](images/patient/6.jpg)

* In CPRS, go ahead and select CARTER,DAVID and go into the patient chart. Several more patient related RPCs will be invoked.

     ![](images/patient/7.jpg)

     The ORWPT SELECT call selects a patient, by setting a special VistA global but also returns some basic demographic data.

     ![](images/patient/8.jpg)

## Emulation Statistics

Upon successful completion of the Patient Selection demo trail, the nodeVISTA system will have processed close to 117 individual RPCs from CPRS, using a combination of RPC emulations and pass-through native RPC implementations.The table below contains a breakdown of nodeVISTA's RPC emulation capabilities as a series of percentages against native and overall RPC processing as of v1.3 (8/2/2017):

All RPCs | Unique RPCs
--- | ---
**Total RPCs:** **117**<br/><br/>`Total RPCs By Category`{:.title}<br/>&nbsp;&nbsp;**Server**: **1** _(0.85%)_<br/>&nbsp;&nbsp;**Native**: **28** _(23.93%)_<br/>&nbsp;&nbsp;**Emulated**: **88** _(75.21%)_<br/><br/>`Total RPCs By Sub-Category`{:.title}<br/>&nbsp;&nbsp;**UNKNOWN:** **2**<br/>&nbsp;&nbsp;&nbsp;&nbsp;**Server**: **1** _(50.00%)_<br/>&nbsp;&nbsp;&nbsp;&nbsp;**Native**: **1** _(50.00%)_<br/><br/>&nbsp;&nbsp;**AUTHENTICATION:** **9**<br/>&nbsp;&nbsp;&nbsp;&nbsp;**Native**: **8** _(88.89%)_<br/>&nbsp;&nbsp;&nbsp;&nbsp;**Emulated**: **1** _(11.11%)_<br/><br/>&nbsp;&nbsp;**NON CLINICAL:** **73**<br/>&nbsp;&nbsp;&nbsp;&nbsp;**Emulated**: **69** _(94.52%)_<br/>&nbsp;&nbsp;&nbsp;&nbsp;**Native**: **4** _(5.48%)_<br/><br/>&nbsp;&nbsp;**OUT OF SCOPE:** **5**<br/>&nbsp;&nbsp;&nbsp;&nbsp;**Emulated**: **5** _(100.00%)_<br/><br/>&nbsp;&nbsp;**CLINICAL:** **28**<br/>&nbsp;&nbsp;&nbsp;&nbsp;**Native**: **15** _(53.57%)_<br/>&nbsp;&nbsp;&nbsp;&nbsp;**Emulated**: **13** _(46.43%)_<br/> | **Total Unique RPCs:** **73**<br/><br/>`Total Unique RPCs By Category`{:.title}<br/>&nbsp;&nbsp;**Server**: **1** _(1.37%)_<br/>&nbsp;&nbsp;**Native**: **23** _(31.51%)_<br/>&nbsp;&nbsp;**Emulated**: **49** _(67.12%)_<br/><br/>`Total Unique RPCs By Sub-Category`{:.title}<br/>&nbsp;&nbsp;**UNKNOWN:** **2**<br/>&nbsp;&nbsp;&nbsp;&nbsp;**Server**: **1** _(50.00%)_<br/>&nbsp;&nbsp;&nbsp;&nbsp;**Native**: **1** _(50.00%)_<br/><br/>&nbsp;&nbsp;**AUTHENTICATION:** **5**<br/>&nbsp;&nbsp;&nbsp;&nbsp;**Native**: **4** _(80.00%)_<br/>&nbsp;&nbsp;&nbsp;&nbsp;**Emulated**: **1** _(20.00%)_<br/><br/>&nbsp;&nbsp;**NON CLINICAL:** **35**<br/>&nbsp;&nbsp;&nbsp;&nbsp;**Emulated**: **32** _(91.43%)_<br/>&nbsp;&nbsp;&nbsp;&nbsp;**Native**: **3** _(8.57%)_<br/><br/>&nbsp;&nbsp;**OUT OF SCOPE:** **5**<br/>&nbsp;&nbsp;&nbsp;&nbsp;**Emulated**: **5** _(100.00%)_<br/><br/>&nbsp;&nbsp;**CLINICAL:** **26**<br/>&nbsp;&nbsp;&nbsp;&nbsp;**Native**: **15** _(57.69%)_<br/>&nbsp;&nbsp;&nbsp;&nbsp;**Emulated**: **11** _(42.31%)_<br/>
