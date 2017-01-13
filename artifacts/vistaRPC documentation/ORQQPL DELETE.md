---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORQQPL DELETE 

 property | value 
--- | --- 
 label | {::nomarkdown}ORQQPL DELETE{:/}
 tag | {::nomarkdown}DELETE{:/}
 routine | [ORQQPL2](http://code.osehra.org/dox/Routine_ORQQPL2_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}DELETES A PROBLEM{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | DELETE A PROBLEM
 Input Parameters | {::nomarkdown}GMPIFN<br/>GMPROV<br/>GMPVAMC<br/>REASON{:/}
 Lines | ```
 N CHNGE
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
 Leading comment lines | {::nomarkdown}From GMPL1 - silent version{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}IFN{:/} | {::nomarkdown}LITERAL{:/} |  |  |  | 
| {::nomarkdown}PROVIDERID{:/} |  |  |  |  | 
| {::nomarkdown}VAMC{:/} |  |  |  |  | 
| {::nomarkdown}REASON{:/} | {::nomarkdown}LITERAL{:/} |  |  |  | 




 Generated on January 13th 2017, 6:55:28 am