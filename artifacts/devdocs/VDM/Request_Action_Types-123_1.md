---
layout: default
title: VDM
---

#### [Developer Documentation](../index) &#187; [VDM](TableOfContents) &#187; Request_Action_Types-123_1<br/>
<a name="top"></a>
# Request Action Types (123.1)
This file identifies the action types which may be used by a service to  track activity related to a consult or request.    Certain action types may have a "GMRCACT " protocol entry in the Protocol File (101) which corresponds to the action type.  Two actions should not  point to the same protocol.

**Global:** ^GMR(123.1,

**Domain:** Non-Clinical

## Properties

Label/Field Name | Field # | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Number**{::nomarkdown}<pre><code>  number</code></pre>{:/} | .001 | The internal entry number of the Request Action Type. | IEN |  | 
**Action Type**{::nomarkdown}<pre><code>  action_type</code></pre>{:/} | .01 | This file contains the tracking actions which may be taken to track<br/>a Consult or Request order from its entry in CPRS through its<br/>resolution.<br/> <br/>This file also contains relationships of CPRS statuses which are the<br/>result of the action taken. | STRING | INDEXED<br/>REQUIRED | 
**Related Oe/rr Status**{::nomarkdown}<pre><code>  related_oe_rr_status</code></pre>{:/} | 1 | This is the CPRS status which will be used to update the order in OE/RR<br/>when this action is taken. | POINTER | INDEXED | [Order_Status-100_01](Order_Status-100_01)
**Disabled Message**{::nomarkdown}<pre><code>  disabled_message</code></pre>{:/} | 3 | This field displays a 'DISABLED' message when this CPRS status has been<br/>disabled. | STRING |  | 
**Hl7 Control Code From Consults**{::nomarkdown}<pre><code>  hl7_control_code_from_consults</code></pre>{:/} | 4 | This field indicates what HL7 control code is passed to CPRS from<br/>Consults.<br/>    Example: <br/>             "SN"=Service entered, backdoor consult, automatically<br/>released from CPRS, though signatures may still be required depending on<br/>nature of order<br/>             "OD"=Discontinued<br/>             "OC"=Denied by service (Cancelled)<br/>             "SC"=Service status update (generic status change) for active<br/>and partial results<br/>             "XX"=Forwarded<br/>             "RE"=Completed | STRING |  | 
**Hl7 Control Code From Cprs**{::nomarkdown}<pre><code>  hl7_control_code_from_cprs</code></pre>{:/} | 5 | This field indicates what HL7 control code is passed from CPRS to<br/>Consults.<br/>    Example: "NW"=New consult entered and released through CPRS<br/>             "CA"=Cancelled via the orders tab<br/>             "DC"=Discontinued | STRING | INDEXED | 
**Hl7 Table 38 Order Status**{::nomarkdown}<pre><code>  hl7_table_38_order_status</code></pre>{:/} | 6 | This field is for documenting purposes and contains the related Table 38<br/>order status from HL7 for each activity. | STRING |  | 
**Action Print Name**{::nomarkdown}<pre><code>  action_print_name</code></pre>{:/} | 7 | This field is used on the 513 Form as a header for comments. | STRING |  | 

[&uarr; Return to top](#top)<br/>



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:39 pm</p>{:/}