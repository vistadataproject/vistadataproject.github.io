---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DENTV DELETE TRANSACTIONS 

 property | value 
--- | --- 
 label | DENTV DELETE TRANSACTIONS
 tag | DELT
 routine | [DENTVRHD](http://code.osehra.org/dox/Routine_DENTVRHD_source.html)
 return value type | SINGLE VALUE
 description | This RPC deletes the dental encounter from the DENTAL HISTORY file (#228.1) and dental transactions from the DENTAL TREATMENT PLAN/EXAM file(#228.2) for types=PSR, PerioExam and Head&Neck if the Transaction(s) fortype=Transaction fails to file.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| IEN | LITERAL | 10 | true | This is the internal entry in file 228.1 to be deleted. | 




Generated on January 11th 2017, 6:34:23 am