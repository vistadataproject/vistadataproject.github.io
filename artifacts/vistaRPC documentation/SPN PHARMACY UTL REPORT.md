---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; SPN PHARMACY UTL REPORT 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}SPN PHARMACY UTL REPORT{:/}
 tag | {::nomarkdown}RPC{:/}
 routine | [SPNLRL7](http://code.osehra.org/dox/Routine_SPNLRL7_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | 

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}FDATE{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}Date to start from.  mm/dd/yyyy.{:/} | 
| {::nomarkdown}COST{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}Value must be either ACTUAL OR CURRENT.{:/} | 
| {::nomarkdown}MINCOST{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}Minimum dollar cost of dispensed fills to display:  (0-9999999){:/} | 
| {::nomarkdown}MINFILL{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}Minimum number of fills to display:  (1-999999){:/} | 
| {::nomarkdown}PTLIST{:/} | {::nomarkdown}LIST{:/} |  |  | {::nomarkdown}ICN^ICN^ICN{:/} | 
| {::nomarkdown}TDATE{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}Date to end collection.  mm/dd/yyyy.{:/} | 
| {::nomarkdown}HIUSERS{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}Number of highest users to identify:  (0-100){:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 25th 2017, 2:31:55 am</p>{:/}