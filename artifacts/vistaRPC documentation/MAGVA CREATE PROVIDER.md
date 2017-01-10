---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAGVA CREATE PROVIDER 

 property | value 
--- | --- 
 label | MAGVA CREATE PROVIDER
 tag | ADDPRV
 routine | [MAGVAC01](http://code.osehra.org/dox/Routine_MAGVAC01_source.html)
 return value type | SINGLE VALUE
 description | Add a Storage Provider record to file STORAGE PROVIDER (#2006.917)

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | MAGPARAM | LIST |  | true |    MAGPARAM(\STORAGE PROVIDER TYPE\)   MAGPARAM(\STORAGE PROVIDER PLACE\)   MAGPARAM(\ARCHIVE\)   MAGPARAM(\PRIMARY STORAGE\) | 