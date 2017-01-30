---
layout: default
title: VDM documentation
---

## [VDM](TableOfContent.md) &#8594; Request_Action_Types-123_1 

<dl>
<dt>id</dt><dd>Request_Action_Types-123_1</dd>
<dt>fmId</dt><dd>123.1</dd>
<dt>label</dt><dd>Request Action Types</dd>
<dt>location</dt><dd>^GMR(123.1,</dd>
<dt>description</dt><dd>This file identifies the action types which may be used by a service to <br/>track activity related to a consult or request.<br/>  <br/>Certain action types may have a \GMRCACT \ protocol entry in the Protocol<br/>File (101) which corresponds to the action type.  Two actions should not <br/>point to the same protocol.</dd>
</dl>

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| number | .001 | Number | {::nomarkdown}The internal entry number of the Request Action Type.{:/} | IEN |  |  |  | 
| action_type | .01 | Action Type | {::nomarkdown}This file contains the tracking actions which may be taken to track<br/>a Consult or Request order from its entry in CPRS through its<br/>resolution.<br/> <br/>This file also contains relationships of CPRS statuses which are the<br/>result of the action taken.{:/} | STRING |  | REQUIRED, INDEXED |  | 
| related_oe_rr_status | 1 | Related Oe/rr Status | {::nomarkdown}This is the CPRS status which will be used to update the order in OE/RR<br/>when this action is taken.{:/} | POINTER |  | INDEXED | Order_Status-100_01 | 
| disabled_message | 3 | Disabled Message | {::nomarkdown}This field displays a 'DISABLED' message when this CPRS status has been<br/>disabled.{:/} | STRING |  |  |  | 
| hl7_control_code_from_consults | 4 | Hl7 Control Code From Consults | {::nomarkdown}This field indicates what HL7 control code is passed to CPRS from<br/>Consults.<br/>    Example: <br/>             \SN\=Service entered, backdoor consult, automatically<br/>released from CPRS, though signatures may still be required depending on<br/>nature of order<br/>             \OD\=Discontinued<br/>             \OC\=Denied by service (Cancelled)<br/>             \SC\=Service status update (generic status change) for active<br/>and partial results<br/>             \XX\=Forwarded<br/>             \RE\=Completed{:/} | STRING |  |  |  | 
| hl7_control_code_from_cprs | 5 | Hl7 Control Code From Cprs | {::nomarkdown}This field indicates what HL7 control code is passed from CPRS to<br/>Consults.<br/>    Example: \NW\=New consult entered and released through CPRS<br/>             \CA\=Cancelled via the orders tab<br/>             \DC\=Discontinued{:/} | STRING |  | INDEXED |  | 
| hl7_table_38_order_status | 6 | Hl7 Table 38 Order Status | {::nomarkdown}This field is for documenting purposes and contains the related Table 38<br/>order status from HL7 for each activity.{:/} | STRING |  |  |  | 
| action_print_name | 7 | Action Print Name | {::nomarkdown}This field is used on the 513 Form as a header for comments.{:/} | STRING |  |  |  | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 30th 2017, 8:27:43 pm</p>{:/}