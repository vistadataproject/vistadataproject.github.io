---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDXVB COMPORD 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWDXVB COMPORD{:/}
 tag | {::nomarkdown}COMPORD{:/}
 routine | [ORWDXVB](http://code.osehra.org/dox/Routine_ORWDXVB_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Get sequence order of Blood Components for selection.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Get sequence order of Blood Components
 Lines | ```
 N ORLIST,I,X
 D GETLST^XPAR(.ORLIST,"ALL","OR VBECS COMPONENT ORDER")
 S I=0 F  S I=$O(ORLIST(I)) Q:'I  S X=ORLIST(I) I $D(^ORD(101.43,$P(X,"^",2),0)) S OROOT(I)=$P(X,"^",2)_"^"_$P(^(0),"^",1)_"^"_$P(^(0),"^",1)```




 Generated on January 13th 2017, 6:55:29 am