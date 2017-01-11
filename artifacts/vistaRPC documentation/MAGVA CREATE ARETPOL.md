---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAGVA CREATE ARETPOL 

 property | value 
--- | --- 
 label | MAGVA CREATE ARETPOL
 tag | ADDARP
 routine | [MAGVAC01](http://code.osehra.org/dox/Routine_MAGVAC01_source.html)
 return value type | SINGLE VALUE
 description | Create a new record in Artifact Retention Policy file (#2006.921).

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| MAGPARAM | LIST |  | true |  MAGPARAM(\ARTIFACT\)           = A pointer to ARTIFACT file (#2006.916) MAGPARAM(\RETENTION POLICY\)   = A pointer to RETENTION POLICY file (#2006.914) MAGPARAM(\SATISFIED DATE/TIME\) = DateTime in IDF format (YYYYMMDD.HHMMSS) | 




Generated on January 11th 2017, 6:34:23 am