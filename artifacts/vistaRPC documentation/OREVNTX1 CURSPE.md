---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; OREVNTX1 CURSPE 

 property | value 
--- | --- 
 label | {::nomarkdown}OREVNTX1 CURSPE{:/}
 tag | {::nomarkdown}CURSPE{:/}
 routine | [OREVNTX1](http://code.osehra.org/dox/Routine_OREVNTX1_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 


### Method description

 property | value 
 --- | --- 
 Method comment | Return current treating specialty
 Input Parameters | {::nomarkdown}PTIFN{:/}
 Lines | {::nomarkdown} Q:'PTIFN<br/> N SPEC S SPEC=$$PT^DGPMOBS(PTIFN),ORY=""<br/> I SPEC'<0 S ORY=$P(SPEC,U,3)_U_$P(SPEC,U,2)_U_$P(SPEC,U) ;name^ien^obs flag{:/}




 Generated on January 13th 2017, 7:15:28 am