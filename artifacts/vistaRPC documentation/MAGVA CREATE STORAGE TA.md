---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; MAGVA CREATE STORAGE TA 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}MAGVA CREATE STORAGE TA{:/}
 tag | {::nomarkdown}ADDSTTA{:/}
 routine | [MAGVAC01](http://code.osehra.org/dox/Routine_MAGVAC01_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Add a new record to STORAGE TRANSACTION file (#2006.926){:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}MAGPARAM{:/} | {::nomarkdown}LIST{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown} MAGPARAM(\ARTIFACT\) = Pointer to ARTIFACT file (#2006.916) MAGPARAM(\STORAGE PROVIDER\) = Pointer to STORAGE PROVIDER file (#2006.917) MAGPARAM(\SUCCEEDED\) = 0/1 MAGPARAM(\TRANSACTION TYPE\) =  MAGPARAM(\INITIATING APPLICATION\) = {:/} | 
| {::nomarkdown}MAGMSG{:/} | {::nomarkdown}LIST{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}MAGMSG(1..n) = MESSAGE{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 5:08:32 am</p>{:/}