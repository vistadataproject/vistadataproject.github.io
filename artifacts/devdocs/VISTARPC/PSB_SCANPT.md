---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; PSB SCANPT
# PSB SCANPT

This RPC is used to validate the data scanned in at the scan patient wristband prompt of the mnOpenPatient component.  The value passed in is either the full SSN scanned in from the patient wristband -or- the 1U4N syntax of the patient lookup.  In either case the call must return only one patient from the lookup.  If the 1U4N syntax is used and multiple patients are found the call returns an error.  If only one patient is found the RESULTS( ) array is loaded with the patient data and passed back to the client for verification.

Property | Value
--- | ---
Label | SCANPT
Routine | [PSBRPC](http://code.osehra.org/dox/Routine_PSBRPC_source.html)
Return Type | ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
PSBDATA | LITERAL |  | true | This is the scanned valued passed by the client.wristband prompt of the mnOpenPatient component.  The value passed inis either the full SSN scanned in from the patient wristband -or- the1U4N syntax of the patient lookup.  In either case the call mustreturn only one patient from the lookup.  If the 1U4N syntax is usedand multiple patients are found the call returns an error.  If onlyone patient is found the RESULTS( ) array is loaded with the patientdata and passed back to the client for verification.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}