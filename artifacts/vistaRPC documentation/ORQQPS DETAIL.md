---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ORQQPS DETAIL 

 property | value 
--- | --- 
 label | {::nomarkdown}ORQQPS DETAIL{:/}
 tag | {::nomarkdown}DETAIL{:/}
 routine | [ORQQPS](http://code.osehra.org/dox/Routine_ORQQPS_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns the details of a medication order.{:/}


### Method description

 property | value 
--- | --- 
 Method comment | return detailed information for a drug

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}PATIENT ID{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Patient identifier from Patient file [#2].{:/} | 
| {::nomarkdown}MEDICATION ID{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}20{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Medication identifier as drawn from the medication consdensed list (ORQQPSLIST).  The first piece of the condensed list.  E.g. 31945R;O, 231156U;I,944382P;O{:/} | 




 Generated on January 13th 2017, 5:52:13 am