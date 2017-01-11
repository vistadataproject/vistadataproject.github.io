---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DENTV TP CLEAN SLATE 

 property | value 
--- | --- 
 label | DENTV TP CLEAN SLATE
 tag | CLNSLT
 routine | [DENTVTP7](http://code.osehra.org/dox/Routine_DENTVTP7_source.html)
 return value type | SINGLE VALUE
 description | This will process a clean slate on DPAT passed in. The RPC processes both clean slate, and undo clean slate. You must pass a flag to determine which process you want completed. ACT=1 means you want to process a clean slate, ACT=-1 means you want to undo a clean slate. The clean slate can only be processed if there is no unfiled data for the patient. A clean slate undo can only be done if there no newer filed transactions for the patient.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| DPAT | LITERAL |  | true |  | 
| ACT | LITERAL |  | true | ACT is used to tell the RPC which process to run:ACT=1 means you want to process a clean slate.ACT=-1 means you want to undo a clean slate. | 




Generated on January 11th 2017, 6:34:23 am