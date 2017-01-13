---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; DSIR RPT EXPEDITED PROCESSING 

 property | value 
--- | --- 
 label | {::nomarkdown}DSIR RPT EXPEDITED PROCESSING{:/}
 tag | {::nomarkdown}EXPRPT{:/}
 routine | [DSIROIR](http://code.osehra.org/dox/Routine_DSIROIR_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}THIS CALL PROVIDES DATA FOR THE EXPEDITED PROCESSING REPORT IN ROI{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}FRDT{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}7{:/} | {::nomarkdown}true{:/} | {::nomarkdown}FRDT - From Date - FileMan Format - No time{:/} | 
| {::nomarkdown}TODT{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}7{:/} | {::nomarkdown}true{:/} | {::nomarkdown}TODT To Date - FileMan Format - No time{:/} | 
| {::nomarkdown}DIV{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}15{:/} | {::nomarkdown}true{:/} | {::nomarkdown}DIV - Division number/Location number - defaults to DUZ(2){:/} | 




 Generated on January 13th 2017, 6:55:29 am