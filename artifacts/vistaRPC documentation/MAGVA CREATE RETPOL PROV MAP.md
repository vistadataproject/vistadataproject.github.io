---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAGVA CREATE RETPOL PROV MAP 

 property | value 
--- | --- 
 label | MAGVA CREATE RETPOL PROV MAP
 tag | ADDRPPM
 routine | [MAGVAC01](http://code.osehra.org/dox/Routine_MAGVAC01_source.html)
 return value type | SINGLE VALUE
 description | Add a new record to RETENTION POLICY STORAGE PROVIDER MAP file (#2006.923)

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| MAGPARAM | LIST |  | true |  MAGPARAM(\RETENTION POLICY\) = Pointer to RETENTION POLICY file (#2006.914) MAGPARAM(\STORAGE PROVIDER\) = Pointer to STORAGE PROVIDER file (#2006.917) MAGPARAM(\SOURCE PLACE\) = Pointer to IMAGING SITE PARAMETERS file (#2006.1) MAGPARAM(\SYNCHRONOUS\) = 0/1 MAGPARAM(\OFFSITE\) = 0/1 | 




 Generated on January 11th 2017, 7:15:04 am