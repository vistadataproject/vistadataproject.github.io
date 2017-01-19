---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; MAGV ATTACH SOP 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}MAGV ATTACH SOP{:/}
 tag | {::nomarkdown}ATSOP{:/}
 routine | [MAGVRS11](http://code.osehra.org/dox/Routine_MAGVRS11_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}This RPC allows a SOP to be attached to a series.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}SOPATT{:/} | {::nomarkdown}LIST{:/} |  |  |  | 
| {::nomarkdown}MAGV ATT{:/} |  |  |  | {::nomarkdown}Input parameters are name-value pairs sent as successive integersubscripts in an array that should be passed in by reference as the secondargument to entry point ATSOP^MAGVRS11.  The first argument willcontain the returned value in an array that should also be passed byreference.  The values passed in should be in the format <fname>`<value>, where<fname> is a field name in the IMAGE SOP INSTANCE File (#2005.64) and <value>is the value to which that field should be set.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 9:28:51 am</p>{:/}