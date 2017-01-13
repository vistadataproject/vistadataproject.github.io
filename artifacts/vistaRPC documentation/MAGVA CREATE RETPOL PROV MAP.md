---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; MAGVA CREATE RETPOL PROV MAP 

 property | value 
--- | --- 
 label | {::nomarkdown}MAGVA CREATE RETPOL PROV MAP{:/}
 tag | {::nomarkdown}ADDRPPM{:/}
 routine | [MAGVAC01](http://code.osehra.org/dox/Routine_MAGVAC01_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Add a new record to RETENTION POLICY STORAGE PROVIDER MAP file (#2006.923){:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}MAGPARAM{:/} | {::nomarkdown}LIST{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown} MAGPARAM(\RETENTION POLICY\) = Pointer to RETENTION POLICY file (#2006.914) MAGPARAM(\STORAGE PROVIDER\) = Pointer to STORAGE PROVIDER file (#2006.917) MAGPARAM(\SOURCE PLACE\) = Pointer to IMAGING SITE PARAMETERS file (#2006.1) MAGPARAM(\SYNCHRONOUS\) = 0/1 MAGPARAM(\OFFSITE\) = 0/1{:/} | 




 Generated on January 13th 2017, 6:55:29 am