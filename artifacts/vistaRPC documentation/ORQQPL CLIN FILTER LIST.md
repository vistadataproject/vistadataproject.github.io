---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORQQPL CLIN FILTER LIST 

 property | value 
--- | --- 
 label | {::nomarkdown}ORQQPL CLIN FILTER LIST{:/}
 tag | {::nomarkdown}GETCLIN{:/}
 routine | [ORQQPL3](http://code.osehra.org/dox/Routine_ORQQPL3_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}rETURNS ARRAY OF IEN^NAME FOR AN ARRAY OF IEN PASSED IN{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Get FILTERED LIST OF CLINICS
 Input Parameters | {::nomarkdown}INP{:/}
 Lines | ```{::nomarkdown} N I,S<br/> S S=""<br/> F I=1:1 S S=$O(INP(S)) Q:S=""  D<br/> . I INP(S)'="",$G(^SC(INP(S),0))'="" D  Q  ; get next<br/> .. S RETURN(I)=INP(S)_U_$P(^SC(INP(S),0),U,1)```{:/}
 Leading comment lines | {::nomarkdown}RETURN NAMES FOR LIST OF CLINICS PASSED IN{:/}




 Generated on January 13th 2017, 7:11:26 am