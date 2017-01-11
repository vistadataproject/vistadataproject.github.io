---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; SPN LAB UTL SPECIFIC 

 property | value 
--- | --- 
 label | SPN LAB UTL SPECIFIC
 tag | RPC
 routine | [SPNLRR7](http://code.osehra.org/dox/Routine_SPNLRR7_source.html)
 return value type | GLOBAL ARRAY
 description | 

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| FDATE | LITERAL |  |  | DATE TO START REPORT | 
| TDATE | LITERAL |  |  | DATE TO END AT | 
| HIUSERS | LITERAL |  |  | 0 JUST LABS AND STATS1 TO SEE PATIENT USAGE DATA | 
| VALUES | LIST |  |  | EXAMPLE OF WHAT IS IN THE QLIST        S QLIST(605143)=\HGB\        S QLIST(605144)=\HCT\        S QLIST(605682)=\K (OR)\ | 
| PTLIST | LIST |  |  | ICN^ICN^ICN^.... Example                  10073051^10052887^10147361^20638^8368^10005030^10017220 | 




Generated on January 11th 2017, 6:34:23 am