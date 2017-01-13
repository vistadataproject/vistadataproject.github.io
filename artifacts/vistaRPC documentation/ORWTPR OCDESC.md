---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWTPR OCDESC 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWTPR OCDESC{:/}
 tag | {::nomarkdown}OCDESC{:/}
 routine | [ORWTPR](http://code.osehra.org/dox/Routine_ORWTPR_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | 


### Method description

 property | value 
 --- | --- 
 Method comment | from RPC
 Input Parameters | {::nomarkdown}IEN{:/}
 Lines | {::nomarkdown} N CNT,LINE,NUM K TEXT<br/> S IEN=+$G(IEN) I IEN<1 Q<br/> S TEXT(1)=$P($G(^ORD(100.8,IEN,0)),U)<br/> S TEXT(2)=""<br/> S CNT=2<br/> S NUM=0 F  S NUM=$O(^ORD(100.8,IEN,1,NUM)) Q:NUM<1  S LINE=$G(^(NUM,0)) D<br/> .S CNT=CNT+1<br/> .S TEXT(CNT)=LINE<br/> S TEXT(CNT+1)=""{:/}




 Generated on January 13th 2017, 7:15:28 am