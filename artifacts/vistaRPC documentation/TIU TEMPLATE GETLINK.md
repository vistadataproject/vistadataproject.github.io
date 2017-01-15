---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; TIU TEMPLATE GETLINK 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}TIU TEMPLATE GETLINK{:/}
 tag | {::nomarkdown}GETLINK{:/}
 routine | [TIUSRVT1](http://code.osehra.org/dox/Routine_TIUSRVT1_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Returns template linked to a specific title or reason for request.{:/}


### MUMPS Method description

 property | value 
 --- | --- 
 Method | GETLINK^[TIUSRVT1](http://code.osehra.org/dox/Routine_TIUSRVT1_source.html)
 Method comment | Returns template linked to title or reason for request
 Input parameters | {::nomarkdown}LINK{:/}
 Code | {::nomarkdown}  N IDX<br> S ORY="",IDX=$O(^TIU(8927,"AL",LINK,0))<br> I +IDX,$P($G(^TIU(8927,IDX,0)),U,4)'="I" S ORY=$$NODEDATA^TIUSRVT(IDX){:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 15th 2017, 12:59:50 am</p>{:/}