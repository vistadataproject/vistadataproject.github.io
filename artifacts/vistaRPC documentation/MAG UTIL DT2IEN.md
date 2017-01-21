---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; MAG UTIL DT2IEN 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}MAG UTIL DT2IEN{:/}
 tag | {::nomarkdown}DTRANGE{:/}
 routine | [MAGSHEC](http://code.osehra.org/dox/Routine_MAGSHEC_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}This Remote Procedure uses a date range to find an IEN in the IMAGE File (#2005){:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DATE{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}36{:/} | {::nomarkdown}true{:/} | {::nomarkdown}DATE for IMAGE file (#2005) IEN search by Image Saved Date{:/} | 
| {::nomarkdown}LIMIT{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}LIMIT - 0: LIMIT ONE YEAR RANGE        1: NONE{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 21st 2017, 7:57:53 am</p>{:/}