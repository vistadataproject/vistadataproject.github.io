---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; DSIR RPT EXPEDITED PROCESSING 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}DSIR RPT EXPEDITED PROCESSING{:/}
 tag | {::nomarkdown}EXPRPT{:/}
 routine | [DSIROIR](http://code.osehra.org/dox/Routine_DSIROIR_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}THIS CALL PROVIDES DATA FOR THE EXPEDITED PROCESSING REPORT IN ROI{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}FRDT{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}7{:/} | {::nomarkdown}true{:/} | {::nomarkdown}FRDT - From Date - FileMan Format - No time{:/} | 
| {::nomarkdown}TODT{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}7{:/} | {::nomarkdown}true{:/} | {::nomarkdown}TODT To Date - FileMan Format - No time{:/} | 
| {::nomarkdown}DIV{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}15{:/} | {::nomarkdown}true{:/} | {::nomarkdown}DIV - Division number/Location number - defaults to DUZ(2){:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 26th 2017, 2:53:14 am</p>{:/}