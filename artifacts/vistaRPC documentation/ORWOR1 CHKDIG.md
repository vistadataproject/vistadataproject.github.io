---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWOR1 CHKDIG 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWOR1 CHKDIG{:/}
 tag | {::nomarkdown}CHKDIG{:/}
 routine | [ORWOR1](http://code.osehra.org/dox/Routine_ORWOR1_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Returns true if an order requires a digital signature.{:/}


### MUMPS Method description

 property | value 
 --- | --- 
 Method | CHKDIG^[ORWOR1](http://code.osehra.org/dox/Routine_ORWOR1_source.html)
 Method comment | Check if Digital Signature is required
 Input parameters | {::nomarkdown}ORDER{:/}
 Code | {::nomarkdown}  N IFN,ACTION<br> S REQ=0,IFN=+ORDER,ACTION=$P(ORDER,";",2)<br> I +$P($G(^OR(100,+IFN,8,+ACTION,2)),U,5) S REQ=1{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 15th 2017, 12:59:50 am</p>{:/}