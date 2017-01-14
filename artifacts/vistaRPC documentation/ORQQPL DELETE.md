---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORQQPL DELETE 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}ORQQPL DELETE{:/}
 tag | {::nomarkdown}DELETE{:/}
 routine | [ORQQPL2](http://code.osehra.org/dox/Routine_ORQQPL2_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}DELETES A PROBLEM{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}IFN{:/} | {::nomarkdown}LITERAL{:/} |  |  |  | 
| {::nomarkdown}PROVIDERID{:/} |  |  |  |  | 
| {::nomarkdown}VAMC{:/} |  |  |  |  | 
| {::nomarkdown}REASON{:/} | {::nomarkdown}LITERAL{:/} |  |  |  | 


## MUMPS Method description

 property | value 
 --- | --- 
 Method | DELETE^[ORQQPL2](http://code.osehra.org/dox/Routine_ORQQPL2_source.html)
 Method comment | DELETE A PROBLEM
 First comment | {::nomarkdown}From GMPL1 - silent version{:/}
 Input parameters | {::nomarkdown}GMPIFN<br/>GMPROV<br/>GMPVAMC<br/>REASON{:/}
 Code | ```  N CHNGE
 I REASON'="" D
 . S GMPFLD(10,"NEW",1)=REASON
 . D NEWNOTE^GMPLSAVE
 S CHNGE=GMPIFN_"^1.02^"_$$HTFM^XLFDT($H)
 S CHNGE=CHNGE_U_DUZ_"^P^H^Deleted^"_+$G(GMPROV)
 S $P(^AUPNPROB(GMPIFN,1),U,2)="H"
 S RESULT=1
 D AUDIT^GMPLX(CHNGE,"")
 D DTMOD^GMPLX(GMPIFN)
 K GMPFLD```




 Generated on January 14th 2017, 7:26:35 am