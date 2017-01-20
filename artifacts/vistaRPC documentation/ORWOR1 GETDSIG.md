---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWOR1 GETDSIG 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWOR1 GETDSIG{:/}
 tag | {::nomarkdown}GETDSIG{:/}
 routine | [ORWOR1](http://code.osehra.org/dox/Routine_ORWOR1_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Returns the digital signature of an existing order.{:/}


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | GETDSIG^[ORWOR1](http://code.osehra.org/dox/Routine_ORWOR1_source.html)
 Method comment | Get Digital Signature
 Input parameters | {::nomarkdown}ORDER{:/}
 Code | {::nomarkdown}  N IFN,ACTION<br> S SIG=0,IFN=+ORDER,ACTION=$P(ORDER,";",2)<br> I +$P($G(^OR(100,+IFN,8,+ACTION,2)),U,3) S SIG=$P(^(2),"^",3){:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="">NOT OSEHRA CPRS</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 7:40:09 am</p>{:/}