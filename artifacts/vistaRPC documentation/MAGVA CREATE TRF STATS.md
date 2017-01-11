---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAGVA CREATE TRF STATS 

 property | value 
--- | --- 
 label | MAGVA CREATE TRF STATS
 tag | ADDTRFS
 routine | [MAGVAC01](http://code.osehra.org/dox/Routine_MAGVAC01_source.html)
 return value type | SINGLE VALUE
 description | Add a new record to TRANSFER STATISTICS file (#2006.925)

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| MAGPARAM | LIST |  | true |  MAGPARAM(\DURATION IN MILLISECONDS\) =  MAGPARAM(\ENDPOINT PLACE\) = Pointer to IMAGING SITE PARAMETERS file (#2006.1) MAGPARAM(\STORAGE PROVIDER\) = Pointer to STORAGE PROVIDER file (#2006.917) MAGPARAM(\SIZE IN BYTES\) =  MAGPARAM(\START DATE/TIME\) =  | 