---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; SPN RAD UTL REPORT 

 property | value 
--- | --- 
 label | SPN RAD UTL REPORT
 tag | RPC
 routine | [SPNLRM7](http://code.osehra.org/dox/Routine_SPNLRM7_source.html)
 return value type | GLOBAL ARRAY
 description | 

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| FDATE | LITERAL |  |  | DATE TO START COLLECTING DATA FROM | 
| TDATE | LITERAL |  |  | DATE TO COLLECT DATA UP TO | 
| MINPROC | LITERAL |  |  | Minimum number of procedures to display:  (1-99999) | 
| MINCOST | LITERAL |  |  | Minimum dollar cost of procedures to display:  (0-999) | 
| HIUSERS | LITERAL |  |  | Number of highest users to identify:  (0-100) | 
| PTLIST | LIST |  |  | DFN^DFN^DFN  354^1368^1514^1862^2171^2254^2389^2401^2459^2726^2800^3504^3726^3793^4072 | 