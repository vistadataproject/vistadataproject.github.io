---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORQQPL CLIN FILTER LIST 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}ORQQPL CLIN FILTER LIST{:/}
 tag | {::nomarkdown}GETCLIN{:/}
 routine | [ORQQPL3](http://code.osehra.org/dox/Routine_ORQQPL3_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}rETURNS ARRAY OF IEN^NAME FOR AN ARRAY OF IEN PASSED IN{:/}


## MUMPS Method description

 property | value 
 --- | --- 
 Method | GETCLIN^[ORQQPL3](http://code.osehra.org/dox/Routine_ORQQPL3_source.html)
 Method comment | Get FILTERED LIST OF CLINICS
 First comment | {::nomarkdown}RETURN NAMES FOR LIST OF CLINICS PASSED IN{:/}
 Input parameters | {::nomarkdown}INP{:/}
 Code | ```  N I,S
 S S=""
 F I=1:1 S S=$O(INP(S)) Q:S=""  D
 . I INP(S)'="",$G(^SC(INP(S),0))'="" D  Q  ; get next
 .. S RETURN(I)=INP(S)_U_$P(^SC(INP(S),0),U,1)```




 Generated on January 14th 2017, 7:26:35 am