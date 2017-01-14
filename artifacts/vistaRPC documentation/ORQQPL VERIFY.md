---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORQQPL VERIFY 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}ORQQPL VERIFY{:/}
 tag | {::nomarkdown}VERIFY{:/}
 routine | [ORQQPL2](http://code.osehra.org/dox/Routine_ORQQPL2_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}VERIFY A TRANSCRIBED PROBLEM{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}GMPIFN{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}PROBLEM IFN{:/} | 


## MUMPS Method description

 property | value 
 --- | --- 
 Method | VERIFY^[ORQQPL2](http://code.osehra.org/dox/Routine_ORQQPL2_source.html)
 Method comment | verify a transcribed problem
 First comment | {::nomarkdown}RETURN:  ;(consistent with UPDATE function)<br/>SUCCESS:<br/>RETURN>0, RETURN(0)=""<br/>FAILURE:<br/>RETURN<0, RETURN(0)=verbose error message{:/}
 Input parameters | {::nomarkdown}GMPIFN{:/}
 Code | ```  N NOW,CHNGE
 S NOW=$$HTFM^XLFDT($H)
 I $P(^AUPNPROB(GMPIFN,1),U,2)'="T" D  Q  ; BAIL OUT - ALREADY VERIFIED
 . S RETURN=-1
 . S RETURN(0)="Problem Already Verified"
 L +^AUPNPROB(GMPIFN,0):10
 I '$T D  Q  ; BAIL OUT - NO LOCK
 . S RETURN=-1
 . S RETURN(0)="Record in use. Try again in a few moments"
 S $P(^AUPNPROB(GMPIFN,1),U,2)="P"
 S CHNGE=GMPIFN_"^1.02^"_NOW_U_DUZ_"^T^P^Verified^"_DUZ
 D AUDIT^GMPLX(CHNGE,"")
 D DTMOD^GMPLX(GMPIFN)
 L -^AUPNPROB(GMPIFN,0)
 S RETURN=1
 S RETURN(0)=""```




 Generated on January 14th 2017, 7:26:35 am