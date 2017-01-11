---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; PSB SCANPT 

 property | value 
--- | --- 
 label | PSB SCANPT
 tag | SCANPT
 routine | [PSBRPC](http://code.osehra.org/dox/Routine_PSBRPC_source.html)
 return value type | ARRAY
 description | This RPC is used to validate the data scanned in at the scan patient wristband prompt of the mnOpenPatient component.  The value passed in is either the full SSN scanned in from the patient wristband -or- the 1U4N syntax of the patient lookup.  In either case the call must return only one patient from the lookup.  If the 1U4N syntax is used and multiple patients are found the call returns an error.  If only one patient is found the RESULTS( ) array is loaded with the patient data and passed back to the client for verification.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| PSBDATA | LITERAL |  | true | This is the scanned valued passed by the client.wristband prompt of the mnOpenPatient component.  The value passed inis either the full SSN scanned in from the patient wristband -or- the1U4N syntax of the patient lookup.  In either case the call mustreturn only one patient from the lookup.  If the 1U4N syntax is usedand multiple patients are found the call returns an error.  If onlyone patient is found the RESULTS( ) array is loaded with the patientdata and passed back to the client for verification. | 




Generated on January 11th 2017, 6:34:23 am