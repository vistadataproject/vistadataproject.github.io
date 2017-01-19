---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDXA ISACTOI 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWDXA ISACTOI{:/}
 tag | {::nomarkdown}ISACTOI{:/}
 routine | [ORWDXA](http://code.osehra.org/dox/Routine_ORWDXA_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 


### MUMPS Method description

 property | value 
 --- | --- 
 Method | ISACTOI^[ORWDXA](http://code.osehra.org/dox/Routine_ORWDXA_source.html)
 Method comment | Is ord item active?
 Input parameters | {::nomarkdown}OI{:/}
 Code | {::nomarkdown}  I $G(^ORD(101.43,+OI,.1)),^(.1)'>$$NOW^XLFDT D<br> . S ORY=$P($G(^ORD(101.43,OI,0)),U)_" has been inactivated and may not be ordered anymore."{:/}


### CPRS

[Orders/rODMeds.pas](https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rODMeds.pas")

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 9:21:34 am</p>{:/}