---
layout: default
title: VDM
---

#### [Developer Documentation](../index) &#187; [VDM](TableOfContents) &#187; Order_Reason-100_03<br/>
<a name="top"></a>
# Order Reason (100.03)
This file is used to define the possible reasons for DC'ing/cancelling an order.  The entries are identified by package so that each package can have their own set of reasons.  Sites may wish to modify the entries in this file to fit their needs.  It is important to maintain the correct links to the Radiology Reason file if modifications are made.  These links are maintained in the CODE field.  For Radiology reasons, the code field is the internal # of the radiology reason file followed by the characters RA.   This file points the the Nature of Order file.  This relationship is what identifies the appropriate actions to take for any DC Reason.

**Global:** ^ORD(100.03,

**Domain:** Non-Clinical

## Properties

Field | ID | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Name**{::nomarkdown}<pre><code>  name</code></pre>{:/} | .01 | This is the name of the DC Reason. | STRING | INDEXED<br/>REQUIRED | 
**Synonym**{::nomarkdown}<pre><code>  synonym</code></pre>{:/} | .03 | This is the synonym for this reason and is used on a file lookup. | STRING | INDEXED | 
**Inactive**{::nomarkdown}<pre><code>  inactive</code></pre>{:/} | .04 | This field is used to inactivate a DC Reason. | ENUMERATION |  | {::nomarkdown}ACTIVE: <em><strong>0</strong></em><br/>INACTIVE: <em><strong>1</strong></em>{:/}
**Package**{::nomarkdown}<pre><code>  package</code></pre>{:/} | .05 | This is the package that this reason applies to. | POINTER |  | [Package-9_4](Package-9_4)
**Code**{::nomarkdown}<pre><code>  code</code></pre>{:/} | .06 | This is a code that is used to identify this DC Reason.<br/>This field is not manditory.  If a code is not defined, then the internal<br/>number of the file entry is used to identify this reason.  Radiology<br/>uses this field for it's reasons to identify the entry with it's<br/>corresponding entry in the Radiology Reasons file. | STRING | INDEXED | 
**Nature Of Activity**{::nomarkdown}<pre><code>  nature_of_activity</code></pre>{:/} | .07 | This field is used to categorize DC reasons into types that OE/RR<br/>can take action on.  The actions and types are defined in the<br/>Nature of order file. | POINTER | REQUIRED | [Nature_Of_Order-100_02](Nature_Of_Order-100_02)
**Message Status**{::nomarkdown}<pre><code>  message_status</code></pre>{:/} | .08 | This field is used to identify the status an order will be set to<br/>when this order reason is selected.  This is currently used by<br/>backdoor lab options when orders/accessions are canceled.  If the field<br/>is blank, lab sends the HL7 status update message with a status of DC<br/>(the default); otherwise it will use the status in this field. | POINTER |  | [Order_Status-100_01](Order_Status-100_01)



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:28 pm</p>{:/}