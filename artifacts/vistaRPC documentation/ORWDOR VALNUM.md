---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDOR VALNUM 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWDOR VALNUM{:/}
 tag | {::nomarkdown}VALNUM{:/}
 routine | [ORWDOR](http://code.osehra.org/dox/Routine_ORWDOR_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Validates a numeric entry.{:/}


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | VALNUM^[ORWDOR](http://code.osehra.org/dox/Routine_ORWDOR_source.html)
 Method comment | return error if invalid number
 Input parameters | {::nomarkdown}X, DOM{:/}
 Code | {::nomarkdown}  N LOW,HIGH,DEC<br> S LOW=$P(DOM,":"),HIGH=$P(DOM,":",2),DEC=$P(DOM,":",3),ERR=0<br> I $L($P(X,"."))>24 S ERR="1^Exceeded maximum number of 24 characters" Q<br> I X'?.1"-".N.1".".N S ERR="1^Entry must be numeric" Q<br> I X>HIGH!(X<LOW) S ERR="1^Out of Range - value must be between "_LOW_" and "_HIGH_" inclusive" Q<br> I $L($P(+X,".",2))>DEC D<br> . I DEC=0 S ERR="1^No decimal places allowed"<br> . E  I DEC=1 S ERR="1^Only one decimal place allowed"<br> . E  S ERR="1^No more than "_DEC_" decimal places allowed"{:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rODBase.pas">Orders/rODBase.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 10:14:32 pm</p>{:/}