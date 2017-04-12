---
layout: default
title: nodeVISTA(MVDM) Demo Problems
---

See the [nodeVISTA Demo Introduction](http://vistadataproject.info/demo/) posting to setup the nodeVISTA management client and CPRS. 

## Create a Problem

* From the nodeVISTA CPRS patient chart, select the 'Problems' tab and click 'New Problem'

![](images/problems/cprs/problem-dialog.JPG)

* You will then be prompted with the visit context dialog. Choose Alexander,Robert as the provider and clinicD as the location and click ok.

![](images/problems/cprs/cprs-visit-select.JPG)

* In the problem search dialog, search for "hypertension" and select OK.

![](images/problems/cprs/problem-search.JPG)

* In the problem create dialog, add a comment and set the immediacy value to acute, then click ok.

![](images/problems/cprs/problem-create.JPEG)

* In the nodeVista client under the RPC Events tab, notice the **ORQQPL ADD SAVE** RPC nodeVISTA emulated line item.

![](images/problems/management-client/problem-create-rpc.jpeg)

* If you click on the **ORQQPL ADD SAVE** line item, observe the modal which includes the RPC request parameters and RPC Server response value.

![](images/problems/management-client/problem-create-details.jpeg)

* Next, still at the nodeVISTA client, navigate to the MVDM Events tab. Notice the nodeVISTA create event line item for problems. This event was generated when nodeVISTA created the hypertension problem. 

Also, take a look at the create event's transaction ID. That transaction ID matches the same transaction ID for the RPC Event **ORQQPL ADD SAVE** line item: **a559bda8-5892-4272-815f-32947fd45ce0** (yours will be different).

![](images/problems/management-client/problem-create-mvdm.jpg)

* Then click on the MVDM create event line item and bring up the details modal. Observe the nodeVISTA create response. This is the hypertension MVDM problem instance as JSON. 

![](images/problems/management-client/problem-create-details-mvdm.jpeg)

## Edit a Problem

* From the problem dialog, right click on the problem you wish to edit. This will bring up the problem context menu. Click on 'Change...'

![](images/problems/cprs/problem-context-menu.JPG)

* The problem edit dialog will come up. Change the onset date and add an additional comment.

![](images/problems/cprs/problem-edit.JPG)

* Look at the nodeVISTA Client RPC Events tab. Notice the **ORQQPL EDIT SAVE** line item. It has a transaction ID of **7cfcc8a5-3844-4d71-b4d4-a89e46b1cb58** (yours will be different).

![](images/problems/management-client/problem-edit-rpc.jpeg)

* Then look at the nodeVISTA client MVDM Events menu tab. See that there are three MVDM events with same transaction ID **7cfcc8a5-3844-4d71-b4d4-a89e46b1cb58**. 

  These three MVDM events were all part of the same nodeVISTA problem update transaction that just took place: Problem UPDATE, Audit CREATE, and Problem DESCRIBE. 

  Click on the problem update and audit create MVDM event line items. 
 
   ![](images/problems/management-client/problem-edit-mvdm.jpeg)

   * The MVDM update event which provides details on the actual problem update made to nodeVistA.

   ![](images/problems/management-client/problem-edit-details-mvdm.jpeg)

   * The create event is associated with a problem audit entry that was created after the problem was updated in nodeVistA.

   ![](images/problems/management-client/problem-edit-audit-mvdm.jpeg)

## Remove a problem

* From the problem dialog, right click on the problem you wish to edit. 

  This will bring up the problem context menu. Click on 'Remove...'. 

  From the remove dialog, and click on 'Remove'.

![](images/problems/cprs/problem-remove.JPG)

* Back at the nodeVISTA client, under the RPC Events tab, notice the **QRQQPL DELETE** line item. 

![](images/problems/management-client/problem-remove.jpg)

* Under the MVDM Events tab, see the two corresponding MVDM events: REMOVE & CREATE. Like problem edit, the create event is associated with the creation of a problem audit entry.

![](images/problems/management-client/problem-remove-mvdm.jpeg)

## Restore a problem

* From the problem dialog screen, select "Removed" on the left-hand side of the screen. You will then see the Hypertension problem that was previously removed listed. Right click on the problem and bring up the context menu. Select "Restore".

![](images/problems/cprs/problem-restore.JPG)

* At the nodeVISTA client, under the RPC Events tab, see the **QRQQPL REPLACE** line item. 

![](images/problems/management-client/problem-restore-rpc.jpeg)

* Then on the MVDM Events tab, see the two corresponding MVDM Events: UNREMOVED & CREATE. Again the create event is associated with the creation of a problem audit entry.

![](images/problems/management-client/problem-restore-mvdm.jpeg)

## Inactivate a problem

* On problem dialog screen, select "Active" on the left-hand side of the screen. You will then see the Hypertension problem that was restored. Right click on the problem and bring up the context menu. Select "Inactivate".

![](images/problems/cprs/problem-inactivate.JPG)

* At the nodeVISTA client, under the RPC Events tab, see the **QRQQPL UPDATE** line item. 

![](images/problems/management-client/problem-inactivate-rpc2.jpeg)

* Then on the MVDM Events tab, see the four corresponding nodeVISTA Events: 1 UPDATE & 2 CREATES & 1 DESCRIBE. The two create events are associated with the creation of a problem audit entries (change of status and resolved date).

![](images/problems/management-client/problem-inactivate-mvdm2.jpeg)

  The audits are visible on the problem details output

   ![](images/problems/management-client/problem-inactivate-modal.jpg)
