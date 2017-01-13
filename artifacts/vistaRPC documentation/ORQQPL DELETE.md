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
 Lines | ```{::nomarkdown} N CHNGE<br/> I REASON'="" D<br/> . S GMPFLD(10,"NEW",1)=REASON<br/> . D NEWNOTE^GMPLSAVE<br/> S CHNGE=GMPIFN_"^1.02^"_$$HTFM^XLFDT($H)<br/> S CHNGE=CHNGE_U_DUZ_"^P^H^Deleted^"_+$G(GMPROV)<br/> S $P(^AUPNPROB(GMPIFN,1),U,2)="H"<br/> S RESULT=1<br/> D AUDIT^GMPLX(CHNGE,"")<br/> D DTMOD^GMPLX(GMPIFN)<br/> K GMPFLD```{:/}
 Leading comment lines | {::nomarkdown}From GMPL1 - silent version{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}IFN{:/} | {::nomarkdown}LITERAL{:/} |  |  |  | 
| {::nomarkdown}PROVIDERID{:/} |  |  |  |  | 
| {::nomarkdown}VAMC{:/} |  |  |  |  | 
| {::nomarkdown}REASON{:/} | {::nomarkdown}LITERAL{:/} |  |  |  | 




 Generated on January 13th 2017, 7:11:26 am