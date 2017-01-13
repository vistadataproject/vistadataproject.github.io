---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; DSIR PAYMENT 

 property | value 
--- | --- 
 label | {::nomarkdown}DSIR PAYMENT{:/}
 tag | {::nomarkdown}PAYMENT{:/}
 routine | [DSIRBIL](http://code.osehra.org/dox/Routine_DSIRBIL_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This RPC is used to record payments on ROI bills{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}BILN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}999{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Internal Bill Number to file 19620.2{:/} | 
| {::nomarkdown}AMNT{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}999{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Payment amount - Numeric dollar value or 'W' to indicate fee is to be Waived{:/} | 




 Generated on January 13th 2017, 7:11:27 am