---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; DSIV PATIENT INSURANCE CHECK 

 property | value 
--- | --- 
 label | {::nomarkdown}DSIV PATIENT INSURANCE CHECK{:/}
 tag | {::nomarkdown}CKINS{:/}
 routine | [DSIVIC1](http://code.osehra.org/dox/Routine_DSIVIC1_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Checks insurance for a single patient.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DFN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}20{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Patient Internal Entry Number.{:/} | 
| {::nomarkdown}DAYS{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}10{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Number of days prior to today for last verified check (default=182).{:/} | 




 Generated on January 13th 2017, 6:55:29 am