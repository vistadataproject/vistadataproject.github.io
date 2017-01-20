---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWPT TOP 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWPT TOP{:/}
 tag | {::nomarkdown}TOP{:/}
 routine | [ORWPT](http://code.osehra.org/dox/Routine_ORWPT_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns the last selected patient by the defined user.{:/}


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | TOP^[ORWPT](http://code.osehra.org/dox/Routine_ORWPT_source.html)
 Method comment | Return top for all patients list (last selected for now)
 Code | {::nomarkdown}  N IEN<br> S IEN=$G(^DISV(DUZ,"^DPT("))<br> I IEN S LST(1)=IEN_U_$P($G(^DPT(IEN,0)),U){:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rCore.pas">rCore.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 7:40:08 am</p>{:/}