---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORQQPL PROV FILTER LIST 

 property | value 
--- | --- 
 label | {::nomarkdown}ORQQPL PROV FILTER LIST{:/}
 tag | {::nomarkdown}GETRPRV{:/}
 routine | [ORQQPL3](http://code.osehra.org/dox/Routine_ORQQPL3_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}RETURNS A LIST OF PROVIDERS CORRESPONDING TO INPUT ARRAY OF IEN{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | GET LIST OF RESPONSIBLE PROVIDERS FROM PRBLM LIST
 Input Parameters | {::nomarkdown}INP{:/}
 Lines | ```
 N S
 S S=""
 F I=1:1 S S=$O(INP(S)) Q:S=""  D
 . I INP(S)'="",$G(^VA(200,INP(S),0))'="" D  Q  ; get next
 .. S RETURN(I)=INP(S)_U_$P(^VA(200,INP(S),0),U)
 S RETURN(0)="-1"_U_"<None recorded>" ; return empty provider```
 Leading comment lines | {::nomarkdown}RETURN - aa list of responsible providers from which to select for filtering<br/>INP - array of problem list providers to select from{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}INP{:/} | {::nomarkdown}LIST{:/} |  |  | {::nomarkdown}ARRAY OF PROVIDER IEN{:/} | 




 Generated on January 13th 2017, 6:55:28 am