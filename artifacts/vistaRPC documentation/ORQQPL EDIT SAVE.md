---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORQQPL EDIT SAVE 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}ORQQPL EDIT SAVE{:/}
 tag | {::nomarkdown}EDSAVE{:/}
 routine | [ORQQPL1](http://code.osehra.org/dox/Routine_ORQQPL1_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}sAVES EDITED PROBLEM RECORD{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}IFN{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}RECORD IFN{:/} | 
| {::nomarkdown}PROV{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}PROBLEM RESP PROVIDER{:/} | 
| {::nomarkdown}VAMC{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}FACILITY ID{:/} | 


## MUMPS Method description

 property | value 
 --- | --- 
 Method | EDSAVE^[ORQQPL1](http://code.osehra.org/dox/Routine_ORQQPL1_source.html)
 Method comment | SAVE EDITED RES
 First comment | {::nomarkdown}RETURN - boolean, 1 success, 0 failure<br/>EDARRAY - array used for indirect sets of GMPORIG() and GMPFLDS(){:/}
 Input parameters | {::nomarkdown}GMPIFN<br/>GMPROV<br/>GMPVAMC<br/>UT<br/>EDARRAY<br/>GMPSRCH{:/}
 Code | ```  N GMPFLD,GMPORIG,S,GMPLUSER
 S GMPSRCH=$G(GMPSRCH)
 S RETURN=1 ; initialize for success
 I UT S GMPLUSER=1
 S S=""
 F  S S=$O(EDARRAY(S)) Q:S=""  D
 . S @EDARRAY(S)
 I $D(GMPFLD(10,"NEW"))>9 D  I 'RETURN Q  ; Bail Out if no lock
 . L +^AUPNPROB(GMPIFN,11):10  ; given bogus nature of this lock, should be able to get
 . I '$T S RETURN=0
 D EN^GMPLSAVE  ; save the data
 K GMPFLD,GMPORIG
 L -^AUPNPROB(GMPIFN,11)  ; free this instance of lock (in case it was set)
 S RETURN=1```




 Generated on January 14th 2017, 7:26:35 am