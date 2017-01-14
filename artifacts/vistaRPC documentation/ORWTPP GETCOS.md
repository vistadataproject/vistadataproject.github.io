---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORWTPP GETCOS 


 ## VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWTPP GETCOS{:/}
 tag | {::nomarkdown}GETCOS{:/}
 routine | [ORWTPP](http://code.osehra.org/dox/Routine_ORWTPP_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | 


## MUMPS Method description

 property | value 
 --- | --- 
 Method | GETCOS^[ORWTPP](http://code.osehra.org/dox/Routine_ORWTPP_source.html)
 Method comment | RPC
 First comment | {::nomarkdown}get elgible cosigners for current user{:/}
 Input parameters | {::nomarkdown}FROM<br/>DIR<br/>VISITORS{:/}
 Code | ```  I '$G(VISITORS) S VISITORS=""<br/> D GETCOS^ORWTPN(.VALUES,DUZ,FROM,DIR,VISITORS)```{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 14th 2017, 7:36:25 am</p>{:/}