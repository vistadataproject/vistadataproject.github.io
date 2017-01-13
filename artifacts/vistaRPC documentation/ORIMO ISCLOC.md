---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORIMO ISCLOC 

 property | value 
--- | --- 
 label | {::nomarkdown}ORIMO ISCLOC{:/}
 tag | {::nomarkdown}ISCLOC{:/}
 routine | [ORIMO](http://code.osehra.org/dox/Routine_ORIMO_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 


### Method description

 property | value 
 --- | --- 
 Method comment | Is it a clinical location
 Input Parameters | {::nomarkdown}ALOC{:/}
 Lines | {::nomarkdown} S ORY=0<br/> Q:'$D(^SC(+ALOC,0))<br/> I $P(^SC(+ALOC,0),U,3)="C" S ORY=1{:/}




 Generated on January 13th 2017, 7:15:28 am