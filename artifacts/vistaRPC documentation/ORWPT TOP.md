---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWPT TOP 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWPT TOP{:/}
 tag | {::nomarkdown}TOP{:/}
 routine | [ORWPT](http://code.osehra.org/dox/Routine_ORWPT_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns the last selected patient by the defined user.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Return top for all patients list (last selected for now)
 Lines | ```{::nomarkdown} N IEN<br/> S IEN=$G(^DISV(DUZ,"^DPT("))<br/> I IEN S LST(1)=IEN_U_$P($G(^DPT(IEN,0)),U)```{:/}




 Generated on January 13th 2017, 7:11:26 am