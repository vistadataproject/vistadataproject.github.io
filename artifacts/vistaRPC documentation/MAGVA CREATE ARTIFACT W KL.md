---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAGVA CREATE ARTIFACT W KL 

 property | value 
--- | --- 
 label | {::nomarkdown}MAGVA CREATE ARTIFACT W KL{:/}
 tag | {::nomarkdown}ADDAFACT{:/}
 routine | [MAGVAC01](http://code.osehra.org/dox/Routine_MAGVAC01_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Add a record to ARTIFACT file (#2006.916){:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}MAGPARAM{:/} | {::nomarkdown}LIST{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown} MAGPARAM(\ARTIFACT DESCRIPTOR\) MAGPARAM(\ARTIFACT TOKEN\) MAGPARAM(\CRC\) MAGPARAM(\CREATED BY\) MAGPARAM(\LAST ACCESS DATE/TIME\) MAGPARAM(\SIZE IN BYTES\){:/} | 
| {::nomarkdown}KLIST{:/} | {::nomarkdown}LIST{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown} Artifact KEYLIST values   KLIST(1) = First level Key   KLIST(2) = Second level Key   ...   KLIST(N) = N-th level Key{:/} | 




 Generated on January 13th 2017, 6:15:57 am