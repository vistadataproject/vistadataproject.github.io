---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; DENTV DELETE TRANSACTIONS 

 property | value 
--- | --- 
 label | {::nomarkdown}DENTV DELETE TRANSACTIONS{:/}
 tag | {::nomarkdown}DELT{:/}
 routine | [DENTVRHD](http://code.osehra.org/dox/Routine_DENTVRHD_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This RPC deletes the dental encounter from the DENTAL HISTORY file (#228.1) and dental transactions from the DENTAL TREATMENT PLAN/EXAM file(#228.2) for types=PSR, PerioExam and Head&Neck if the Transaction(s) fortype=Transaction fails to file.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}IEN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}10{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the internal entry in file 228.1 to be deleted.{:/} | 




 Generated on January 13th 2017, 7:11:27 am