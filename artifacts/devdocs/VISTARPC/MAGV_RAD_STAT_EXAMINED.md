---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; MAGV RAD STAT EXAMINED
# MAGV RAD STAT EXAMINED

Wraps calls to RAMAG EXAMINED RPC and re-formats output.

Property | Value
--- | ---
Label | XMEXAMIN
Routine | [MAGVIM05](http://code.osehra.org/dox/Routine_MAGVIM05_source.html)
Return Type | ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
RADPT | LITERAL |  | true | IEN of the Patient in the RAD/NUC MED PATIENT file (#70).
RAEXAM1 | LITERAL |  | true | IEN of the REGISTERED EXAMS multiple (sub file #70.02).
RAEXAM2 | LITERAL |  | true | IEN in the EXAMINATIONS multiple (sub-file #70.03).
MAGVUSRDV | LITERAL |  | true | User Logon Division of the person logged into the Importer II application.
RAIMGTYP | LITERAL |  | true | This is the radiology imaging type parameter
MAGVUSR | LITERAL |  | true | DUZ of the person logged into the Importer II application.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}