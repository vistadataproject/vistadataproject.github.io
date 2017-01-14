---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORQQPL ADD SAVE 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}ORQQPL ADD SAVE{:/}
 tag | {::nomarkdown}ADDSAVE{:/}
 routine | [ORQQPL1](http://code.osehra.org/dox/Routine_ORQQPL1_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Add new problem record{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}GMPDFN{:/} | {::nomarkdown}LITERAL{:/} |  |  |  | 
| {::nomarkdown}GMPROV{:/} |  |  |  |  | 
| {::nomarkdown}GMPVAMC{:/} | {::nomarkdown}LITERAL{:/} |  |  |  | 
| {::nomarkdown}ADDARRAY{:/} | {::nomarkdown}LIST{:/} |  |  | {::nomarkdown}ARRAY OF GMPFLD()=VALUE STRINGS FOR INDIRECT SET{:/} | 


## MUMPS Method description

 property | value 
 --- | --- 
 Method | ADDSAVE^[ORQQPL1](http://code.osehra.org/dox/Routine_ORQQPL1_source.html)
 Method comment | SAVE NEW RECORD
 First comment | {::nomarkdown}RETURN - Problem IFN if success, 0 otherwise<br/>ADDARRAY - array used for indirect sets of  GMPFLDS(){:/}
 Input parameters | {::nomarkdown}GMPDFN<br/>GMPROV<br/>GMPVAMC<br/>ADDARRAY<br/>GMPSRCH{:/}
 Code | ```  N DA,GMPFLD,GMPORIG,S
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




 Generated on January 14th 2017, 7:26:35 am