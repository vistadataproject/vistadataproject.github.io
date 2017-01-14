---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORQQPL PROV FILTER LIST 


 ## VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORQQPL PROV FILTER LIST{:/}
 tag | {::nomarkdown}GETRPRV{:/}
 routine | [ORQQPL3](http://code.osehra.org/dox/Routine_ORQQPL3_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}RETURNS A LIST OF PROVIDERS CORRESPONDING TO INPUT ARRAY OF IEN{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}INP{:/} | {::nomarkdown}LIST{:/} |  |  | {::nomarkdown}ARRAY OF PROVIDER IEN{:/} | 


## MUMPS Method description

 property | value 
 --- | --- 
 Method | GETRPRV^[ORQQPL3](http://code.osehra.org/dox/Routine_ORQQPL3_source.html)
 Method comment | GET LIST OF RESPONSIBLE PROVIDERS FROM PRBLM LIST
 First comment | {::nomarkdown}RETURN - aa list of responsible providers from which to select for filtering<br/>INP - array of problem list providers to select from{:/}
 Input parameters | {::nomarkdown}INP{:/}
 Code | ```  N S<br/> S S=""<br/> F I=1:1 S S=$O(INP(S)) Q:S=""  D<br/> . I INP(S)'="",$G(^VA(200,INP(S),0))'="" D  Q  ; get next<br/> .. S RETURN(I)=INP(S)_U_$P(^VA(200,INP(S),0),U)<br/> S RETURN(0)="-1"_U_"<None recorded>" ; return empty provider```{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 14th 2017, 7:36:24 am</p>{:/}