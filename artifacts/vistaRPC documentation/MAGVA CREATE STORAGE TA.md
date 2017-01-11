---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAGVA CREATE STORAGE TA 

 property | value 
--- | --- 
 label | MAGVA CREATE STORAGE TA
 tag | ADDSTTA
 routine | [MAGVAC01](http://code.osehra.org/dox/Routine_MAGVAC01_source.html)
 return value type | SINGLE VALUE
 description | Add a new record to STORAGE TRANSACTION file (#2006.926)

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| MAGPARAM | LIST |  | true |  MAGPARAM(\ARTIFACT\) = Pointer to ARTIFACT file (#2006.916) MAGPARAM(\STORAGE PROVIDER\) = Pointer to STORAGE PROVIDER file (#2006.917) MAGPARAM(\SUCCEEDED\) = 0/1 MAGPARAM(\TRANSACTION TYPE\) =  MAGPARAM(\INITIATING APPLICATION\) =  | 
| MAGMSG | LIST |  | true | MAGMSG(1..n) = MESSAGE | 