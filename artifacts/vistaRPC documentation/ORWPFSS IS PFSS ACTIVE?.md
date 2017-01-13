---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ORWPFSS IS PFSS ACTIVE? 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWPFSS IS PFSS ACTIVE?{:/}
 tag | {::nomarkdown}PFSSACTV{:/}
 routine | [ORWPFSS](http://code.osehra.org/dox/Routine_ORWPFSS_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 


### Method description

 property | value 
 --- | --- 
 Method comment | Is PFSS active for this system/user/etc?
 Leading comment lines | {::nomarkdown}RPC called by Delphi to determine if passing visit string<br/>1 = PFSS active - pass visit string with order<br/>0 = PFSS not active - do not pass visit string<br/>$$SWSTAT^IBBAPI() WILL BE RELEASED IN IB*2*286, as per E.Zeigler<br/>Check for IB patch{:/}




 Generated on January 13th 2017, 6:24:32 am