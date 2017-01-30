---
layout: default
title: VDM documentation
---

## [VDM](TableOfContent.md) &#8594; Order_Reason-100_03 

<dl>
<dt>id</dt><dd>Order_Reason-100_03</dd>
<dt>fmId</dt><dd>100.03</dd>
<dt>label</dt><dd>Order Reason</dd>
<dt>location</dt><dd>^ORD(100.03,</dd>
<dt>description</dt><dd>This file is used to define the possible reasons for DC'ing/cancelling<br/>an order.  The entries are identified by package so that each package<br/>can have their own set of reasons.  Sites may wish to modify the<br/>entries in this file to fit their needs.  It is important to maintain<br/>the correct links to the Radiology Reason file if modifications are<br/>made.  These links are maintained in the CODE field.  For Radiology<br/>reasons, the code field is the internal # of the radiology reason file<br/>followed by the characters RA.<br/> <br/>This file points the the Nature of Order file.  This relationship<br/>is what identifies the appropriate actions to take for any DC Reason.</dd>
</dl>

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| name | .01 | Name | {::nomarkdown}This is the name of the DC Reason.{:/} | STRING |  | REQUIRED, INDEXED |  | 
| synonym | .03 | Synonym | {::nomarkdown}This is the synonym for this reason and is used on a file lookup.{:/} | STRING |  | INDEXED |  | 
| inactive | .04 | Inactive | {::nomarkdown}This field is used to inactivate a DC Reason.{:/} | ENUMERATION |  |  | {::nomarkdown}<dl><dt>0</dt><dd>ACTIVE</dd><dt>1</dt><dd>INACTIVE</dd></dl>{:/} | 
| package | .05 | Package | {::nomarkdown}This is the package that this reason applies to.{:/} | POINTER |  |  | Package-9_4 | 
| code | .06 | Code | {::nomarkdown}This is a code that is used to identify this DC Reason.<br/>This field is not manditory.  If a code is not defined, then the internal<br/>number of the file entry is used to identify this reason.  Radiology<br/>uses this field for it's reasons to identify the entry with it's<br/>corresponding entry in the Radiology Reasons file.{:/} | STRING |  | INDEXED |  | 
| nature_of_activity | .07 | Nature Of Activity | {::nomarkdown}This field is used to categorize DC reasons into types that OE/RR<br/>can take action on.  The actions and types are defined in the<br/>Nature of order file.{:/} | POINTER |  | REQUIRED | Nature_Of_Order-100_02 | 
| message_status | .08 | Message Status | {::nomarkdown}This field is used to identify the status an order will be set to<br/>when this order reason is selected.  This is currently used by<br/>backdoor lab options when orders/accessions are canceled.  If the field<br/>is blank, lab sends the HL7 status update message with a status of DC<br/>(the default); otherwise it will use the status in this field.{:/} | POINTER |  |  | Order_Status-100_01 | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 30th 2017, 8:27:43 pm</p>{:/}