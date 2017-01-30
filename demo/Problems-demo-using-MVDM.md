
See the [MVDM Demo](https://github.com/vistadataproject/MVDM/wiki) posting to setup the MVDM management client and CPRS. 

## Create a Problem

* From the CPRS patient chart, select the 'Problems' tab and click 'New Problem'

<img src="https://github.com/vistadataproject/MVDM/blob/master/images/problems/cprs/problem-dialog.JPG" width=600px/>

* You will then be prompted with the visit context dialog. Choose Alexander,Robert as the provider and clinicD as the location and click ok.

<img src="https://github.com/vistadataproject/MVDM/blob/master/images/problems/cprs/cprs-visit-select.JPG" width=600px/>

* In the problem search dialog, search for "hypertension" and select OK.

<img src="https://github.com/vistadataproject/MVDM/blob/master/images/problems/cprs/problem-search.JPG" width=600px/>

* In the problem create dialog, add a comment and set the immediacy value to acute, then click ok.

<img src="https://github.com/vistadataproject/MVDM/blob/master/images/problems/cprs/problem-create.JPEG" width=600px/>

* In the MVDM client under the RPC Events tab, notice the **ORQQPL ADD SAVE** RPC MVDM locked line item.

![](https://github.com/vistadataproject/MVDM/blob/master/images/problems/management-client/problem-create-rpc.jpeg)

* If you click on the **ORQQPL ADD SAVE** line item, observe the modal which includes the RPC request parameters and RPC Server response value.

<img src="https://github.com/vistadataproject/MVDM/blob/master/images/problems/management-client/problem-create-details.jpeg" width=800px/>

* Next, still at the MVDM client, navigate to the MVDM Events tab. Notice the MVDM create event line item for problems. This event was generated when MVDM created the hypertension problem. 

Also, take a look at the create event's transaction ID. That transaction ID matches the same transaction ID for the RPC Event **ORQQPL ADD SAVE** line item: **a559bda8-5892-4272-815f-32947fd45ce0** (yours will be different).

![](https://github.com/vistadataproject/MVDM/blob/master/images/problems/management-client/problem-create-mvdm.jpg)

* Then click on the MVDM create event line item and bring up the details modal. Observe the MVDM create response. This is the hypertension MVDM problem instance as JSON. 

<img src="https://github.com/vistadataproject/MVDM/blob/master/images/problems/management-client/problem-create-details-mvdm.jpeg" width=800px/>

## Edit a Problem

* From the problem dialog, right click on the problem you wish to edit. This will bring up the problem context menu. Click on 'Change...'

<img src="https://github.com/vistadataproject/MVDM/blob/master/images/problems/cprs/problem-context-menu.JPG" width=600px/>

* The problem edit dialog will come up. Change the onset date and add an additional comment.

<img src="https://github.com/vistadataproject/MVDM/blob/master/images/problems/cprs/problem-edit.JPG" width=600px/>

* Look at the MVDM Client RPC Events tab. Notice the **ORQQPL EDIT SAVE** line item. It has a transaction ID of **73efbe71-cc3f-412d-ab0c-a556437fbe70** (yours will be different).

![](https://github.com/vistadataproject/MVDM/blob/master/images/problems/management-client/problem-edit-rpc.jpeg)

* Then look at the MVDM client MVDM Events menu tab. See that there are three MVDM events with same transaction ID **73efbe71-cc3f-412d-ab0c-a556437fbe70**. 

  These three MVDM events were all part of the same MVDM problem update transaction that just took place: Problem UPDATE, Audit CREATE, and Problem DESCRIBE. 

  Click on the problem update and audit create MVDM event line items. 
 
   ![](https://github.com/vistadataproject/MVDM/blob/master/images/problems/management-client/problem-edit-mvdm.jpeg)

   * The MVDM update event which provides details on the actual problem update made to VistA.

   <img src="https://github.com/vistadataproject/MVDM/blob/master/images/problems/management-client/problem-edit-details-mvdm.jpeg" width=800px/>

   * The create event is associated with a problem audit entry that was created after the problem was updated in VistA.

   <img src="https://github.com/vistadataproject/MVDM/blob/master/images/problems/management-client/problem-edit-audit-mvdm.jpeg" width=800px/>

## Remove a problem

* From the problem dialog, right click on the problem you wish to edit. 

  This will bring up the problem context menu. Click on 'Remove...'. 

  From the remove dialog, and click on 'Remove'.

<img src="https://github.com/vistadataproject/MVDM/blob/master/images/problems/cprs/problem-remove.JPG" width=600px/>

* Back at the MVDM client, under the RPC Events tab, notice the **QRQQPL DELETE** line item. 

![](https://github.com/vistadataproject/MVDM/blob/master/images/problems/management-client/problem-remove.jpg)

* Under the MVDM Events tab, see the two corresponding MVDM events: REMOVE & CREATE. Like problem edit, the create event is associated with the creation of a problem audit entry.

![](https://github.com/vistadataproject/MVDM/blob/master/images/problems/management-client/problem-remove-mvdm.jpeg)

## Restore a problem

* From the problem dialog screen, select "Removed" on the left-hand side of the screen. You will then see the Hypertension problem that was previously removed listed. Right click on the problem and bring up the context menu. Select "Restore".

<img src="https://github.com/vistadataproject/MVDM/blob/master/images/problems/cprs/problem-restore.JPG" width=600px/>

* At the MVDM client, under the RPC Events tab, see the **QRQQPL REPLACE** line item. 

![](https://github.com/vistadataproject/MVDM/blob/master/images/problems/management-client/problem-restore-rpc.jpeg)

* Then on the MVDM Events tab, see the two corresponding MVDM Events: UNREMOVED & CREATE. Again the create event is associated with the creation of a problem audit entry.

![](https://github.com/vistadataproject/MVDM/blob/master/images/problems/management-client/problem-restore-mvdm.jpeg)

## Inactivate a problem

* On problem dialog screen, select "Active" on the left-hand side of the screen. You will then see the Hypertension problem that was restored. Right click on the problem and bring up the context menu. Select "Inactivate".

<img src="https://github.com/vistadataproject/MVDM/blob/master/images/problems/cprs/problem-inactivate.JPG" width=600px/>

* At the MVDM client, under the RPC Events tab, see the **QRQQPL UPDATE** line item. 

![](https://github.com/vistadataproject/MVDM/blob/master/images/problems/management-client/problem-inactivate-rpc2.jpg)

* Then on the MVDM Events tab, see the four corresponding MVDM Events: 1 UPDATE & 2 CREATES & 1 DESCRIBE. The two create events are associated with the creation of a problem audit entries (change of status and resolved date).

![](https://github.com/vistadataproject/MVDM/blob/master/images/problems/management-client/problem-inactivate-mvdm2.jpg)

  The audits are visible on the problem details output

   <img src="https://github.com/vistadataproject/MVDM/blob/master/images/problems/management-client/problem-inactivate-modal.jpg" width=800px/>