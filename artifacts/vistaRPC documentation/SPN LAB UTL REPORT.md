---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; SPN LAB UTL REPORT 

 property | value 
--- | --- 
 label | SPN LAB UTL REPORT
 tag | RPC
 routine | [SPNLRK7](http://code.osehra.org/dox/Routine_SPNLRK7_source.html)
 return value type | GLOBAL ARRAY
 description | 

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | FDATE | LITERAL |  |  | DATE TO START FROM | 
| vs:Input_Parameter-8994_02 | TDATE | LITERAL |  |  | DATE TO END AT | 
| vs:Input_Parameter-8994_02 | QLIST | LITERAL |  |  | Minimum number of results reported for a test to be listed | 
| vs:Input_Parameter-8994_02 | HIUSERS | LITERAL |  |  | Number of highest users to identify | 
| vs:Input_Parameter-8994_02 | PTLIST | LIST |  |  | PATIENTS DFN IN LIST FORMAT ICN^ICN^ICN^ICN^ICN........ | 