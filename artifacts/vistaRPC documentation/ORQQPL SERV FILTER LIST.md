---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORQQPL SERV FILTER LIST 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORQQPL SERV FILTER LIST{:/}
 tag | {::nomarkdown}GETSRVC{:/}
 routine | [ORQQPL3](http://code.osehra.org/dox/Routine_ORQQPL3_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}RETURNS ARRAY OF IEN^NAME FOR INPUT ARRAY OF IEN{:/}


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | GETSRVC^[ORQQPL3](http://code.osehra.org/dox/Routine_ORQQPL3_source.html)
 Method comment | GET FILTERED LIST OF INPATIENT SERVICES
 First comment | {::nomarkdown}<pre> RETURN NAMES FOR LIST OF IEN PASSED IN</pre>{:/}
 Input parameters | {::nomarkdown}INP{:/}
 Code | {::nomarkdown}  N I,S<br> S S=""<br> F I=1:1 S S=$O(INP(S)) Q:S=""  D<br> . I INP(S)'="",$G(^DIC(49,INP(S),0))'="" D  Q  ; get next<br> .. S RETURN(I)=INP(S)_U_$P(^DIC(49,INP(S),0),U,1)<br>{:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code |  [rProbs.pas](https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rProbs.pas)


{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 4:54:06 am</p>{:/}