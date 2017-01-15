---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; DENTV TP GET RESERVED TXNS 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}DENTV TP GET RESERVED TXNS{:/}
 tag | {::nomarkdown}GET{:/}
 routine | [DENTVTP7](http://code.osehra.org/dox/Routine_DENTVTP7_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}Returns all reserved transactions for a particular Dental provider andpatient.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}PROV{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}30{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Provider IEN from file 200.{:/} | 
| {::nomarkdown}DFN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}30{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Patient DFN from file 2.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 15th 2017, 12:59:51 am</p>{:/}