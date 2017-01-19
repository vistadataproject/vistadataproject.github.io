---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; DSIR PRIORTY REPORT 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}DSIR PRIORTY REPORT{:/}
 tag | {::nomarkdown}PRIRTY{:/}
 routine | [DSIROIR2](http://code.osehra.org/dox/Routine_DSIROIR2_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}This RPC returns the data for the High Priority Request Report.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}START DATE{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}7{:/} | {::nomarkdown}true{:/} | {::nomarkdown}FileMan date to start report.{:/} | 
| {::nomarkdown}END DATE{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}7{:/} | {::nomarkdown}true{:/} | {::nomarkdown}FileMan date to report through, defaults to current day.{:/} | 
| {::nomarkdown}DIVISION(S){:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}999{:/} | {::nomarkdown}true{:/} | {::nomarkdown}'^' delimited string of internal division numbers to use for multi-divisional reporting. If string is null only the division of the user or all if user holds the DSIR MDIV key.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 8:55:11 am</p>{:/}