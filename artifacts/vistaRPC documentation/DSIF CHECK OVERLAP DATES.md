---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; DSIF CHECK OVERLAP DATES 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}DSIF CHECK OVERLAP DATES{:/}
 tag | {::nomarkdown}CHKOVLP{:/}
 routine | [DSIFNOT3](http://code.osehra.org/dox/Routine_DSIFNOT3_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This RPC checks the from and to dates to make sure they do not overlap with another request.  Logic copied from FBAAUTL2.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DFN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}99{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Patient File Pointer (File #2, Required){:/} | 
| {::nomarkdown}FBBEGDT{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}14{:/} | {::nomarkdown}true{:/} | {::nomarkdown}From Date to check (FM format, Required){:/} | 
| {::nomarkdown}FBENDDT{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}14{:/} | {::nomarkdown}true{:/} | {::nomarkdown}To Date (FM format, Optional){:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 22nd 2017, 3:23:03 am</p>{:/}