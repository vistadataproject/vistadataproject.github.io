---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAGVA CREATE AINSTANCE 

 property | value 
--- | --- 
 label | MAGVA CREATE AINSTANCE
 tag | ADDAINST
 routine | [MAGVAC01](http://code.osehra.org/dox/Routine_MAGVAC01_source.html)
 return value type | SINGLE VALUE
 description | Add a record to ARTIFACT INSTANCE file (#2006.918)

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| MAGPARAM | LIST |  | true |  MAGPARAM(\ARTIFACT\) MAGPARAM(\STORAGE PROVIDER\) MAGPARAM(\FILEREF\) MAGPARAM(\DISK VOLUME\) MAGPARAM(\FILEPATH\) | 
| MAGURL | LIST |  | true | MAGURL(1..n) = URL value  URL value is split in individual records in MAGURL | 




 Generated on January 11th 2017, 7:15:04 am