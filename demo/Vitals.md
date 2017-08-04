---
layout: default
title: nodeVISTA Demo Vitals
---

# Vitals

See the [nodeVISTA Demo](http://vistadataproject.info/demo/) posting to setup the nodeVISTA management client and CPRS.

A discussion on nodeVISTA emulation statistics can be found below in the [Emulation Statistics](#emulation-statistics) section below.

## Demo Procedures

### Create a Vital

* From the CPRS patient chart, click on visit box, you will then be prompted with the visit context dialog. Choose Alexander,Robert as the provider and clinicD as the location and click ok.

![](images/common/cprs/visit-select.png)

*  Then click on one of the entries in the vitals pane. This will bring up the vitals dialog. If no vital is present, click on 'No data found'.

![](images/vitals/cprs/vitals-dialog-empty.JPG)

* Then click on the 'Enter Vitals' button at the top right-hand side of the dialog. This will bring up the vitals entry dialog.

 After clicking on 'Exp. View', also on the top right-hand side of the top menu bar, a side menu appears. There, select 'System' Folder > 'DEMO.NODEVISTA' > Daily Vitals. At this point, you can enter values for blood pressure, temperature, and height.

![](images/vitals/cprs/vitals-create.JPG)

* You may also want to enter qualifiers, like cuff size and position for blood pressure.

  Click on save and exit when you are done. You may be prompted with a dialog that says the vitals data differs by 10 percent, just click ok.

![](images/vitals/cprs/vitals-create-with-qualifiers.JPG)

* The main vitals dialog now displays the entered data.

![](images/vitals/cprs/vitals-dialog.JPG)

* Navigate to the nodeVISTA client and open the RPC Events tab. Notice the three **GMV ADD VM** RPC Event line items. Each RPC calls has its own transaction ID associated with the call.

![](images/vitals/management-client/vitals-create.jpg)

* Clicking on one of the RPC Events will bring up a details modal. Observe the RPC request parameters. The response pane is empty per the RPC spec.

![](images/vitals/management-client/vitals-create-modal.jpg)

* Navigate to the MVDM Events tab. Observe the three MVDM create events that are associated, by transaction ID, with the **GMV ADD VM** RPC Events.

![](images/vitals/management-client/vitals-create-mvdm.jpg)

* Clicking on one of the MVDM create events will bring up a details modal.

![](images/vitals/management-client/vitals-create-mvdm-modal.jpg)

### Mark as Entered in Error

* In CPRS, bring up the vitals dialog and click the 'Entered in Error' button in the top right-hand side of the vitals dialog.

![](images/vitals/cprs/vitals-dialog.JPG)

* This will bring up the 'Entered in Error' dialog. Select the height vital. The reason section will now be enabled. Select the 'Incorrect Reading' radio button then click the 'Mark as Entered in Error' button.

![](images/vitals/cprs/vitals-eie.JPG)

* Go over to the nodeVISTA client. Under RPC Events, observe the **GMV MARK ERROR** RPC Event line item.

![](images/vitals/management-client/vitals-eie.jpg)

* Clicking on the RPC event line item will bring up the details modal.

![](images/vitals/management-client/vitals-eie-modal.jpg)

* Click on the MVDM Events. Observe the corresponding MVDM remove event, note that the transaction ID is the same as the corresponding RPC Event.

![](images/vitals/management-client/vitals-eie-mvdm.jpg)

* Clicking on the MVDM remove event line item will bring up the details modal.

![](images/vitals/management-client/vitals-eie-mvdm-modal.jpg)

## Emulation Statistics

Upon successful completion of the Vitals demo trail, the nodeVISTA system will have processed close to 240 individual RPCs from CPRS, using a combination of RPC emulations and pass-through native RPC implementations.The table below contains a breakdown of nodeVISTA's RPC emulation capabilities as a series of percentages against native and overall RPC processing as of v1.3 (8/2/2017):

All RPCs | Unique RPCs
--- | ---
**Total RPCs:** **240**<br/><br/>`Total RPCs By Category`{:.title}<br/>&nbsp;&nbsp;**Server**: **1** _(0.42%)_<br/>&nbsp;&nbsp;**Native**: **47** _(19.58%)_<br/>&nbsp;&nbsp;**Emulated**: **192** _(80.00%)_<br/><br/>`Total RPCs By Sub-Category`{:.title}<br/>&nbsp;&nbsp;**UNKNOWN:** **2**<br/>&nbsp;&nbsp;&nbsp;&nbsp;**Server**: **1** _(50.00%)_<br/>&nbsp;&nbsp;&nbsp;&nbsp;**Native**: **1** _(50.00%)_<br/><br/>&nbsp;&nbsp;**AUTHENTICATION:** **11**<br/>&nbsp;&nbsp;&nbsp;&nbsp;**Native**: **10** _(90.91%)_<br/>&nbsp;&nbsp;&nbsp;&nbsp;**Emulated**: **1** _(9.09%)_<br/><br/>&nbsp;&nbsp;**NON CLINICAL:** **171**<br/>&nbsp;&nbsp;&nbsp;&nbsp;**Emulated**: **166** _(97.08%)_<br/>&nbsp;&nbsp;&nbsp;&nbsp;**Native**: **5** _(2.92%)_<br/><br/>&nbsp;&nbsp;**OUT OF SCOPE:** **5**<br/>&nbsp;&nbsp;&nbsp;&nbsp;**Emulated**: **5** _(100.00%)_<br/><br/>&nbsp;&nbsp;**CLINICAL:** **51**<br/>&nbsp;&nbsp;&nbsp;&nbsp;**Native**: **31** _(60.78%)_<br/>&nbsp;&nbsp;&nbsp;&nbsp;**Emulated**: **20** _(39.22%)_<br/> | **Total Unique RPCs:** **93**<br/><br/>`Total Unique RPCs By Category`{:.title}<br/>&nbsp;&nbsp;**Server**: **1** _(1.08%)_<br/>&nbsp;&nbsp;**Native**: **28** _(30.11%)_<br/>&nbsp;&nbsp;**Emulated**: **64** _(68.82%)_<br/><br/>`Total Unique RPCs By Sub-Category`{:.title}<br/>&nbsp;&nbsp;**UNKNOWN:** **2**<br/>&nbsp;&nbsp;&nbsp;&nbsp;**Server**: **1** _(50.00%)_<br/>&nbsp;&nbsp;&nbsp;&nbsp;**Native**: **1** _(50.00%)_<br/><br/>&nbsp;&nbsp;**AUTHENTICATION:** **5**<br/>&nbsp;&nbsp;&nbsp;&nbsp;**Native**: **4** _(80.00%)_<br/>&nbsp;&nbsp;&nbsp;&nbsp;**Emulated**: **1** _(20.00%)_<br/><br/>&nbsp;&nbsp;**NON CLINICAL:** **49**<br/>&nbsp;&nbsp;&nbsp;&nbsp;**Emulated**: **45** _(91.84%)_<br/>&nbsp;&nbsp;&nbsp;&nbsp;**Native**: **4** _(8.16%)_<br/><br/>&nbsp;&nbsp;**OUT OF SCOPE:** **5**<br/>&nbsp;&nbsp;&nbsp;&nbsp;**Emulated**: **5** _(100.00%)_<br/><br/>&nbsp;&nbsp;**CLINICAL:** **32**<br/>&nbsp;&nbsp;&nbsp;&nbsp;**Native**: **19** _(59.38%)_<br/>&nbsp;&nbsp;&nbsp;&nbsp;**Emulated**: **13** _(40.63%)_<br/>
