---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWU VALIDSIG 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWU VALIDSIG{:/}
 tag | {::nomarkdown}VALIDSIG{:/}
 routine | [ORWU](http://code.osehra.org/dox/Routine_ORWU_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Validates a broker encrypted electronic signature.{:/}


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | VALIDSIG^[ORWU](http://code.osehra.org/dox/Routine_ORWU_source.html)
 Method comment | returns TRUE if valid electronic signature
 Input parameters | {::nomarkdown}X{:/}
 Code | {::nomarkdown}  S X=$$DECRYP^XUSRB1(X),ESOK=0                   ; network encrypted<br> D HASH^XUSHSHP<br> I X=$P($G(^VA(200,+DUZ,20)),U,4) S ESOK=1{:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rCore.pas">rCore.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 22nd 2017, 3:10:56 am</p>{:/}