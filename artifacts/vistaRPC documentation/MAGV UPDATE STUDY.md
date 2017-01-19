---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; MAGV UPDATE STUDY 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}MAGV UPDATE STUDY{:/}
 tag | {::nomarkdown}UPDSTUDY{:/}
 routine | [MAGVRS01](http://code.osehra.org/dox/Routine_MAGVRS01_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}This RPC allows an IMAGE STUDY File (#2005.62) entry to be updated.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}STUDYATTS{:/} | {::nomarkdown}LIST{:/} |  |  | {::nomarkdown}Input parameters are name-value pairs sent as successive integersubscripts in an array that should be passed in by reference as the secondargument to entry point UPDSTUDY^MAGVRS01.  The first argument willcontain the returned value in an array that should also be passed byreference.  The values passed in should be in the format <fname>`<value>, where<fname> is a field name in the IMAGE STUDY File (#2005.62) and <value>is the value to which that field should be set.{:/} | 
| {::nomarkdown}OVERRIDE{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}This parameter overrides parent IEN checking.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 8:55:12 am</p>{:/}