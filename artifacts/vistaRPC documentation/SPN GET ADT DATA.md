---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; SPN GET ADT DATA 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}SPN GET ADT DATA{:/}
 tag | {::nomarkdown}COL{:/}
 routine | [SPNJRPPM](http://code.osehra.org/dox/Routine_SPNJRPPM_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}Returns ADT Patient Movement entries for the requested date(s).{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}ICNLST{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}List of patient's ICNs (ICN^ICN^ICN^ICN^ICN...){:/} | 
| {::nomarkdown}ACTDATE{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}Date to begin ADT entry search from.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 4:54:07 am</p>{:/}