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

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | FDATE | LITERAL |  |  | DATE TO START REPORT | 
| vs:Input_Parameter-8994_02 | TDATE | LITERAL |  |  | DATE TO END AT | 
| vs:Input_Parameter-8994_02 | HIUSERS | LITERAL |  |  | 0 JUST LABS AND STATS1 TO SEE PATIENT USAGE DATA | 
| vs:Input_Parameter-8994_02 | VALUES | LIST |  |  | EXAMPLE OF WHAT IS IN THE QLIST        S QLIST(605143)=\HGB\        S QLIST(605144)=\HCT\        S QLIST(605682)=\K (OR)\ | 
| vs:Input_Parameter-8994_02 | PTLIST | LIST |  |  | ICN^ICN^ICN^.... Example                  10073051^10052887^10147361^20638^8368^10005030^10017220 | 