---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORQQPL PROV FILTER LIST 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORQQPL PROV FILTER LIST{:/}
 tag | {::nomarkdown}GETRPRV{:/}
 routine | [ORQQPL3](http://code.osehra.org/dox/Routine_ORQQPL3_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}RETURNS A LIST OF PROVIDERS CORRESPONDING TO INPUT ARRAY OF IEN{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}INP{:/} | {::nomarkdown}LIST{:/} |  |  | {::nomarkdown}ARRAY OF PROVIDER IEN{:/} | 


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | GETRPRV^[ORQQPL3](http://code.osehra.org/dox/Routine_ORQQPL3_source.html)
 Method comment | GET LIST OF RESPONSIBLE PROVIDERS FROM PRBLM LIST
 Input parameters | {::nomarkdown}INP{:/}
 First comment | {::nomarkdown}<pre> RETURN - aa list of responsible providers from which to select for filtering<br/> INP - array of problem list providers to select from<br/></pre>{:/}
 Code | {::nomarkdown}  N S<br> S S=""<br> F I=1:1 S S=$O(INP(S)) Q:S=""  D<br> . I INP(S)'="",$G(^VA(200,INP(S),0))'="" D  Q  ; get next<br> .. S RETURN(I)=INP(S)_U_$P(^VA(200,INP(S),0),U)<br> S RETURN(0)="-1"_U_"<None recorded>" ; return empty provider{:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rProbs.pas">rProbs.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 22nd 2017, 3:23:02 am</p>{:/}