---
layout: default
title: VDM
---

#### [Developer Documentation](../index) &#187; [VDM](TableOfContents) &#187; Order-100<br/>
<a name="top"></a>
# Order (100)
This is the file of orders/requisitions made for any package through the Order Entry Option (OR).

**Global:** ^OR(100,

**Domain:** Non-Clinical

## Properties

Label/Field Name | Field # | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Order #**{::nomarkdown}<pre><code>  order_number</code></pre>{:/} | .01 | This is the internal order number of the file. | NUMERIC | REQUIRED | 
**Object Of Order**{::nomarkdown}<pre><code>  object_of_order</code></pre>{:/} | .02 | This is the individual object of the order.  Depending on the parent <br/>file entry, this would be the Patient, Control Point, etc. | POINTER | REQUIRED | [Patient-2](Patient-2)<br/>Referral_Patient-67
**Orderable Items**{::nomarkdown}<pre><code>  orderable_items</code></pre>{:/} | .1 | This multiple contains the items being ordered. | POINTER |  | [Orderable_Items-101_43](Orderable_Items-101_43)
**Order Actions**{::nomarkdown}<pre><code>  order_actions</code></pre>{:/} | .8 | These are the actions taken on this order, including the signature and<br/>verification required to release to the service. | OBJECT |  | [Order_Actions-100_008](#Order_Actions-100_008)
**Order Checks**{::nomarkdown}<pre><code>  order_checks</code></pre>{:/} | .9 | This is the list of order checks found for this order. | OBJECT |  | [Order_Checks-100_09](#Order_Checks-100_09)
**Current Agent/provider**{::nomarkdown}<pre><code>  current_agent_provider</code></pre>{:/} | 1 | This is the person who is responsible for the order. | POINTER |  | [New_Person-200](New_Person-200)
**Dialog**{::nomarkdown}<pre><code>  dialog</code></pre>{:/} | 2 | This is the dialog that created this order. | POINTER | REQUIRED | [Option-19](Option-19)<br/>[Protocol-101](Protocol-101)<br/>[Order_Dialog-101_41](Order_Dialog-101_41)
**Who Entered**{::nomarkdown}<pre><code>  who_entered</code></pre>{:/} | 3 | This is the USER who entered the information about the order. | POINTER |  | [New_Person-200](New_Person-200)
**When Entered**{::nomarkdown}<pre><code>  when_entered</code></pre>{:/} | 4 | This is the date/time of completion of the initiation of the order. | DATE-TIME |  | 
**Responses**{::nomarkdown}<pre><code>  responses</code></pre>{:/} | 4.5 | This contains the responses to an order dialog. | OBJECT |  | [Responses-100_045](#Responses-100_045)
**Status**{::nomarkdown}<pre><code>  status</code></pre>{:/} | 5 | This is the status of the order. | POINTER |  | [Order_Status-100_01](Order_Status-100_01)
**Order Diagnoses**{::nomarkdown}<pre><code>  order_diagnoses</code></pre>{:/} | 5.1 | These are the the diagnoses associated with this order. | OBJECT |  | [Order_Diagnoses-100_051](#Order_Diagnoses-100_051)
**Patient Location**{::nomarkdown}<pre><code>  patient_location</code></pre>{:/} | 6 | This is the hospital location from which the order originated. | POINTER |  | [Hospital_Location-44](Hospital_Location-44)
**Item Ordered**{::nomarkdown}<pre><code>  item_ordered</code></pre>{:/} | 7 | This is the variable pointer to the file and item ordered.  | POINTER |  | [Option-19](Option-19)<br/>[Laboratory_Test-60](Laboratory_Test-60)<br/>[Order_Dialog-101_41](Order_Dialog-101_41)
**Veiled**{::nomarkdown}<pre><code>  veiled</code></pre>{:/} | 8 | This field is set when creating an order to prevent the order from<br/>being displayed on the review screen until the order is complete and<br/>accepted. | ENUMERATION |  | {::nomarkdown}VEILED: <em><strong>1</strong></em><br/>UNVEILED: <em><strong>0</strong></em>{:/}
**Type**{::nomarkdown}<pre><code>  type-8_1</code></pre>{:/} | 8.1 | This field is used to determine the type of order that is being processed.<br/>Different things happen depending on the order type. | ENUMERATION |  | {::nomarkdown}BCMA: <em><strong>B</strong></em><br/>PACKAGE: <em><strong>P</strong></em><br/>EDIT: <em><strong>1</strong></em><br/>TRANSFER: <em><strong>X</strong></em><br/>DISCONTINUE: <em><strong>6</strong></em><br/>COPY: <em><strong>C</strong></em><br/>STANDARD: <em><strong>0</strong></em><br/>RENEW: <em><strong>2</strong></em><br/>HOLD: <em><strong>4</strong></em>{:/}
**Replaced Order**{::nomarkdown}<pre><code>  replaced_order</code></pre>{:/} | 9 | This is the order number of the order which was replaced by this order,<br/>either by editing or renewal. | POINTER |  | [Order-100](Order-100)
**Replacement Order**{::nomarkdown}<pre><code>  replacement_order</code></pre>{:/} | 9.1 | This is the order number of the order that replaces this one, either<br/>by edit or renewal. | POINTER |  | [Order-100](Order-100)
**Patient Class**{::nomarkdown}<pre><code>  patient_class</code></pre>{:/} | 10 | This is the patient's inpatient classification for this order; an inpatient<br/>may have some orders performed on an outpatient basis. | ENUMERATION |  | {::nomarkdown}INPATIENT: <em><strong>I</strong></em><br/>OUTPATIENT: <em><strong>O</strong></em>{:/}
**Treating Specialty**{::nomarkdown}<pre><code>  treating_specialty</code></pre>{:/} | 11 | This is the TREATING SPECIALTY associated with this order. | POINTER |  | [Facility_Treating_Specialty-45_7](Facility_Treating_Specialty-45_7)
**Package**{::nomarkdown}<pre><code>  package</code></pre>{:/} | 12 | This is the package creating the order. | POINTER | REQUIRED | [Package-9_4](Package-9_4)
**Cost**{::nomarkdown}<pre><code>  cost</code></pre>{:/} | 13 | This is the cost of filling this order. | NUMERIC |  | 
**Signature Required**{::nomarkdown}<pre><code>  signature_required</code></pre>{:/} | 14 | This is the OR key required to sign this order.  If set to 2, only users<br/>with the ORES key will be allowed to sign this order; if set to 1, users<br/>with either the ORELSE or ORES keys will be allowed to sign.  A 0 or ""<br/>indicates that no signature is required. | ENUMERATION |  | {::nomarkdown}NONE: <em><strong>0</strong></em><br/>ORELSE: <em><strong>1</strong></em><br/>ORES: <em><strong>2</strong></em>{:/}
**Event**{::nomarkdown}<pre><code>  event</code></pre>{:/} | 15 | This is the event that this order's release is/was delayed till. | POINTER |  | Oe_rr_Patient_Event-100_2
**Patient Appointment**{::nomarkdown}<pre><code>  patient_appointment</code></pre>{:/} | 16 | This is the appointment date/time for outpatients and is only entered <br/>when inpatient medications are ordered for them. | DATE-TIME |  | 
**Children**{::nomarkdown}<pre><code>  children</code></pre>{:/} | 20 | This field allows a single order or set of orders to be linked <br/>to a parent order. | POINTER |  | [Order-100](Order-100)
**Start Date**{::nomarkdown}<pre><code>  start_date</code></pre>{:/} | 21 | This is the start date/time of the order. | DATE-TIME |  | 
**Stop Date**{::nomarkdown}<pre><code>  stop_date</code></pre>{:/} | 22 | This is the stop date/time of the order. | DATE-TIME |  | 
**To**{::nomarkdown}<pre><code>  to</code></pre>{:/} | 23 | This is the service to which the order is referred.<br/>This is used to determine the display group in which the order appears. | POINTER | REQUIRED | [Display_Group-100_98](Display_Group-100_98)
**Current Action**{::nomarkdown}<pre><code>  current_action</code></pre>{:/} | 30 | This is the item number of the action in the Order Actions multiple that<br/>is currently being carried out on this order; it will be used to build<br/>the text for the Current Orders list. | NUMERIC |  | 
**Date Of Last Activity**{::nomarkdown}<pre><code>  date_of_last_activity</code></pre>{:/} | 31 | This is the date/time the order was last updated. | DATE-TIME |  | 
**Grace Days Before Purge**{::nomarkdown}<pre><code>  grace_days_before_purge</code></pre>{:/} | 32 | This is the number of days to hold an order from the<br/>date of last activity. The order in OE/RR may be <br/>purged after this date.<br/>The default is 30 days.  If a package needs the order<br/>retained for a period longer than 30 days, this can<br/>be specified when the order is created by setting the<br/>variable ORPURG to the appropriate number of days before<br/>calling FILE^ORX. | NUMERIC |  | 
**Package Reference**{::nomarkdown}<pre><code>  package_reference</code></pre>{:/} | 33 | This information allows the package to link the order in OR<br/>with its more detailed order information in the individual package.<br/>It is the package's responsibility to define and determine the<br/>structure of this information. | STRING |  | 
**Alert On Results**{::nomarkdown}<pre><code>  alert_on_results</code></pre>{:/} | 35 | This field contains the user who requested to be alerted when results<br/>for this order become available.  Only lab, radiology, and consult orders<br/>will generate results. | POINTER |  | [New_Person-200](New_Person-200)
**Parent**{::nomarkdown}<pre><code>  parent</code></pre>{:/} | 36 | This is the parent of an order that may have a parent/child relationship. | POINTER |  | [Order-100](Order-100)
**Lapsed Date/time**{::nomarkdown}<pre><code>  lapsed_date_time</code></pre>{:/} | 39 | This field will specify when the order was Lapsed.  Lapsing takes place <br/>in routine ORTSKLPS and is part of the ORMTIME scheduled option. | DATE-TIME |  | 
**Service Connected Condition**{::nomarkdown}<pre><code>  service_connected_condition</code></pre>{:/} | 51 | When signing orders, the provider may be asked if this order is for<br/>treatment of  a service-connected condition; his/her response to this<br/>question will be stored in this field.  Currently this question is only<br/>asked for Outpatient Medications, and the response is passed to that<br/>package with the new order. | BOOLEAN |  | {::nomarkdown}false: <em><strong>0</strong></em><br/>true: <em><strong>1</strong></em>{:/}
**Mst**{::nomarkdown}<pre><code>  mst</code></pre>{:/} | 52 | If a patient has been identified as having been treated for Military<br/>Sexual Trauma (MST), then the provider may be asked when signing the<br/>order if it is for treatment of a condition related to MST and his/her<br/>response to this question will be stored in this field.  Currently this<br/>question is only asked for Outpatient Medications, and the response is<br/>passed to that package with the new order. | BOOLEAN |  | {::nomarkdown}false: <em><strong>0</strong></em><br/>true: <em><strong>1</strong></em>{:/}
**Agent Orange Exposure**{::nomarkdown}<pre><code>  agent_orange_exposure</code></pre>{:/} | 53 | If a patient has been identified as having been exposed to Agent Orange<br/>(AO) during service in Vietnam, then the provider may be asked when<br/>signing the order if it is for treatment of a condition related to AO<br/>and his/her response to this question will be stored in this field.<br/>Currently this question is only asked for Outpatient Medications, and<br/>the response is passed to that package with the new order. | BOOLEAN |  | {::nomarkdown}false: <em><strong>0</strong></em><br/>true: <em><strong>1</strong></em>{:/}
**Ionizing Radiation Exposure**{::nomarkdown}<pre><code>  ionizing_radiation_exposure</code></pre>{:/} | 54 | If a patient has been identified as having been treated for exposure to<br/>ionizing radiation (IR) during military service, then the provider may<br/>be asked when signing the order if it is for treatment of a condition<br/>related to IR and his/her response to this question will be stored in<br/>this field.  Currently this question is only asked for Outpatient<br/>Medications, and the response is passed to that package with the new<br/>order. | BOOLEAN |  | {::nomarkdown}false: <em><strong>0</strong></em><br/>true: <em><strong>1</strong></em>{:/}
**Southwest Asia Conditions**{::nomarkdown}<pre><code>  southwest_asia_conditions</code></pre>{:/} | 55 | If a patient has been identified as having been treated for exposure to<br/>environmental contaminants (EC) during the Persian Gulf War, then the<br/>provider may be asked when signing the order if it is for treatment of a<br/>condition related to EC and his/her response to this question will be<br/>stored in this field.  Currently this question is only asked for<br/>Outpatient Medications, and the response is passed to that package with<br/>the new order. | BOOLEAN |  | {::nomarkdown}false: <em><strong>0</strong></em><br/>true: <em><strong>1</strong></em>{:/}
**Head And/or Neck Cancer**{::nomarkdown}<pre><code>  head_and_or_neck_cancer</code></pre>{:/} | 56 | If a patient has been identified as having been treated for head or neck<br/>cancer due to nose or throat radium treatments while in the military,<br/>then the provider may be asked when signing the order if it is for<br/>treatment of head or neck cancer and his/her response to this question<br/>will be stored in this field.  Currently this question is only asked for<br/>Outpatient Medications, and the response is passed to that package with<br/>the new order. | BOOLEAN |  | {::nomarkdown}false: <em><strong>0</strong></em><br/>true: <em><strong>1</strong></em>{:/}
**Combat Veteran**{::nomarkdown}<pre><code>  combat_veteran</code></pre>{:/} | 57 | When signing orders, the provider may be asked if this order is for<br/>treatment of a combat-related condition; his/her response to this<br/>question will be stored in this field.  Currently this question is only<br/>asked for Outpatient Medications, and the response is passed to that<br/>package with the new order. | BOOLEAN |  | {::nomarkdown}false: <em><strong>0</strong></em><br/>true: <em><strong>1</strong></em>{:/}
**Shipboard Hazard**{::nomarkdown}<pre><code>  shipboard_hazard</code></pre>{:/} | 58 |  | BOOLEAN |  | {::nomarkdown}false: <em><strong>0</strong></em><br/>true: <em><strong>1</strong></em>{:/}
**Nature Of Dc**{::nomarkdown}<pre><code>  nature_of_dc</code></pre>{:/} | 61 | Orders that are DC'ed because they have been duplicated do not create a<br/>DC order, nor is a chart copy or electronic signature notification<br/>generated.  If this is a CHANGE IN THERAPY, then a DC order is generated<br/>that must be signed, and a chart copy of the new DC request is printed. | POINTER |  | [Nature_Of_Order-100_02](Nature_Of_Order-100_02)
**Dc&#x27;ed By**{::nomarkdown}<pre><code>  dced_by</code></pre>{:/} | 62 | This is the person who DC'ed this order. | POINTER |  | [New_Person-200](New_Person-200)
**Dc Date/time**{::nomarkdown}<pre><code>  dc_date_time</code></pre>{:/} | 63 | This is the date/time the order was DC'ed. | DATE-TIME |  | 
**Dc Reason**{::nomarkdown}<pre><code>  dc_reason</code></pre>{:/} | 64 | This is the reason this order was DC'ed, i.e. "Patient discharged." | POINTER |  | [Order_Reason-100_03](Order_Reason-100_03)
**Dc Reason Text**{::nomarkdown}<pre><code>  dc_reason_text</code></pre>{:/} | 65 | This is the text of the DC reason. | STRING |  | 
**Completed**{::nomarkdown}<pre><code>  completed</code></pre>{:/} | 66 | This is the date/time the order was marked as complete. | DATE-TIME |  | 
**Completed By**{::nomarkdown}<pre><code>  completed_by</code></pre>{:/} | 67 | This is the person who marked this order as complete. | POINTER |  | [New_Person-200](New_Person-200)
**Dc Event**{::nomarkdown}<pre><code>  dc_event</code></pre>{:/} | 68 | This is the event that automatically discontinued this order. | POINTER |  | Oe_rr_Patient_Event-100_2
**Dc Original Order**{::nomarkdown}<pre><code>  dc_original_order</code></pre>{:/} | 69 | This field is only accessed by CPRS. This field is set to True if both <br/>the original order and the pending renewal order are discontinued. This <br/>field is set to False if only the pending renewal order is discontinued. <br/>If only the pending renewal order is discontinued, CPRS assigns the <br/>original order's status to the status it received from the pharmacy <br/>package. | ENUMERATION |  | {::nomarkdown}FALSE: <em><strong>0</strong></em><br/>TRUE: <em><strong>1</strong></em>{:/}
**Results Date/time**{::nomarkdown}<pre><code>  results_date_time</code></pre>{:/} | 71 | This field contains the date/time that results became available for this<br/>order; only Lab, Radiology, and Consult orders have results. | DATE-TIME |  | 
**Abnormal Results**{::nomarkdown}<pre><code>  abnormal_results</code></pre>{:/} | 72 | This field indicates whether the results for this order were abnormal, or outside of normal ranges. | BOOLEAN |  | {::nomarkdown}true: <em><strong>1</strong></em>{:/}
**Findings**{::nomarkdown}<pre><code>  findings</code></pre>{:/} | 73 | This field contains the text of any significant findings for the results<br/>of this order. | STRING |  | 
**Ba Service Connected Condition**{::nomarkdown}<pre><code>  ba_service_connected_condition</code></pre>{:/} | 90 | When signing orders, the provider may be asked if this order is for treatment of a service-connected condition; his/her response to this question will be stored in this field. | BOOLEAN |  | {::nomarkdown}false: <em><strong>0</strong></em><br/>true: <em><strong>1</strong></em>{:/}
**Ba Military Sexual Trauma**{::nomarkdown}<pre><code>  ba_military_sexual_trauma</code></pre>{:/} | 91 |  | BOOLEAN |  | {::nomarkdown}false: <em><strong>0</strong></em><br/>true: <em><strong>1</strong></em>{:/}
**Ba Agent Orange Exposure**{::nomarkdown}<pre><code>  ba_agent_orange_exposure</code></pre>{:/} | 92 |  | BOOLEAN |  | {::nomarkdown}false: <em><strong>0</strong></em><br/>true: <em><strong>1</strong></em>{:/}
**Ba Ionizing Radiation Exposure**{::nomarkdown}<pre><code>  ba_ionizing_radiation_exposure</code></pre>{:/} | 93 |  | BOOLEAN |  | {::nomarkdown}false: <em><strong>0</strong></em><br/>true: <em><strong>1</strong></em>{:/}
**Ba Southwest Asia Conditions**{::nomarkdown}<pre><code>  ba_southwest_asia_conditions</code></pre>{:/} | 94 |  | BOOLEAN |  | {::nomarkdown}false: <em><strong>0</strong></em><br/>true: <em><strong>1</strong></em>{:/}
**Ba Head And/or Neck Cancer**{::nomarkdown}<pre><code>  ba_head_and_or_neck_cancer</code></pre>{:/} | 95 |  | BOOLEAN |  | {::nomarkdown}false: <em><strong>0</strong></em><br/>true: <em><strong>1</strong></em>{:/}
**Ba Combat Veteran**{::nomarkdown}<pre><code>  ba_combat_veteran</code></pre>{:/} | 96 |  | BOOLEAN |  | {::nomarkdown}false: <em><strong>0</strong></em><br/>true: <em><strong>1</strong></em>{:/}
**Pfss Account Reference**{::nomarkdown}<pre><code>  pfss_account_reference</code></pre>{:/} | 97 | The PFSS Account Reference field stores the PFSS Account Reference<br/>associated with the order. The field is a pointer to the PFSS Account<br/>Reference file (#375). | POINTER |  | Pfss_Account-375
**Ba Shipboard Hazard**{::nomarkdown}<pre><code>  ba_shipboard_hazard</code></pre>{:/} | 98 |  | BOOLEAN |  | {::nomarkdown}false: <em><strong>0</strong></em><br/>true: <em><strong>1</strong></em>{:/}

[&uarr; Return to top](#top)<br/>

## Sub-Files
### <a name="Order_Actions-100_008"></a>Order Actions (100.008)

<dl>
<dt>ID</dt><dd>Order_Actions-100_008</dd></dl>

#### Properties

Label/Field Name | Field # | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Date/time Ordered**{::nomarkdown}<pre><code>  date_time_ordered</code></pre>{:/} | .01 | This is the date/time this action was ordered. | DATE-TIME | INDEXED<br/>REQUIRED | 
**Order Text**{::nomarkdown}<pre><code>  order_text</code></pre>{:/} | .1 | This is the text of the order. | STRING |  | 
**External Text**{::nomarkdown}<pre><code>  external_text</code></pre>{:/} | .2 | This is the text of the order stored in external format.<br/>DO NOT EDIT THIS FIELD!  This field is used to create a Digital Signature.<br/>Editing this field will render the Digital Signature invalid and prevent<br/>the order from being processed. | STRING |  | 
**Reason For Action/reject**{::nomarkdown}<pre><code>  reason_for_action_reject</code></pre>{:/} | 1 | This is the reason returned by the package why this action is being<br/>taken or rejected. | STRING |  | 
**Action**{::nomarkdown}<pre><code>  action</code></pre>{:/} | 2 | This is the action being ordered. | ENUMERATION | INDEXED<br/>REQUIRED | {::nomarkdown}NEW: <em><strong>NW</strong></em><br/>HOLD: <em><strong>HD</strong></em><br/>DISCONTINUE: <em><strong>DC</strong></em><br/>CHANGE: <em><strong>XX</strong></em><br/>RELEASE HOLD: <em><strong>RL</strong></em>{:/}
**Provider**{::nomarkdown}<pre><code>  provider</code></pre>{:/} | 3 | This is the requestor of this order. | POINTER |  | [New_Person-200](New_Person-200)
**Signature Status**{::nomarkdown}<pre><code>  signature_status</code></pre>{:/} | 4 | This is the signature status of the order.  Entries with a null value<br/>in this field are assumed to have been entered through the back door<br/>via specific package order entry options and do not require signature<br/>unless so specified by the package. | ENUMERATION |  | {::nomarkdown}NOT REQUIRED due to cancel/lapse: <em><strong>5</strong></em><br/>ON PARENT order: <em><strong>8</strong></em><br/>DIGITALLY SIGNED: <em><strong>7</strong></em><br/>NOT SIGNED: <em><strong>2</strong></em><br/>ON CHART w/written orders: <em><strong>0</strong></em><br/>NOT REQUIRED: <em><strong>3</strong></em><br/>ON CHART w/printed orders: <em><strong>4</strong></em><br/>SERVICE CORRECTION to signed order: <em><strong>6</strong></em><br/>ELECTRONIC: <em><strong>1</strong></em>{:/}
**Signed By**{::nomarkdown}<pre><code>  signed_by</code></pre>{:/} | 5 | This is the user who entered his/her electronic signature code to<br/>authenticate this order.  It will be replaced by an encryption of<br/>the name and title of the signer, along with a checksum of the order<br/>text, as soon as we figure out how to do that. :) | POINTER |  | [New_Person-200](New_Person-200)
**Date/time Signed**{::nomarkdown}<pre><code>  date_time_signed</code></pre>{:/} | 6 | This is the date/time that the order was electronically signed. | DATE-TIME |  | 
**Signed On Chart**{::nomarkdown}<pre><code>  signed_on_chart</code></pre>{:/} | 7 | This is the person who released an order based on a signature in the chart. | POINTER |  | [New_Person-200](New_Person-200)
**Verifying Nurse**{::nomarkdown}<pre><code>  verifying_nurse</code></pre>{:/} | 8 | This is the nurse who acknowledged or verified the accuracy of this order. | POINTER |  | [New_Person-200](New_Person-200)
**Date/time Nurse Verified**{::nomarkdown}<pre><code>  date_time_nurse_verified</code></pre>{:/} | 9 | This is the date/time that the order was acknowledged or verified by a<br/>nurse. | DATE-TIME |  | 
**Verifying Clerk**{::nomarkdown}<pre><code>  verifying_clerk</code></pre>{:/} | 10 | This is the ward clerk who took off this order, if it was not transmitted<br/>directly to the service for action. | POINTER |  | [New_Person-200](New_Person-200)
**Date/time Clerk Verified**{::nomarkdown}<pre><code>  date_time_clerk_verified</code></pre>{:/} | 11 | This is the date/time that the ward clerk took off this order. | DATE-TIME |  | 
**Nature Of Order**{::nomarkdown}<pre><code>  nature_of_order</code></pre>{:/} | 12 | This specifies the nature of the order or how it originated. | POINTER |  | [Nature_Of_Order-100_02](Nature_Of_Order-100_02)
**Entered By**{::nomarkdown}<pre><code>  entered_by</code></pre>{:/} | 13 | This is the user who entered the information about this order into the<br/>computer. | POINTER |  | [New_Person-200](New_Person-200)
**Text Reference**{::nomarkdown}<pre><code>  text_reference</code></pre>{:/} | 14 | This field contains a reference to the Order Action entry containing<br/>the text for this order. | NUMERIC |  | 
**Release Status**{::nomarkdown}<pre><code>  release_status</code></pre>{:/} | 15 | This field tracks the status of the request for this action; this is NOT<br/>the same as the order status. | ENUMERATION |  | {::nomarkdown}pre-release: <em><strong>10</strong></em><br/>dc/edit: <em><strong>12</strong></em><br/>rejected: <em><strong>13</strong></em><br/>unreleased: <em><strong>11</strong></em><br/>lapsed: <em><strong>14</strong></em>{:/}
**Release Date/time**{::nomarkdown}<pre><code>  release_date_time</code></pre>{:/} | 16 | This is the date/time the order was released to the service for action. | DATE-TIME |  | 
**Releasing Person**{::nomarkdown}<pre><code>  releasing_person</code></pre>{:/} | 17 | This is the person who released the order to the service for action. | POINTER |  | [New_Person-200](New_Person-200)
**Chart Reviewed By**{::nomarkdown}<pre><code>  chart_reviewed_by</code></pre>{:/} | 18 | This field contains the name of the user who performed the chart review<br/>that included this order. | POINTER |  | [New_Person-200](New_Person-200)
**Date/time Chart Reviewed**{::nomarkdown}<pre><code>  date_time_chart_reviewed</code></pre>{:/} | 19 | This field contains the date/time that a chart review was performed, that<br/>included this order. | DATE-TIME |  | 
**Dc/hold Until**{::nomarkdown}<pre><code>  dc_hold_until</code></pre>{:/} | 21 | This is the date/time the hold was or will be removed from this order; if<br/>a future date/time is entered at the time of holding the order, the hold<br/>will be automatically removed when this date/time is reached.<br/>  <br/>If this order is reinstated after being cancelled, this is the date/time<br/>the cancel status was removed from this order. | DATE-TIME |  | 
**Dc/hold Released By**{::nomarkdown}<pre><code>  dc_hold_released_by</code></pre>{:/} | 22 | This is the user who released the cancel or hold on this order. | POINTER |  | [New_Person-200](New_Person-200)
**Digital Signature**{::nomarkdown}<pre><code>  digital_signature</code></pre>{:/} | 23 | This is the digital signature of the order. | STRING |  | 
**Drug Schedule**{::nomarkdown}<pre><code>  drug_schedule</code></pre>{:/} | 24 |  This is the CS FEDERAL SCHEDULE of the drug as defined in the National<br/> Drug file (VA PRODUCT #50.68).  Pharmacy package further refines the<br/> schedule to:<br/>   1    Sch. I Nar.<br/>   2    II<br/>   2n   II Non-Nar.<br/>   3    III<br/>   3n   III Non-Nar.<br/>   4    IV<br/>   5    V<br/>   0    other active drugs | STRING |  | 
**Digital Signature Required**{::nomarkdown}<pre><code>  digital_signature_required</code></pre>{:/} | 25 | This field is set if a Digital Signature is required. | BOOLEAN |  | {::nomarkdown}false: <em><strong>1</strong></em><br/>true: <em><strong>0</strong></em>{:/}
**Flagged**{::nomarkdown}<pre><code>  flagged</code></pre>{:/} | 31 | This indicates that this order has been flagged. | BOOLEAN |  | {::nomarkdown}false: <em><strong>0</strong></em><br/>true: <em><strong>1</strong></em>{:/}
**Bulletin**{::nomarkdown}<pre><code>  bulletin</code></pre>{:/} | 32 | This is the bulletin sent as a result of flagging this order. | POINTER |  | Message-3_9
**Date/time Flagged**{::nomarkdown}<pre><code>  date_time_flagged</code></pre>{:/} | 33 | This is the date/time when this order was flagged. | DATE-TIME |  | 
**Flagged By**{::nomarkdown}<pre><code>  flagged_by</code></pre>{:/} | 34 | This is the user who flagged this order. | POINTER |  | [New_Person-200](New_Person-200)
**Reason For Flag**{::nomarkdown}<pre><code>  reason_for_flag</code></pre>{:/} | 35 | This is the reason this order was flagged; it will be included in the<br/>bulletin generated, as well as included in the text of this order until<br/>this order is unflagged. | STRING |  | 
**Date/time Unflagged**{::nomarkdown}<pre><code>  date_time_unflagged</code></pre>{:/} | 36 | This is the date/time this order was unflagged. | DATE-TIME |  | 
**Unflagged By**{::nomarkdown}<pre><code>  unflagged_by</code></pre>{:/} | 37 | This is the user who unflagged this order. | POINTER |  | [New_Person-200](New_Person-200)
**Reason For Unflag**{::nomarkdown}<pre><code>  reason_for_unflag</code></pre>{:/} | 38 | This is the reason for unflagging this order, usually a response to the<br/>reason for flag. | STRING |  | 
**Alerted Provider**{::nomarkdown}<pre><code>  alerted_provider</code></pre>{:/} | 39 | This is the user who was alerted to the flag. | POINTER |  | [New_Person-200](New_Person-200)
**Ward Comments**{::nomarkdown}<pre><code>  ward_comments</code></pre>{:/} | 50 | This is where ward or clinic comments on orders are stored. | STRING |  | 
**Chart Copy Printed**{::nomarkdown}<pre><code>  chart_copy_printed</code></pre>{:/} | 71 | This field is set to YES when the chart copy has printed. | BOOLEAN |  | {::nomarkdown}false: <em><strong>1</strong></em><br/>true: <em><strong>0</strong></em>{:/}
**Chart Copy Printed When**{::nomarkdown}<pre><code>  chart_copy_printed_when</code></pre>{:/} | 72 | This field stores the date/time the chart copy 1st printed. | DATE-TIME |  | 
**Chart Copy Printed By**{::nomarkdown}<pre><code>  chart_copy_printed_by</code></pre>{:/} | 73 | This field contains the person signed on when the chart copy 1st printed. | POINTER |  | [New_Person-200](New_Person-200)
**Chart Copy Printer**{::nomarkdown}<pre><code>  chart_copy_printer</code></pre>{:/} | 74 | This is the device that the chart copy was 1st sent to. | STRING |  | 

[&uarr; Return to top](#top)<br/>


### <a name="Order_Checks-100_09"></a>Order Checks (100.09)

<dl>
<dt>ID</dt><dd>Order_Checks-100_09</dd></dl>

#### Properties

Label/Field Name | Field # | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Order Check**{::nomarkdown}<pre><code>  order_check</code></pre>{:/} | .01 | This is an order check that was found to be true for this order. | POINTER | INDEXED<br/>REQUIRED | [Order_Checks-100_8](Order_Checks-100_8)
**Clinical Danger Level**{::nomarkdown}<pre><code>  clinical_danger_level</code></pre>{:/} | .02 | This is the clinical danger level associated with this check; checks<br/>flagged as 'HIGH' danger level will require a justification for<br/>overriding it and releasing the order. | ENUMERATION |  | {::nomarkdown}HIGH: <em><strong>1</strong></em><br/>MODERATE: <em><strong>2</strong></em><br/>LOW: <em><strong>3</strong></em>{:/}
**Override Reason**{::nomarkdown}<pre><code>  override_reason</code></pre>{:/} | .04 | This is the reason entered by the user as the justification for<br/>overriding the order check and releasing the order. | STRING |  | 
**Overridden By**{::nomarkdown}<pre><code>  overridden_by</code></pre>{:/} | .05 | This is the user who chose to override this order check and entered the<br/>reason why. | POINTER |  | [New_Person-200](New_Person-200)
**Date/time Overridden**{::nomarkdown}<pre><code>  date_time_overridden</code></pre>{:/} | .06 | This is the date/time when this order check occurred and was overridden. | DATE-TIME |  | 
**Order Check Message**{::nomarkdown}<pre><code>  order_check_message</code></pre>{:/} | 1 | This is the actual text of the order check that was displayed to the user. | STRING |  | 

[&uarr; Return to top](#top)<br/>


### <a name="Responses-100_045"></a>Responses (100.045)

<dl>
<dt>ID</dt><dd>Responses-100_045</dd></dl>

#### Properties

Label/Field Name | Field # | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Item Entry**{::nomarkdown}<pre><code>  item_entry</code></pre>{:/} | .01 | This is the internal entry number of the prompt in the Item multiple<br/>by which this response was obtained. | NUMERIC | REQUIRED | 
**Dialog**{::nomarkdown}<pre><code>  dialog</code></pre>{:/} | .02 | This is a pointer to the dialog prompt, which is in the Order Dialog file<br/>as type prompt. | POINTER |  | [Order_Dialog-101_41](Order_Dialog-101_41)
**Instance**{::nomarkdown}<pre><code>  instance</code></pre>{:/} | .03 | In the case of multiple answers for the same item, this identifies the<br/>individual instance. | NUMERIC |  | 
**Id**{::nomarkdown}<pre><code>  id-_04</code></pre>{:/} | .04 | This field assigns a free text identifier to this response value, for quick<br/>access to certain values in this order. | STRING | INDEXED | 
**Value**{::nomarkdown}<pre><code>  value</code></pre>{:/} | 1 | This contains the actual response, unless the value is a word processing<br/>type. | STRING |  | 
**Text**{::nomarkdown}<pre><code>  text</code></pre>{:/} | 2 | This contains responses to items that are a word processing type. | STRING |  | 

[&uarr; Return to top](#top)<br/>


### <a name="Order_Diagnoses-100_051"></a>Order Diagnoses (100.051)

<dl>
<dt>ID</dt><dd>Order_Diagnoses-100_051</dd></dl>

#### Properties

Label/Field Name | Field # | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Order Diagnoses**{::nomarkdown}<pre><code>  order_diagnoses</code></pre>{:/} | .01 |  | POINTER | INDEXED<br/>REQUIRED | [Icd_Diagnosis-80](Icd_Diagnosis-80)
**Expression**{::nomarkdown}<pre><code>  expression</code></pre>{:/} | 1 |  | POINTER |  | [Expressions-757_01](Expressions-757_01)

[&uarr; Return to top](#top)<br/>




{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:39 pm</p>{:/}