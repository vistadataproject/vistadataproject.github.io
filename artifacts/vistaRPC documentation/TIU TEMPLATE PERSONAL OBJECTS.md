---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; TIU TEMPLATE PERSONAL OBJECTS 

 property | value 
--- | --- 
 label | {::nomarkdown}TIU TEMPLATE PERSONAL OBJECTS{:/}
 tag | {::nomarkdown}PERSOBJS{:/}
 routine | [TIUSRVT2](http://code.osehra.org/dox/Routine_TIUSRVT2_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns a list or Patient Data Objects allowed in Personal Templates.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Returns the list of Patient Data Objects that are
 Lines | ```{::nomarkdown} N SRV<br/> K TIUY<br/> D OBJACCUM(.TIUY,"USR")<br/> S SRV=$$GETSRV(DUZ)<br/> I +SRV D OBJACCUM(.TIUY,"SRV.`"_+$G(SRV))<br/> D OBJACCUM(.TIUY,"DIV")<br/> D OBJACCUM(.TIUY,"SYS")```{:/}
 Leading comment lines | {::nomarkdown}allowed to be used in Personal Templates{:/}




 Generated on January 13th 2017, 7:11:27 am