---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; MAGV UPDATE SOP 


 ## VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}MAGV UPDATE SOP{:/}
 tag | {::nomarkdown}UPDSOP{:/}
 routine | [MAGVRS21](http://code.osehra.org/dox/Routine_MAGVRS21_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}This RPC allows an IMAGE SOP INSTANCE File (#2005.64) entry to be updated.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}SOPATTS{:/} | {::nomarkdown}LIST{:/} |  |  | {::nomarkdown}Input parameters are name-value pairs sent as successive integersubscripts in an array that should be passed in by reference as the secondargument to entry point UPDSOP^MAGVRS21.  The first argument willcontain the returned value in an array that should also be passed byreference.  The values passed in should be in the format <fname>`<value>, where<fname> is a field name in the IMAGE SOP INSTANCE File (#2005.64) and <value>is the value to which that field should be set.{:/} | 
| {::nomarkdown}OVERRIDE{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}This parameter overrides parent IEN checking.{:/} | {::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 14th 2017, 7:36:25 am</p>{:/}