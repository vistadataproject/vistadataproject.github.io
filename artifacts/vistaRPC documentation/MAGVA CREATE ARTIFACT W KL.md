---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAGVA CREATE ARTIFACT W KL 

 property | value 
--- | --- 
 label | MAGVA CREATE ARTIFACT W KL
 tag | ADDAFACT
 routine | [MAGVAC01](http://code.osehra.org/dox/Routine_MAGVAC01_source.html)
 return value type | SINGLE VALUE
 description | Add a record to ARTIFACT file (#2006.916)

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| MAGPARAM | LIST |  | true |  MAGPARAM(\ARTIFACT DESCRIPTOR\) MAGPARAM(\ARTIFACT TOKEN\) MAGPARAM(\CRC\) MAGPARAM(\CREATED BY\) MAGPARAM(\LAST ACCESS DATE/TIME\) MAGPARAM(\SIZE IN BYTES\) | 
| KLIST | LIST |  | true |  Artifact KEYLIST values   KLIST(1) = First level Key   KLIST(2) = Second level Key   ...   KLIST(N) = N-th level Key | 