---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWTPP GETCOS 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWTPP GETCOS{:/}
 tag | {::nomarkdown}GETCOS{:/}
 routine | [ORWTPP](http://code.osehra.org/dox/Routine_ORWTPP_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | 


### Method description

 property | value 
 --- | --- 
 Method comment | RPC
 Input Parameters | {::nomarkdown}FROM<br/>DIR<br/>VISITORS{:/}
 Lines | ```{::nomarkdown} I '$G(VISITORS) S VISITORS=""<br/> D GETCOS^ORWTPN(.VALUES,DUZ,FROM,DIR,VISITORS)```{:/}
 Leading comment lines | {::nomarkdown}get elgible cosigners for current user{:/}




 Generated on January 13th 2017, 7:11:27 am