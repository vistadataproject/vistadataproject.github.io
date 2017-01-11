---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ACKQROES 

 property | value 
--- | --- 
 label | ACKQROES
 tag | START
 routine | [ACKQAG03](http://code.osehra.org/dox/Routine_ACKQAG03_source.html)
 return value type | SINGLE VALUE
 description | This is the RPC used to setup and send to the DDC, thesigned audiometric data file entry to the DDC from the application Audiogram Enter/Edit (AKCQROES3E.EXE). It is triggered bythe saving of a signed entry in 509850.9.  The RPC calls routine START^ACKQAG03 which in turn calls EN^ACKQAG04. The VADPT utilities are also used.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| DFN | LITERAL |  | true | This is the pointer to the patient file. | 
| IEN | LITERAL |  | true | This is the entry in 509850.9 that the user is working on. | 
| STANUM | LITERAL |  | true | This is the Sta # of the sending clinic | 
| USRNAM | LITERAL | 32 | true | This is the name of the submitting user | 
| USRSER | LITERAL | 32 | true | This is the name of the submitting user's service | 




 Generated on January 11th 2017, 7:15:04 am