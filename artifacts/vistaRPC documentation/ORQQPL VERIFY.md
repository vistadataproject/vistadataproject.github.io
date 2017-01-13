---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORQQPL VERIFY 

 property | value 
--- | --- 
 label | {::nomarkdown}ORQQPL VERIFY{:/}
 tag | {::nomarkdown}VERIFY{:/}
 routine | [ORQQPL2](http://code.osehra.org/dox/Routine_ORQQPL2_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}VERIFY A TRANSCRIBED PROBLEM{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | verify a transcribed problem
 Input Parameters | {::nomarkdown}GMPIFN{:/}
 Lines | ```{::nomarkdown} N NOW,CHNGE<br/> S NOW=$$HTFM^XLFDT($H)<br/> I $P(^AUPNPROB(GMPIFN,1),U,2)'="T" D  Q  ; BAIL OUT - ALREADY VERIFIED<br/> . S RETURN=-1<br/> . S RETURN(0)="Problem Already Verified"<br/> L +^AUPNPROB(GMPIFN,0):10<br/> I '$T D  Q  ; BAIL OUT - NO LOCK<br/> . S RETURN=-1<br/> . S RETURN(0)="Record in use. Try again in a few moments"<br/> S $P(^AUPNPROB(GMPIFN,1),U,2)="P"<br/> S CHNGE=GMPIFN_"^1.02^"_NOW_U_DUZ_"^T^P^Verified^"_DUZ<br/> D AUDIT^GMPLX(CHNGE,"")<br/> D DTMOD^GMPLX(GMPIFN)<br/> L -^AUPNPROB(GMPIFN,0)<br/> S RETURN=1<br/> S RETURN(0)=""```{:/}
 Leading comment lines | {::nomarkdown}RETURN:  ;(consistent with UPDATE function)<br/>SUCCESS:<br/>RETURN>0, RETURN(0)=""<br/>FAILURE:<br/>RETURN<0, RETURN(0)=verbose error message{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}GMPIFN{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}PROBLEM IFN{:/} | 




 Generated on January 13th 2017, 7:11:26 am