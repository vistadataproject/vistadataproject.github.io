---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORQQPL AUDIT HIST 

 property | value 
--- | --- 
 label | {::nomarkdown}ORQQPL AUDIT HIST{:/}
 tag | {::nomarkdown}HIST{:/}
 routine | [ORQQPL2](http://code.osehra.org/dox/Routine_ORQQPL2_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}RETURN PROBLEM AUDIT HISTORY{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | GET AUDIT HISTORY
 Input Parameters | {::nomarkdown}GMPIFN{:/}
 Lines | ```
 N IDT,AIFN,S,ORDT,TXT,I,L,GMPDT,LCNT
 S LCNT=0
 I +$O(^GMPL(125.8,"AD",GMPIFN,0))'>0 D  Q  ;BAIL OUT - NO CHANGES
 . S RETURN(0)="NONE"
 S IDT=""
 F  S IDT=$O(^GMPL(125.8,"AD",GMPIFN,IDT)) Q:IDT'>0  D
 . S AIFN=""
 . F  S AIFN=$O(^GMPL(125.8,"AD",GMPIFN,IDT,AIFN)) Q:AIFN'>0  D
 .. N FLD,GMPL0 S GMPL0=^GMPL(125.8,AIFN,0),FLD=$P(GMPL0,U,2)
 .. Q:(FLD=80201)!(FLD=80202)!(FLD=80002)
 .. D DT^GMPLHIST
 S S="",I=0,TXT=""
 F  S S=$O(GMPDT(S)) Q:S=""  D
 . S L=GMPDT(S,0)
 . I $L(L,": ")>1 D  Q  ; does line begin with date? (hope ": " can't be part of text)
 .. D FLUSH(.RETURN,.I,$G(ORDT),$G(TXT))
 .. S ORDT=$P(L,": ") ; get new date
 .. S TXT=$$STRIP($P(L,": ",2,999)) ; start new text string
 . S TXT=TXT_" "_$$STRIP(L)  ; line does not begin with date, so add to existing text line
 I '$D(RETURN(0)) S RETURN(0)=I
 D FLUSH(.RETURN,.I,$G(ORDT),$G(TXT))```
 Leading comment lines | {::nomarkdown}taken from EN^GMPLDISP{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}GMPIFN{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}INTERNAL FILE NUMBER FOR PROBLEM{:/} | 




 Generated on January 13th 2017, 6:55:28 am