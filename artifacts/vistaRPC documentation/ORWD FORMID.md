---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORWD FORMID 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}ORWD FORMID{:/}
 tag | {::nomarkdown}FORMID{:/}
 routine | [ORWD](http://code.osehra.org/dox/Routine_ORWD_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Returns the Form ID (mapping to a windows form) for an ordering dialog.{:/}


## MUMPS Method description

 property | value 
 --- | --- 
 Method | FORMID^[ORWD](http://code.osehra.org/dox/Routine_ORWD_source.html)
 Method comment | procedure
 First comment | {::nomarkdown}Returns the Dialog Form ID{:/}
 Input parameters | {::nomarkdown}ORIFN{:/}
 Code | ```  N X
 S VAL=0,X=$P(^OR(100,+ORIFN,0),U,5)
 Q:$P(X,";",2)'="ORD(101.41,"
 S VAL=+$P($G(^ORD(101.41,+X,5)),U,5)```




 Generated on January 14th 2017, 7:26:35 am