---
layout: default
title: VDM
---

## [VDM](TableOfContents) &#8594; Hl7_Message_Exceptions-79_3
# Hl7 Message Exceptions (79.3)
None

<dl>
<dt>Global</dt><dd>^RA(79.3,</dd>
<dt>Domain</dt><dd>Non-Clinical</dd>
</dl>

### Properties

Field | ID | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Exception Date/time**{::nomarkdown}<pre><code>  exception_date_time</code></pre>{:/} | .01 | This is the date/time of the exception message | DATE-TIME | INDEXED<br/>REQUIRED | 
**Sending Application**{::nomarkdown}<pre><code>  sending_application</code></pre>{:/} | .02 | The Sending Application which generated the exception message. | POINTER | INDEXED<br/>REQUIRED | [Hl7_Application_Parameter-771](Hl7_Application_Parameter-771)
**Patient**{::nomarkdown}<pre><code>  patient</code></pre>{:/} | .03 | This is the patient name linked to the exception message. | POINTER |  | [Patient-2](Patient-2)
**Case Number**{::nomarkdown}<pre><code>  case_number</code></pre>{:/} | .04 | This is the case number of the exam for our message exception. | NUMERIC |  | 
**Hl7 Message**{::nomarkdown}<pre><code>  hl7_message</code></pre>{:/} | .05 | This is the HL7 Message that was rejected | POINTER | REQUIRED | [Hl7_Message_Administration-773](Hl7_Message_Administration-773)
**User**{::nomarkdown}<pre><code>  user</code></pre>{:/} | .06 | This is the name of the radiology user linked to the message exception | POINTER | INDEXED | [New_Person-200](New_Person-200)
**Error**{::nomarkdown}<pre><code>  error</code></pre>{:/} | 1 | This is the reason that this message was rejected. | STRING | REQUIRED | 



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:00 pm</p>{:/}