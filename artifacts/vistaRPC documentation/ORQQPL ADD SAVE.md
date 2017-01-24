---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORQQPL ADD SAVE 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORQQPL ADD SAVE{:/}
 tag | {::nomarkdown}ADDSAVE{:/}
 routine | [ORQQPL1](http://code.osehra.org/dox/Routine_ORQQPL1_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Add new problem record{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}GMPDFN{:/} | {::nomarkdown}LITERAL{:/} |  |  |  | 
| {::nomarkdown}GMPROV{:/} |  |  |  |  | 
| {::nomarkdown}GMPVAMC{:/} | {::nomarkdown}LITERAL{:/} |  |  |  | 
| {::nomarkdown}ADDARRAY{:/} | {::nomarkdown}LIST{:/} |  |  | {::nomarkdown}ARRAY OF GMPFLD()=VALUE STRINGS FOR INDIRECT SET{:/} | 


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | ADDSAVE^[ORQQPL1](http://code.osehra.org/dox/Routine_ORQQPL1_source.html)
 Method comment | SAVE NEW RECORD
 Input parameters | {::nomarkdown}GMPDFN, GMPROV, GMPVAMC, ADDARRAY, GMPSRCH{:/}
 First comment | {::nomarkdown}<pre> RETURN - Problem IFN if success, 0 otherwise<br/> ADDARRAY - array used for indirect sets of  GMPFLDS()<br/></pre>{:/}
 Code | {::nomarkdown}  N DA,GMPFLD,GMPORIG,S<br> S GMPSRCH=$G(GMPSRCH)<br> S RETURN=0 ;<br> L +^AUPNPROB(0):10<br> Q:'$T  ; bail out if no lock<br> S S=""<br> F  S S=$O(ADDARRAY(S)) Q:S=""  D<br> . S @ADDARRAY(S)<br> D NEW^GMPLSAVE<br> S RETURN=DA<br> L -^AUPNPROB(0)<br> S RETURN=1{:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rProbs.pas">rProbs.pas</a><br/> <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/BA/fBALocalDiagnoses.pas">BA/fBALocalDiagnoses.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 22nd 2017, 3:30:11 am</p>{:/}