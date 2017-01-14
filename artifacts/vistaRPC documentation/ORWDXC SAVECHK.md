---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDXC SAVECHK 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWDXC SAVECHK{:/}
 tag | {::nomarkdown}SAVECHK{:/}
 routine | [ORWDXC](http://code.osehra.org/dox/Routine_ORWDXC_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Save order checks for session.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Save order checks for session
 Input Parameters | {::nomarkdown}ORVP<br/>RSN<br/>LST{:/}
 Lines | {::nomarkdown} N ORCHECK,ORIFN S OK=1<br/> D LST2CHK<br/> I $L(RSN)>0 S ORCHECK("OK")=RSN<br/> S ORIFN=0 F  S ORIFN=$O(ORCHECK(ORIFN)) Q:'ORIFN  D OC^ORCSAVE2{:/}




 Generated on January 13th 2017, 7:15:27 am