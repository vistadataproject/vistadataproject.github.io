---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAGVA CREATE RETPOLFF 

 property | value 
--- | --- 
 label | MAGVA CREATE RETPOLFF
 tag | ADDARPF
 routine | [MAGVAC01](http://code.osehra.org/dox/Routine_MAGVAC01_source.html)
 return value type | SINGLE VALUE
 description | Add a new record to RETENTION POLICY FULFILLMENT file (#2006.922)

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | MAGPARAM | LIST |  | true |  MAGPARAM(\ARTIFACT RETENTION POLICY\)  = A pointer to ARTIFACT RETENTION POLICY file (#2006.921) MAGPARAM(\ARTIFACT INSTANCE\)   = A pointer to ARTIFACT INSTANCE file (#2006.918) | 