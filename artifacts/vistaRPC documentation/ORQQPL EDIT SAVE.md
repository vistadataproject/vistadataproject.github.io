---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORQQPL EDIT SAVE 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORQQPL EDIT SAVE{:/}
 tag | {::nomarkdown}EDSAVE{:/}
 routine | [ORQQPL1](http://code.osehra.org/dox/Routine_ORQQPL1_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}sAVES EDITED PROBLEM RECORD{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}IFN{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}RECORD IFN{:/} | 
| {::nomarkdown}PROV{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}PROBLEM RESP PROVIDER{:/} | 
| {::nomarkdown}VAMC{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}FACILITY ID{:/} | 


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | EDSAVE^[ORQQPL1](http://code.osehra.org/dox/Routine_ORQQPL1_source.html)
 Method comment | SAVE EDITED RES
 Input parameters | {::nomarkdown}GMPIFN, GMPROV, GMPVAMC, UT, EDARRAY, GMPSRCH{:/}
 First comment | {::nomarkdown}<pre> RETURN - boolean, 1 success, 0 failure<br/> EDARRAY - array used for indirect sets of GMPORIG() and GMPFLDS()<br/></pre>{:/}
 Code | {::nomarkdown}  N GMPFLD,GMPORIG,S,GMPLUSER<br> S GMPSRCH=$G(GMPSRCH)<br> S RETURN=1 ; initialize for success<br> I UT S GMPLUSER=1<br> S S=""<br> F  S S=$O(EDARRAY(S)) Q:S=""  D<br> . S @EDARRAY(S)<br> I $D(GMPFLD(10,"NEW"))>9 D  I 'RETURN Q  ; Bail Out if no lock<br> . L +^AUPNPROB(GMPIFN,11):10  ; given bogus nature of this lock, should be able to get<br> . I '$T S RETURN=0<br> D EN^GMPLSAVE  ; save the data<br> K GMPFLD,GMPORIG<br> L -^AUPNPROB(GMPIFN,11)  ; free this instance of lock (in case it was set)<br> S RETURN=1{:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rProbs.pas">rProbs.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 22nd 2017, 3:10:56 am</p>{:/}