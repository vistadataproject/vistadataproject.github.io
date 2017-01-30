---
layout: default
title: VDM documentation
---

## [VDM](TableOfContent.md) &#8594; Hl7_Message_Exceptions-79_3 

<dl>
<dt>id</dt><dd>Hl7_Message_Exceptions-79_3</dd>
<dt>fmId</dt><dd>79.3</dd>
<dt>label</dt><dd>Hl7 Message Exceptions</dd>
<dt>location</dt><dd>^RA(79.3,</dd>
<dt>description</dt><dd></dd>
</dl>

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| exception_date_time | .01 | Exception Date/time | {::nomarkdown}This is the date/time of the exception message{:/} | DATE-TIME |  | REQUIRED, INDEXED |  | 
| sending_application | .02 | Sending Application | {::nomarkdown}The Sending Application which generated the exception message.{:/} | POINTER |  | REQUIRED, INDEXED | Hl7_Application_Parameter-771 | 
| patient | .03 | Patient | {::nomarkdown}This is the patient name linked to the exception message.{:/} | POINTER |  |  | [Patient-2](Patient-2.md) | 
| case_number | .04 | Case Number | {::nomarkdown}This is the case number of the exam for our message exception.{:/} | NUMERIC |  |  |  | 
| hl7_message | .05 | Hl7 Message | {::nomarkdown}This is the HL7 Message that was rejected{:/} | POINTER |  | REQUIRED | Hl7_Message_Administration-773 | 
| user | .06 | User | {::nomarkdown}This is the name of the radiology user linked to the message exception{:/} | POINTER |  | INDEXED | [New_Person-200](New_Person-200.md) | 
| error | 1 | Error | {::nomarkdown}This is the reason that this message was rejected.{:/} | STRING |  | REQUIRED |  | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 30th 2017, 8:13:27 pm</p>{:/}