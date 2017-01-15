---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDFH ATTR 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWDFH ATTR{:/}
 tag | {::nomarkdown}ATTR{:/}
 routine | [ORWDFH](http://code.osehra.org/dox/Routine_ORWDFH_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}For a diet order, this RPC returns:  Orderable Item^Text^Type^Precedence^AskExpire {:/}


### MUMPS Method description

 property | value 
 --- | --- 
 Method | ATTR^[ORWDFH](http://code.osehra.org/dox/Routine_ORWDFH_source.html)
 Method comment | Return OI^Text^Type^Precedence^AskExpire for a diet
 Input parameters | {::nomarkdown}OI{:/}
 Code | {::nomarkdown}  I $G(^ORD(101.43,OI,.1)),^(.1)'>$$NOW^XLFDT S REC="0^"_$P($G(^ORD(101.43,OI,0)),U)_" has been inactivated and may not be ordered anymore." Q<br> S REC=OI_U_$P($G(^ORD(101.43,OI,0)),U)_U_$G(^("FH")){:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 15th 2017, 12:59:50 am</p>{:/}