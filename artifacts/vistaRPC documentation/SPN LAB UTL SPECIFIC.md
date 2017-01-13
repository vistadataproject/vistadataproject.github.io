---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; SPN LAB UTL SPECIFIC 

 property | value 
--- | --- 
 label | {::nomarkdown}SPN LAB UTL SPECIFIC{:/}
 tag | {::nomarkdown}RPC{:/}
 routine | [SPNLRR7](http://code.osehra.org/dox/Routine_SPNLRR7_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | 

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}FDATE{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}DATE TO START REPORT{:/} | 
| {::nomarkdown}TDATE{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}DATE TO END AT{:/} | 
| {::nomarkdown}HIUSERS{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}0 JUST LABS AND STATS1 TO SEE PATIENT USAGE DATA{:/} | 
| {::nomarkdown}VALUES{:/} | {::nomarkdown}LIST{:/} |  |  | {::nomarkdown}EXAMPLE OF WHAT IS IN THE QLIST        S QLIST(605143)=\HGB\        S QLIST(605144)=\HCT\        S QLIST(605682)=\K (OR)\{:/} | 
| {::nomarkdown}PTLIST{:/} | {::nomarkdown}LIST{:/} |  |  | {::nomarkdown}ICN^ICN^ICN^.... Example                  10073051^10052887^10147361^20638^8368^10005030^10017220{:/} | 




 Generated on January 13th 2017, 6:15:57 am