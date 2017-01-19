---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; MAGV ATTACH STUDY 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}MAGV ATTACH STUDY{:/}
 tag | {::nomarkdown}ATSTUDY{:/}
 routine | [MAGVRS05](http://code.osehra.org/dox/Routine_MAGVRS05_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}This RPC allows a study to be attached to a patient and, optionally, a procedure.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}STUATTS{:/} | {::nomarkdown}LIST{:/} | {::nomarkdown}32000{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Input parameters are name-value pairs sent as successive integersubscripts in an array that should be passed in by reference as the secondargument to entry point ATSTUDY^MAGVRS05.  The first argument will containthe returned value in an array that should also be passed by reference. The values passed in should be in the format <fname>`<value>, where <fname> is a field name in the IMAGE STUDY File (#2005.62) and <value> is the value to which that field should be set.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 9:28:51 am</p>{:/}