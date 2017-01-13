---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ORQQVI2 VITALS RATE CHECK 

 property | value 
--- | --- 
 label | {::nomarkdown}ORQQVI2 VITALS RATE CHECK{:/}
 tag | {::nomarkdown}RATECHK{:/}
 routine | [ORQQVI2](http://code.osehra.org/dox/Routine_ORQQVI2_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 


### Method description

 property | value 
--- | --- 
 Leading comment lines | Extrinsic function to validate the
rate for a particular measurement
Input
Variables:  ORQTYPE=Type of measurement (abbreviation
(req.)  from PCE Device Interface Specification).
ORQRATE=Measurement rate to be validated.
(req.)
ORQUNIT=Unit of measurement for rate, if specified.
(opt.)
Return value:  1 if rate is valid.
0 if rate is invalid.




 Generated on January 13th 2017, 5:52:13 am