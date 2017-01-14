---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORQQPL ADD SAVE 

 property | value 
--- | --- 
 label | {::nomarkdown}ORQQPL ADD SAVE{:/}
 tag | {::nomarkdown}ADDSAVE{:/}
 routine | [ORQQPL1](http://code.osehra.org/dox/Routine_ORQQPL1_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Add new problem record{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | SAVE NEW RECORD
 Input Parameters | {::nomarkdown}GMPDFN<br/>GMPROV<br/>GMPVAMC<br/>ADDARRAY<br/>GMPSRCH{:/}
 Lines | {::nomarkdown} N DA,GMPFLD,GMPORIG,S<br/> S GMPSRCH=$G(GMPSRCH)<br/> S RETURN=0 ;<br/> L +^AUPNPROB(0):10<br/> Q:'$T  ; bail out if no lock<br/> S S=""<br/> F  S S=$O(ADDARRAY(S)) Q:S=""  D<br/> . S @ADDARRAY(S)<br/> D NEW^GMPLSAVE<br/> S RETURN=DA<br/> L -^AUPNPROB(0)<br/> S RETURN=1{:/}
 Leading comment lines | {::nomarkdown}RETURN - Problem IFN if success, 0 otherwise<br/>ADDARRAY - array used for indirect sets of  GMPFLDS(){:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}GMPDFN{:/} | {::nomarkdown}LITERAL{:/} |  |  |  | 
| {::nomarkdown}GMPROV{:/} |  |  |  |  | 
| {::nomarkdown}GMPVAMC{:/} | {::nomarkdown}LITERAL{:/} |  |  |  | 
| {::nomarkdown}ADDARRAY{:/} | {::nomarkdown}LIST{:/} |  |  | {::nomarkdown}ARRAY OF GMPFLD()=VALUE STRINGS FOR INDIRECT SET{:/} | 




 Generated on January 13th 2017, 7:15:27 am