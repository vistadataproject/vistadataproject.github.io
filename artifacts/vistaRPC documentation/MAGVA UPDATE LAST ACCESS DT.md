---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAGVA UPDATE LAST ACCESS DT 

 property | value 
--- | --- 
 label | MAGVA UPDATE LAST ACCESS DT
 tag | UPDLADT
 routine | [MAGVAU01](http://code.osehra.org/dox/Routine_MAGVAU01_source.html)
 return value type | SINGLE VALUE
 description |  Set the Last Access Date/Time to current date/time for artifact instance records in ARTIFACT INSTANCE file (#2006.918) and ARTIFACT file (#2006.916)

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | MAGPARAM | LIST |  | true |  MAGPARAM(\PK\) = PK (IEN) of the record in ARTIFACT INSTANCE file (#2006.918) | 