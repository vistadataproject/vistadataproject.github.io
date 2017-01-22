---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORQQPL CLIN FILTER LIST 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORQQPL CLIN FILTER LIST{:/}
 tag | {::nomarkdown}GETCLIN{:/}
 routine | [ORQQPL3](http://code.osehra.org/dox/Routine_ORQQPL3_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}rETURNS ARRAY OF IEN^NAME FOR AN ARRAY OF IEN PASSED IN{:/}


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | GETCLIN^[ORQQPL3](http://code.osehra.org/dox/Routine_ORQQPL3_source.html)
 Method comment | Get FILTERED LIST OF CLINICS
 Input parameters | {::nomarkdown}INP{:/}
 First comment | {::nomarkdown}<pre> RETURN NAMES FOR LIST OF CLINICS PASSED IN</pre>{:/}
 Code | {::nomarkdown}  N I,S<br> S S=""<br> F I=1:1 S S=$O(INP(S)) Q:S=""  D<br> . I INP(S)'="",$G(^SC(INP(S),0))'="" D  Q  ; get next<br> .. S RETURN(I)=INP(S)_U_$P(^SC(INP(S),0),U,1){:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rProbs.pas">rProbs.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 22nd 2017, 3:23:02 am</p>{:/}