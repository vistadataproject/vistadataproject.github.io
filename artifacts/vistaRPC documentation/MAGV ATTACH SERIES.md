---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; MAGV ATTACH SERIES 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}MAGV ATTACH SERIES{:/}
 tag | {::nomarkdown}ATSERIES{:/}
 routine | [MAGVRS01](http://code.osehra.org/dox/Routine_MAGVRS01_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}This RPC allows a series to be attached to a study.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}SERIESATT{:/} | {::nomarkdown}LIST{:/} |  |  | {::nomarkdown}Input parameters are name-value pairs sent as successive integersubscripts in an array that should be passed in by reference as the secondargument to entry point ATSERIES^MAGVRS01.  The first argument willcontain the returned value in an array that should also be passed byreference.  The values passed in should be in the format <fname>`<value>, where<fname> is a field name in the IMAGE SERIES File (#2005.63) and <value>is the value to which that field should be set.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 15th 2017, 12:59:51 am</p>{:/}