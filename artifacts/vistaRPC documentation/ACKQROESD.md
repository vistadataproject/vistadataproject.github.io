---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ACKQROESD 

 property | value 
--- | --- 
 label | ACKQROESD
 tag | STARTD
 routine | [ACKQAG05](http://code.osehra.org/dox/Routine_ACKQAG05_source.html)
 return value type | SINGLE VALUE
 description | This is the RPC used to setup and send a deletion of an audiogram to the DDc when a deletion is processed on the home system for an audiogram that has been sent to the DDC.  It is triggered by the mDelete.OnClick action from the Enter/Edit program ACKQROES3E.EXE.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| DFN | LITERAL |  | true | This is the internal number of the patient in the PATIENT file (#2). | 
| IEN | LITERAL |  | true | This is the internal number of the record in the AUDIOMETRIC EXAM DATA file (#509850.9). | 
| STANUM | LITERAL |  | true | This is the Station Number of the sending clinic | 
| USRNAM | LITERAL | 32 | true | This is the name of the submitting user | 
| USRSER | LITERAL |  | true | This is the name of the submitting user's service. | 