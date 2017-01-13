---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; TIU TEMPLATE GETLINK 

 property | value 
--- | --- 
 label | {::nomarkdown}TIU TEMPLATE GETLINK{:/}
 tag | {::nomarkdown}GETLINK{:/}
 routine | [TIUSRVT1](http://code.osehra.org/dox/Routine_TIUSRVT1_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Returns template linked to a specific title or reason for request.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Returns template linked to title or reason for request
 Input Parameters | {::nomarkdown}LINK{:/}
 Lines | ```{::nomarkdown} N IDX<br/> S ORY="",IDX=$O(^TIU(8927,"AL",LINK,0))<br/> I +IDX,$P($G(^TIU(8927,IDX,0)),U,4)'="I" S ORY=$$NODEDATA^TIUSRVT(IDX)```{:/}




 Generated on January 13th 2017, 7:11:27 am