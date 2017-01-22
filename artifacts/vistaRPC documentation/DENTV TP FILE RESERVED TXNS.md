---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; DENTV TP FILE RESERVED TXNS 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}DENTV TP FILE RESERVED TXNS{:/}
 tag | {::nomarkdown}SAVE{:/}
 routine | [DENTVTP7](http://code.osehra.org/dox/Routine_DENTVTP7_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Saves transaction information for a particular Dental provider and patient.  Reserved transactions are not filed to Dental History, DAS or PCE.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DATA{:/} | {::nomarkdown}LIST{:/} | {::nomarkdown}500{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Contains filing information:DATA(1) = FLAG^Provider IEN^DFN            where FLAG=A for add, U for update, D for deleteDATA(n) = txn data{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 22nd 2017, 3:23:03 am</p>{:/}