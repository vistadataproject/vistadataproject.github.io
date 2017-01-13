---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWD FORMID 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWD FORMID{:/}
 tag | {::nomarkdown}FORMID{:/}
 routine | [ORWD](http://code.osehra.org/dox/Routine_ORWD_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Returns the Form ID (mapping to a windows form) for an ordering dialog.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | procedure
 Input Parameters | {::nomarkdown}ORIFN{:/}
 Lines | {::nomarkdown} N X<br/> S VAL=0,X=$P(^OR(100,+ORIFN,0),U,5)<br/> Q:$P(X,";",2)'="ORD(101.41,"<br/> S VAL=+$P($G(^ORD(101.41,+X,5)),U,5){:/}
 Leading comment lines | {::nomarkdown}Returns the Dialog Form ID{:/}




 Generated on January 13th 2017, 7:15:27 am