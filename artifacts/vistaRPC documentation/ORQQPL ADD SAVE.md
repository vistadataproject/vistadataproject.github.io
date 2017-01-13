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
 Lines | ```
 N DA,GMPFLD,GMPORIG,S
 S GMPSRCH=$G(GMPSRCH)
 S RETURN=0 ;
 L +^AUPNPROB(0):10
 Q:'$T  ; bail out if no lock
 S S=""
 F  S S=$O(ADDARRAY(S)) Q:S=""  D
 . S @ADDARRAY(S)
 D NEW^GMPLSAVE
 S RETURN=DA
 L -^AUPNPROB(0)
 S RETURN=1```
 Leading comment lines | {::nomarkdown}RETURN - Problem IFN if success, 0 otherwise<br/>ADDARRAY - array used for indirect sets of  GMPFLDS(){:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}GMPDFN{:/} | {::nomarkdown}LITERAL{:/} |  |  |  | 
| {::nomarkdown}GMPROV{:/} |  |  |  |  | 
| {::nomarkdown}GMPVAMC{:/} | {::nomarkdown}LITERAL{:/} |  |  |  | 
| {::nomarkdown}ADDARRAY{:/} | {::nomarkdown}LIST{:/} |  |  | {::nomarkdown}ARRAY OF GMPFLD()=VALUE STRINGS FOR INDIRECT SET{:/} | 




 Generated on January 13th 2017, 6:55:28 am