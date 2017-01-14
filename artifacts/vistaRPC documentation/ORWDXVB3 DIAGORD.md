---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORWDXVB3 DIAGORD 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}ORWDXVB3 DIAGORD{:/}
 tag | {::nomarkdown}DIAGORD{:/}
 routine | [ORWDXVB3](http://code.osehra.org/dox/Routine_ORWDXVB3_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Get sequence order of Diagnostic Tests for selection.{:/}


## MUMPS Method description

 property | value 
 --- | --- 
 Method | DIAGORD^[ORWDXVB3](http://code.osehra.org/dox/Routine_ORWDXVB3_source.html)
 Method comment | Get sequence order of Diagnostic tests
 Code | ```  N ORLIST,I,X
 D GETLST^XPAR(.ORLIST,"ALL","OR VBECS DIAGNOSTIC TEST ORDER")
 S I=0 F  S I=$O(ORLIST(I)) Q:'I  S X=ORLIST(I) I $D(^ORD(101.43,$P(X,"^",2),0)) S OROOT(I)=$P(X,"^",2)_"^"_$P(^(0),"^",1)_"^"_$P(^(0),"^",1)```




 Generated on January 14th 2017, 7:26:36 am