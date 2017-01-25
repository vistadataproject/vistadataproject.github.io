---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORQQPL INACTIVATE 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORQQPL INACTIVATE{:/}
 tag | {::nomarkdown}INACT{:/}
 routine | [ORQQPL2](http://code.osehra.org/dox/Routine_ORQQPL2_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | 

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}Problem IFN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} | {::nomarkdown}true{:/} |  | 


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | INACT^[ORQQPL2](http://code.osehra.org/dox/Routine_ORQQPL2_source.html)
 Method comment | inactivate a problem
 Input parameters | {::nomarkdown}GMPIFN{:/}
 First comment | {::nomarkdown}<pre> RETURN:  ;(consistent with UPDATE function)<br/>   SUCCESS:<br/>     RETURN>0, RETURN(0)=""<br/>   FAILURE:<br/>      RETURN<0, RETURN(0)=verbose error message</pre>{:/}
 Code | {::nomarkdown}  N NOW,CHNGE<br> S NOW=$$HTFM^XLFDT($H)<br> I $P(^AUPNPROB(GMPIFN,0),U,12)'="A" D  Q  ; BAIL OUT - ALREADY INACTIVE<br> . S RETURN=-1<br> . S RETURN(0)="Problem Already Inactive"<br> L +^AUPNPROB(GMPIFN,0):10<br> I '$T D  Q  ; BAIL OUT - NO LOCK<br> . S RETURN=-1<br> . S RETURN(0)="Record in use. Try again in a few moments"<br> S $P(^AUPNPROB(GMPIFN,0),U,12)="I"<br> S CHNGE=GMPIFN_"^.12^"_NOW_U_DUZ_"^A^I^Inactivated^"_DUZ<br> D AUDIT^GMPLX(CHNGE,"")<br> D DTMOD^GMPLX(GMPIFN)<br> L -^AUPNPROB(GMPIFN,0)<br> S RETURN=1<br> S RETURN(0)=""{:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="">NOT OSEHRA CPRS</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 25th 2017, 12:25:50 am</p>{:/}