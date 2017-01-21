---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; DENTV TP CLEAN SLATE 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}DENTV TP CLEAN SLATE{:/}
 tag | {::nomarkdown}CLNSLT{:/}
 routine | [DENTVTP7](http://code.osehra.org/dox/Routine_DENTVTP7_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This will process a clean slate on DPAT passed in. The RPC processes both clean slate, and undo clean slate. You must pass a flag to determine which process you want completed. ACT=1 means you want to process a clean slate, ACT=-1 means you want to undo a clean slate. The clean slate can only be processed if there is no unfiled data for the patient. A clean slate undo can only be done if there no newer filed transactions for the patient.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DPAT{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} |  | 
| {::nomarkdown}ACT{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}ACT is used to tell the RPC which process to run:ACT=1 means you want to process a clean slate.ACT=-1 means you want to undo a clean slate.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 21st 2017, 4:25:14 am</p>{:/}