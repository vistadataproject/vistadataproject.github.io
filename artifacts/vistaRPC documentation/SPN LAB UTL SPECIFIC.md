---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; SPN LAB UTL SPECIFIC 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}SPN LAB UTL SPECIFIC{:/}
 tag | {::nomarkdown}RPC{:/}
 routine | [SPNLRR7](http://code.osehra.org/dox/Routine_SPNLRR7_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | 

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}FDATE{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}DATE TO START REPORT{:/} | 
| {::nomarkdown}TDATE{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}DATE TO END AT{:/} | 
| {::nomarkdown}HIUSERS{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}0 JUST LABS AND STATS1 TO SEE PATIENT USAGE DATA{:/} | 
| {::nomarkdown}VALUES{:/} | {::nomarkdown}LIST{:/} |  |  | {::nomarkdown}EXAMPLE OF WHAT IS IN THE QLIST        S QLIST(605143)=\HGB\        S QLIST(605144)=\HCT\        S QLIST(605682)=\K (OR)\{:/} | 
| {::nomarkdown}PTLIST{:/} | {::nomarkdown}LIST{:/} |  |  | {::nomarkdown}ICN^ICN^ICN^.... Example                  10073051^10052887^10147361^20638^8368^10005030^10017220{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 10:14:32 pm</p>{:/}