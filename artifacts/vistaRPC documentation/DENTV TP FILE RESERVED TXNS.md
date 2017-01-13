---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; DENTV TP FILE RESERVED TXNS 

 property | value 
--- | --- 
 label | {::nomarkdown}DENTV TP FILE RESERVED TXNS{:/}
 tag | {::nomarkdown}SAVE{:/}
 routine | [DENTVTP7](http://code.osehra.org/dox/Routine_DENTVTP7_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Saves transaction information for a particular Dental provider and patient.  Reserved transactions are not filed to Dental History, DAS or PCE.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DATA{:/} | {::nomarkdown}LIST{:/} | {::nomarkdown}500{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Contains filing information:DATA(1) = FLAG^Provider IEN^DFN            where FLAG=A for add, U for update, D for deleteDATA(n) = txn data{:/} | 




 Generated on January 13th 2017, 7:11:27 am