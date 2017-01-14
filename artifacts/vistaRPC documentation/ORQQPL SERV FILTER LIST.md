---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORQQPL SERV FILTER LIST 

 property | value 
--- | --- 
 label | {::nomarkdown}ORQQPL SERV FILTER LIST{:/}
 tag | {::nomarkdown}GETSRVC{:/}
 routine | [ORQQPL3](http://code.osehra.org/dox/Routine_ORQQPL3_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}RETURNS ARRAY OF IEN^NAME FOR INPUT ARRAY OF IEN{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | GET FILTERED LIST OF INPATIENT SERVICES
 Input Parameters | {::nomarkdown}INP{:/}
 Lines | {::nomarkdown} N I,S<br/> S S=""<br/> F I=1:1 S S=$O(INP(S)) Q:S=""  D<br/> . I INP(S)'="",$G(^DIC(49,INP(S),0))'="" D  Q  ; get next<br/> .. S RETURN(I)=INP(S)_U_$P(^DIC(49,INP(S),0),U,1)<br/>{:/}
 Leading comment lines | {::nomarkdown}RETURN NAMES FOR LIST OF IEN PASSED IN{:/}




 Generated on January 13th 2017, 7:15:27 am