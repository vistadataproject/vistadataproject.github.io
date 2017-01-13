---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; MAGV UPDATE IMAGE FILE 

 property | value 
--- | --- 
 label | {::nomarkdown}MAGV UPDATE IMAGE FILE{:/}
 tag | {::nomarkdown}UPDFILE{:/}
 routine | [MAGVRS31](http://code.osehra.org/dox/Routine_MAGVRS31_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}This RPC allows an IMAGE INSTANCE FILE file (#2005.65) entry to be updated.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}FILEATTS{:/} | {::nomarkdown}LIST{:/} |  |  | {::nomarkdown}Input parameters are name-value pairs sent as successive integersubscripts in an array that should be passed in by reference as the secondargument to entry point UPDFILE^MAGVRS31.  The first argument willcontain the returned value in an array that should also be passed byreference.  The values passed in should be in the format <fname>`<value>, where<fname> is a field name in the IMAGE INSTANCE FILE file (#2005.65) and <value>is the value to which that field should be set.{:/} | 
| {::nomarkdown}OVERRIDE{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}This parameter overrides parent IEN checking.{:/} | 




 Generated on January 13th 2017, 6:44:48 am