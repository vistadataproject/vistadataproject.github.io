---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIF BATCH CREATE 

 property | value 
--- | --- 
 label | {::nomarkdown}DSIF BATCH CREATE{:/}
 tag | {::nomarkdown}NEWBAT{:/}
 routine | [DSIFBAT1](http://code.osehra.org/dox/Routine_DSIFBAT1_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}OBLIGATION{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}30{:/} | {::nomarkdown}true{:/} |  | 
| {::nomarkdown}TYPE{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}5{:/} | {::nomarkdown}true{:/} |  | 
| {::nomarkdown}CONTROL POINT{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}4{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Control point, may be entered as \038\ or the actual IEN \38\{:/} | 
| {::nomarkdown}BATCH EMEMPT{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}2{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Optional (not used) for B3 batches,Required for B9 batches, must be \Y\ or \N\{:/} | 




 Generated on January 13th 2017, 6:24:32 am