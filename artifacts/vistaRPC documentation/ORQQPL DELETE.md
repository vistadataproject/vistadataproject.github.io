---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORQQPL DELETE 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORQQPL DELETE{:/}
 tag | {::nomarkdown}DELETE{:/}
 routine | [ORQQPL2](http://code.osehra.org/dox/Routine_ORQQPL2_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}DELETES A PROBLEM{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}IFN{:/} | {::nomarkdown}LITERAL{:/} |  |  |  | 
| {::nomarkdown}PROVIDERID{:/} |  |  |  |  | 
| {::nomarkdown}VAMC{:/} |  |  |  |  | 
| {::nomarkdown}REASON{:/} | {::nomarkdown}LITERAL{:/} |  |  |  | 


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | DELETE^[ORQQPL2](http://code.osehra.org/dox/Routine_ORQQPL2_source.html)
 Method comment | DELETE A PROBLEM
 Input parameters | {::nomarkdown}GMPIFN, GMPROV, GMPVAMC, REASON{:/}
 First comment | {::nomarkdown}<pre> From GMPL1 - silent version</pre>{:/}
 Code | {::nomarkdown}  N CHNGE<br> I REASON'="" D<br> . S GMPFLD(10,"NEW",1)=REASON<br> . D NEWNOTE^GMPLSAVE<br> S CHNGE=GMPIFN_"^1.02^"_$$HTFM^XLFDT($H)<br> S CHNGE=CHNGE_U_DUZ_"^P^H^Deleted^"_+$G(GMPROV)<br> S $P(^AUPNPROB(GMPIFN,1),U,2)="H"<br> S RESULT=1<br> D AUDIT^GMPLX(CHNGE,"")<br> D DTMOD^GMPLX(GMPIFN)<br> K GMPFLD{:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rProbs.pas">rProbs.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 21st 2017, 4:20:09 am</p>{:/}