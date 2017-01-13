---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORQQPX LVREMLST 

 property | value 
--- | --- 
 label | {::nomarkdown}ORQQPX LVREMLST{:/}
 tag | {::nomarkdown}LVREMLST{:/}
 routine | [ORQQPX](http://code.osehra.org/dox/Routine_ORQQPX_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns Cover Sheet reminder settings{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Returns cover sheet reminders at a specified level
 Input Parameters | {::nomarkdown}LVL<br/>CLASS{:/}
 Lines | {::nomarkdown} D REMACCUM(.ORY,LVL,"Q","",$G(CLASS)){:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}LVL{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}Parameter Level setting{:/} | 
| {::nomarkdown}CLASS{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}Optional User Class IEN if level is CLASS{:/} | 




 Generated on January 13th 2017, 7:15:28 am