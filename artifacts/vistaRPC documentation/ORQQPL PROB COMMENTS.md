---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORQQPL PROB COMMENTS 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORQQPL PROB COMMENTS{:/}
 tag | {::nomarkdown}GETCOMM{:/}
 routine | [ORQQPL2](http://code.osehra.org/dox/Routine_ORQQPL2_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns a list of comments associated with a problem IEN.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}Problem IEN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} | {::nomarkdown}true{:/} |  | 


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | GETCOMM^[ORQQPL2](http://code.osehra.org/dox/Routine_ORQQPL2_source.html)
 Method comment | Return comments for a problem - MULTI-DIVISIONAL
 Input parameters | {::nomarkdown}PIFN{:/}
 Code | {::nomarkdown}  N FAC,NIFN,NOTE,NOTECNT<br> S NOTECNT=0,FAC=0<br> F  S FAC=$O(^AUPNPROB(PIFN,11,FAC)) Q:+FAC'>0  D<br> . S NIFN=0<br> . F  S NIFN=$O(^AUPNPROB(PIFN,11,FAC,11,NIFN)) Q:NIFN'>0  D<br> . . Q:$P($G(^AUPNPROB(PIFN,11,FAC,11,NIFN,0)),U,4)'="A"<br> . . S NOTE=$P($G(^AUPNPROB(PIFN,11,FAC,11,NIFN,0)),U,3)<br> . . S NOTECNT=NOTECNT+1,ORY(NOTECNT)=NOTE{:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rProbs.pas">rProbs.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 10:14:32 pm</p>{:/}