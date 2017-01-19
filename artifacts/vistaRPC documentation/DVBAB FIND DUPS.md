---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; DVBAB FIND DUPS 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}DVBAB FIND DUPS{:/}
 tag | {::nomarkdown}DUP{:/}
 routine | [DVBAB84](http://code.osehra.org/dox/Routine_DVBAB84_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}Find potential duplicates within the PATIENT File (#2) At least one of NAM, DOB, or SSN must be passedPossible matches are \better\ when more than one of these is passed{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}NAM{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}Name of possible patient{:/} | 
| {::nomarkdown}DOB{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}7{:/} |  | {::nomarkdown}Date of Birth of possible patient{:/} | 
| {::nomarkdown}SSN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}10{:/} |  | {::nomarkdown}Social Security Number of possible patient{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 8:55:11 am</p>{:/}