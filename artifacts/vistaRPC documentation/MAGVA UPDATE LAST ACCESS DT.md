---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; MAGVA UPDATE LAST ACCESS DT 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}MAGVA UPDATE LAST ACCESS DT{:/}
 tag | {::nomarkdown}UPDLADT{:/}
 routine | [MAGVAU01](http://code.osehra.org/dox/Routine_MAGVAU01_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown} Set the Last Access Date/Time to current date/time for artifact instance records in ARTIFACT INSTANCE file (#2006.918) and ARTIFACT file (#2006.916){:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}MAGPARAM{:/} | {::nomarkdown}LIST{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown} MAGPARAM(\PK\) = PK (IEN) of the record in ARTIFACT INSTANCE file (#2006.918){:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 26th 2017, 8:30:46 pm</p>{:/}