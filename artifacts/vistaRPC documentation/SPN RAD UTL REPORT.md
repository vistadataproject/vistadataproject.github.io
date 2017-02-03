---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; SPN RAD UTL REPORT 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}SPN RAD UTL REPORT{:/}
 tag | {::nomarkdown}RPC{:/}
 routine | [SPNLRM7](http://code.osehra.org/dox/Routine_SPNLRM7_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | 

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}FDATE{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}DATE TO START COLLECTING DATA FROM{:/} | 
| {::nomarkdown}TDATE{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}DATE TO COLLECT DATA UP TO{:/} | 
| {::nomarkdown}MINPROC{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}Minimum number of procedures to display:  (1-99999){:/} | 
| {::nomarkdown}MINCOST{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}Minimum dollar cost of procedures to display:  (0-999){:/} | 
| {::nomarkdown}HIUSERS{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}Number of highest users to identify:  (0-100){:/} | 
| {::nomarkdown}PTLIST{:/} | {::nomarkdown}LIST{:/} |  |  | {::nomarkdown}DFN^DFN^DFN  354^1368^1514^1862^2171^2254^2389^2401^2459^2726^2800^3504^3726^3793^4072{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on February 3rd 2017, 7:02:05 am</p>{:/}