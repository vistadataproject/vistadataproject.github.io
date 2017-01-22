---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; MAGVA CREATE AINSTANCE 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}MAGVA CREATE AINSTANCE{:/}
 tag | {::nomarkdown}ADDAINST{:/}
 routine | [MAGVAC01](http://code.osehra.org/dox/Routine_MAGVAC01_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Add a record to ARTIFACT INSTANCE file (#2006.918){:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}MAGPARAM{:/} | {::nomarkdown}LIST{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown} MAGPARAM(\ARTIFACT\) MAGPARAM(\STORAGE PROVIDER\) MAGPARAM(\FILEREF\) MAGPARAM(\DISK VOLUME\) MAGPARAM(\FILEPATH\){:/} | 
| {::nomarkdown}MAGURL{:/} | {::nomarkdown}LIST{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}MAGURL(1..n) = URL value  URL value is split in individual records in MAGURL{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 22nd 2017, 3:10:57 am</p>{:/}