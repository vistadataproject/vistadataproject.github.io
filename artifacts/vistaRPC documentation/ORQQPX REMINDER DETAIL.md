---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ORQQPX REMINDER DETAIL 

 property | value 
--- | --- 
 label | {::nomarkdown}ORQQPX REMINDER DETAIL{:/}
 tag | {::nomarkdown}REMDET{:/}
 routine | [ORQQPX](http://code.osehra.org/dox/Routine_ORQQPX_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns the details of a clinical reminder.{:/}


### Method description

 property | value 
--- | --- 
 Method comment | return detail for a pt's clinical reminder
 Leading comment lines | ORY - return array
ORPT - patient DFN
ORIEN - clinical reminder (811.9 ien)

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}PATIENT ID{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Patient identifier from Patient file [#2].{:/} | 
| {::nomarkdown}CLINICAL REMINDER ID{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Clinical reminder identifier (ien) from PCE REMINDER/MAINTENANCE ITEM file[#811.9].{:/} | 




 Generated on January 13th 2017, 5:52:13 am