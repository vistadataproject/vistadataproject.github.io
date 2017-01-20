---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORQQPL AUDIT HIST 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORQQPL AUDIT HIST{:/}
 tag | {::nomarkdown}HIST{:/}
 routine | [ORQQPL2](http://code.osehra.org/dox/Routine_ORQQPL2_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}RETURN PROBLEM AUDIT HISTORY{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}GMPIFN{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}INTERNAL FILE NUMBER FOR PROBLEM{:/} | 


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | HIST^[ORQQPL2](http://code.osehra.org/dox/Routine_ORQQPL2_source.html)
 Method comment | GET AUDIT HISTORY
 First comment | {::nomarkdown}<pre> taken from EN^GMPLDISP</pre>{:/}
 Input parameters | {::nomarkdown}GMPIFN{:/}
 Code | {::nomarkdown}  N IDT,AIFN,S,ORDT,TXT,I,L,GMPDT,LCNT<br> S LCNT=0<br> I +$O(^GMPL(125.8,"AD",GMPIFN,0))'>0 D  Q  ;BAIL OUT - NO CHANGES<br> . S RETURN(0)="NONE"<br> S IDT=""<br> F  S IDT=$O(^GMPL(125.8,"AD",GMPIFN,IDT)) Q:IDT'>0  D<br> . S AIFN=""<br> . F  S AIFN=$O(^GMPL(125.8,"AD",GMPIFN,IDT,AIFN)) Q:AIFN'>0  D<br> .. N FLD,GMPL0 S GMPL0=^GMPL(125.8,AIFN,0),FLD=$P(GMPL0,U,2)<br> .. Q:(FLD=80201)!(FLD=80202)!(FLD=80002)<br> .. D DT^GMPLHIST<br> S S="",I=0,TXT=""<br> F  S S=$O(GMPDT(S)) Q:S=""  D<br> . S L=GMPDT(S,0)<br> . I $L(L,": ")>1 D  Q  ; does line begin with date? (hope ": " can't be part of text)<br> .. D FLUSH(.RETURN,.I,$G(ORDT),$G(TXT))<br> .. S ORDT=$P(L,": ") ; get new date<br> .. S TXT=$$STRIP($P(L,": ",2,999)) ; start new text string<br> . S TXT=TXT_" "_$$STRIP(L)  ; line does not begin with date, so add to existing text line<br> I '$D(RETURN(0)) S RETURN(0)=I<br> D FLUSH(.RETURN,.I,$G(ORDT),$G(TXT)){:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rProbs.pas">rProbs.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 5:08:31 am</p>{:/}