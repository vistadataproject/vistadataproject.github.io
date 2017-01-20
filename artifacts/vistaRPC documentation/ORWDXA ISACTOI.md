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

 Property | Value 
 --- | --- 
 Method | ISACTOI^[ORWDXA](http://code.osehra.org/dox/Routine_ORWDXA_source.html)
 Method comment | Is ord item active?
 Input parameters | {::nomarkdown}OI{:/}
 Code | {::nomarkdown}  I $G(^ORD(101.43,+OI,.1)),^(.1)'>$$NOW^XLFDT D<br> . S ORY=$P($G(^ORD(101.43,OI,0)),U)_" has been inactivated and may not be ordered anymore."{:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rODMeds.pas">Orders/rODMeds.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 10:14:32 pm</p>{:/}