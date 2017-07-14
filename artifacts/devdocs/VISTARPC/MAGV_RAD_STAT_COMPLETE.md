---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; MAGV RAD STAT COMPLETE<br/>
# MAGV RAD STAT COMPLETE

 +---------------------------------------------------------------+ | Property of the US Government.                                | | No permission to copy or redistribute this software is given. | | Use of unreleased versions of this software requires the user | | to execute a written test agreement with the VistA Imaging    | | Development Office of the Department of Veterans Affairs,     | | telephone (301) 734-0100.                                     | |                                                               | | The Food and Drug Administration classifies this software as  | | a medical device.  As such, it may not be changed in any way. | | Modifications to this software may result in an adulterated   | | medical device under 21CFR820, the use of which is considered | | to be a violation of US Federal Statutes.                     | +---------------------------------------------------------------+ Wrap call to code underlying RPC: RAMAG EXAM COMPLETE.

## Properties

Property | Value
--- | ---
Label | XMCOMPLT
Routine | [MAGVIM05](http://code.osehra.org/dox/Routine_MAGVIM05_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
RADPT | LITERAL |  | true | IEN of the patient in the RAD/NUC MED PATIENT File (#70).
RAEXAM1 | LITERAL |  | true | IEN in the REGISTERED EXAMS multiple (sub-file #70.02).
RAEXAM2 | LITERAL |  | true | IEN in the EXAMINATIONS multiple (sub-file #70.03).
MAGVUSR | LITERAL |  |  | DUZ of the person logged into the Importer II application.
MAGVUSRDV | LITERAL |  | true | User Logon Division of the person logged into the Importer II application.
RAIMTYP | LITERAL |  | true | This is the radiology image type.
RASTDRPT | LITERAL |  | true | IEN of an entry in the STANDARD REPORTS file (#74.1).
RADXPRIM | LITERAL |  | true | IEN of an entry in the DIAGNOSTIC CODES file (#78.3). This will be theexam&#x27;s Primary Diagnostic Code via the RAMISC parameter &#x27;PRIMDXCODE&#x27;.
RADXSCND | LIST |  | true | One or more IENs of entries in the DIAGNOSTIC CODES file (#78.3). Thesewill be the exam&#x27;s Secondary Diagnostic Codes via the RAMISC parameter&#x27;SECDXCODE&#x27;.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}