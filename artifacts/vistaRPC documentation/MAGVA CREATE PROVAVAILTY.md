---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAGVA CREATE PROVAVAILTY 

 property | value 
--- | --- 
 label | MAGVA CREATE PROVAVAILTY
 tag | ADDPA
 routine | [MAGVAC01](http://code.osehra.org/dox/Routine_MAGVAC01_source.html)
 return value type | SINGLE VALUE
 description | Add a new record to PROVIDER AVAILABILITY file (#2006.924)

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| MAGPARAM | LIST |  | true |     MAGPARAM(\STORAGE PROVIDER\)      = A pointer to STORAGE PROVIDER file (#2006.917)    MAGPARAM(\SOURCE PLACE\)  = A pointer to IMAGING SITE PARAMETERS file (#2006.1)    MAGPARAM(\START TIME\)    =  DateTime in IDF format (YYYYMMDD.HHMMSS)    MAGPARAM(\END TIME\)      = DateTime in IDF format (YYYYMMDD.HHMMSS) | 