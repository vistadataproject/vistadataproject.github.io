---
layout: default
title: VISTA Emulator Documentation
---

## [Emulated RPCs](TableOfContents) &#8594; GMV MARK ERROR
# GMV MARK ERROR

This remote procedure call marks a selected vitals record in the GMRV Vital Measurement (#120.5) file as entered-in-error.   This remote procedure call is documented in Integration Agreement 4414.

Property | Value
--- | ---
Domain | Vitals
VISTA RPC Documentation | [GMV MARK ERROR](../VISTARPC/GMV_MARK_ERROR)
MUMPS Implementation | [EN1^GMVDCSAV](http://code.osehra.org/dox/Routine_GMVDCSAV_source.html)
Type | CHANGE
Complexity | MEDIUM
Uses | N/A
Return Type | SINGLE VALUE
Return Description | If the record is marked as entered in error, RESULT is set to "OK".<br/>Otherwise, RESULT is set to "Record Not Found"<br/> <br/> Example:<br/> > S GMVDATA="1560^547^1"<br/> > D ERROR^GMVUTL1(.RESULT,GMVDATA) ZW RESULT<br/> > RESULT="OK"
File Types Used | [120.5](../VDM/Gmrv_Vital_Measurement-120_5)
Parameters Used | GMRVDATA


### Input Parameters

Name | Type | Required | Description | Example
--- | --- | --- | --- | ---
GMRVDATA | LITERAL | true | GMVDATA contains the following information:<br/> <br/> piece1^piece2^piece3<br/> <br/> where piece1 = FILE 120.5 IEN <br/>       piece2 = FILE 200 IEN (i.e., DUZ)<br/>       piece3 = A single value to indicate the reason for the error.<br/>                1 = INCORRECT DATE/TIME, 2 = INCORRECT READING, 3 =<br/>                INCORRECT PATIENT and 4 = INVALID RECORD | 

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:06 pm</p>{:/}