---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; MAGVA CREATE PROVAVAILTY 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}MAGVA CREATE PROVAVAILTY{:/}
 tag | {::nomarkdown}ADDPA{:/}
 routine | [MAGVAC01](http://code.osehra.org/dox/Routine_MAGVAC01_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Add a new record to PROVIDER AVAILABILITY file (#2006.924){:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}MAGPARAM{:/} | {::nomarkdown}LIST{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}    MAGPARAM(\STORAGE PROVIDER\)      = A pointer to STORAGE PROVIDER file (#2006.917)    MAGPARAM(\SOURCE PLACE\)  = A pointer to IMAGING SITE PARAMETERS file (#2006.1)    MAGPARAM(\START TIME\)    =  DateTime in IDF format (YYYYMMDD.HHMMSS)    MAGPARAM(\END TIME\)      = DateTime in IDF format (YYYYMMDD.HHMMSS){:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 21st 2017, 4:20:10 am</p>{:/}