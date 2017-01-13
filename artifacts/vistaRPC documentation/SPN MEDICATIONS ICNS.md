---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; SPN MEDICATIONS ICNS 

 property | value 
--- | --- 
 label | {::nomarkdown}SPN MEDICATIONS ICNS{:/}
 tag | {::nomarkdown}COL{:/}
 routine | [SPNJRPDC](http://code.osehra.org/dox/Routine_SPNJRPDC_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}Returns list of ICNs of all patients prescribed a specific VA Drug Class during a given date range.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}FDATE{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}Date to begin Medications search{:/} | 
| {::nomarkdown}TDATE{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}Date to end Medications search{:/} | 
| {::nomarkdown}VADC{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}VA Drug Class list (array format){:/} | 
| {::nomarkdown}ICNLST{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}List of ICNs to search from{:/} | 




 Generated on January 13th 2017, 6:55:29 am