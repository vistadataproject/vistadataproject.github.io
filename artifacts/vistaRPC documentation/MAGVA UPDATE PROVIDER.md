---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAGVA UPDATE PROVIDER 

 property | value 
--- | --- 
 label | MAGVA UPDATE PROVIDER
 tag | UPDPRV
 routine | [MAGVAU01](http://code.osehra.org/dox/Routine_MAGVAU01_source.html)
 return value type | SINGLE VALUE
 description | Update STORAGE PROVIDER file (#2006.917)

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | MAGPARAM | LIST |  | true |    MAGPARAM(\PK\) = IEN    MAGPARAM(\STORAGE PLACE\)   MAGPARAM(\ARCHIVE\)   MAGPARAM(\PRIMARY STORAGE\)   MAGPARAM(\ACTIVE\)   MAGPARAM(\WRITABLE\) | 