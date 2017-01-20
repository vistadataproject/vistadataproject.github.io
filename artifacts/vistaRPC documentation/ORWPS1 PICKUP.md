---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWPS1 PICKUP 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWPS1 PICKUP{:/}
 tag | {::nomarkdown}PICKUP{:/}
 routine | [ORWPS1](http://code.osehra.org/dox/Routine_ORWPS1_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Returns default for refill location (mail or window).{:/}


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | PICKUP^[ORWPS1](http://code.osehra.org/dox/Routine_ORWPS1_source.html)
 Method comment | Return default for refill location
 Code | {::nomarkdown}  I $D(^PSX(550,"C")) S Y="M"<br> E  S Y="W"{:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rMeds.pas">rMeds.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 7:40:08 am</p>{:/}