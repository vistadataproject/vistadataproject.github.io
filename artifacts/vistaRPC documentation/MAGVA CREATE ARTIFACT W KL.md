---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; MAGVA CREATE ARTIFACT W KL 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}MAGVA CREATE ARTIFACT W KL{:/}
 tag | {::nomarkdown}ADDAFACT{:/}
 routine | [MAGVAC01](http://code.osehra.org/dox/Routine_MAGVAC01_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Add a record to ARTIFACT file (#2006.916){:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}MAGPARAM{:/} | {::nomarkdown}LIST{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown} MAGPARAM(\ARTIFACT DESCRIPTOR\) MAGPARAM(\ARTIFACT TOKEN\) MAGPARAM(\CRC\) MAGPARAM(\CREATED BY\) MAGPARAM(\LAST ACCESS DATE/TIME\) MAGPARAM(\SIZE IN BYTES\){:/} | 
| {::nomarkdown}KLIST{:/} | {::nomarkdown}LIST{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown} Artifact KEYLIST values   KLIST(1) = First level Key   KLIST(2) = Second level Key   ...   KLIST(N) = N-th level Key{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 9:04:54 am</p>{:/}