---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DENTV TP FILE RESERVED TXNS 

 property | value 
--- | --- 
 label | DENTV TP FILE RESERVED TXNS
 tag | SAVE
 routine | [DENTVTP7](http://code.osehra.org/dox/Routine_DENTVTP7_source.html)
 return value type | SINGLE VALUE
 description | Saves transaction information for a particular Dental provider and patient.  Reserved transactions are not filed to Dental History, DAS or PCE.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| DATA | LIST | 500 | true | Contains filing information:DATA(1) = FLAG^Provider IEN^DFN            where FLAG=A for add, U for update, D for deleteDATA(n) = txn data | 




Generated on January 11th 2017, 6:34:23 am