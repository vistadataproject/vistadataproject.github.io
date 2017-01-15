---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; OOPS NEEDLESTICK LOG 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}OOPS NEEDLESTICK LOG{:/}
 tag | {::nomarkdown}NSTICK{:/}
 routine | [OOPSGUIF](http://code.osehra.org/dox/Routine_OOPSGUIF_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}This broker call retrieves the data necessary to produce the Log ofNeedlestick report.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}INPUT{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}256{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This parameter consists of 4 parts, the Start Date and End Date for the report, the Station(s) to be included on the report, and whether or not to include names on the report.  The parameter format is STARTDATE^ENDDATE^STATION^Y (or 'N'o). {:/} | 
| {::nomarkdown}CALL{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}30{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This parameter will indicate which menu the report was called from.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 15th 2017, 12:59:50 am</p>{:/}