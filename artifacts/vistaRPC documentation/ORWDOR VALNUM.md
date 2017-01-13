---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDOR VALNUM 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWDOR VALNUM{:/}
 tag | {::nomarkdown}VALNUM{:/}
 routine | [ORWDOR](http://code.osehra.org/dox/Routine_ORWDOR_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Validates a numeric entry.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | return error if invalid number
 Input Parameters | {::nomarkdown}X<br/>DOM{:/}
 Lines | ```{::nomarkdown} N LOW,HIGH,DEC<br/> S LOW=$P(DOM,":"),HIGH=$P(DOM,":",2),DEC=$P(DOM,":",3),ERR=0<br/> I $L($P(X,"."))>24 S ERR="1^Exceeded maximum number of 24 characters" Q<br/> I X'?.1"-".N.1".".N S ERR="1^Entry must be numeric" Q<br/> I X>HIGH!(X<LOW) S ERR="1^Out of Range - value must be between "_LOW_" and "_HIGH_" inclusive" Q<br/> I $L($P(+X,".",2))>DEC D<br/> . I DEC=0 S ERR="1^No decimal places allowed"<br/> . E  I DEC=1 S ERR="1^Only one decimal place allowed"<br/> . E  S ERR="1^No more than "_DEC_" decimal places allowed"```{:/}




 Generated on January 13th 2017, 7:11:27 am