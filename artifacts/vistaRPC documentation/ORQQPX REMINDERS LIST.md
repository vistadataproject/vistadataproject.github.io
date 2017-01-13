---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ORQQPX REMINDERS LIST 

 property | value 
--- | --- 
 label | {::nomarkdown}ORQQPX REMINDERS LIST{:/}
 tag | {::nomarkdown}REMIND{:/}
 routine | [ORQQPX](http://code.osehra.org/dox/Routine_ORQQPX_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns a list of clinical reminders.{:/}


### Method description

 property | value 
--- | --- 
 Method comment | return pt's currently due PCE clinical reminders
 Leading comment lines | in the format file 811.9 ien^reminder print name^date due^last occur.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}PATIENT ID{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Patient identifier (DFN) from patient file [#2].{:/} | 




 Generated on January 13th 2017, 5:52:13 am