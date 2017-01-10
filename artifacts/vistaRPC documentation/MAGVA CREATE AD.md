---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAGVA CREATE AD 

 property | value 
--- | --- 
 label | MAGVA CREATE AD
 tag | ADDAD
 routine | [MAGVAC01](http://code.osehra.org/dox/Routine_MAGVAC01_source.html)
 return value type | SINGLE VALUE
 description | Add a record to ARTIFACT DESCRIPTOR file (#2006.915)

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | MAGPARAM | LIST |  | true |  MAGPARAM(\ARTIFACT FORMAT\) MAGPARAM(\ARTIFACT TYPE\) MAGPARAM(\FILE EXTENSION\) MAGPARAM(\ACTIVE\) MAGPARAM(\RETENTION POLICY\) | 