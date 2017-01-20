---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORQQPL USER PROB LIST 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORQQPL USER PROB LIST{:/}
 tag | {::nomarkdown}PROB{:/}
 routine | [ORQQPL3](http://code.osehra.org/dox/Routine_ORQQPL3_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns array of user specific problems to select from{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}Category{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}IFN of problem category{:/} | 


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | PROB^[ORQQPL3](http://code.osehra.org/dox/Routine_ORQQPL3_source.html)
 Method comment | Get user problem list for given group
 Input parameters | {::nomarkdown}GROUP{:/}
 Code | {::nomarkdown}  N PSEQ,PCNT,IFN,ITEM,TG,CODE,TEXT,ORPLCSYS,ORPLCPTR<br> S TG=$NAME(TMP) ; put list in local<br> K @TG<br> S LCNT=0<br> S (PSEQ,PCNT)=0<br> F  S PSEQ=$O(^GMPL(125.12,"C",GROUP,PSEQ)) Q:PSEQ'>0  D<br> . N ORI,ORK,ORQUIT S ORQUIT=0<br> . S IFN=$O(^GMPL(125.12,"C",GROUP,PSEQ,0)) Q:IFN'>0<br> . S ITEM=$G(^GMPL(125.12,IFN,0))<br> . S TEXT=$P(ITEM,U,4)<br> . ; SEE DD for GMPL(125.12,4 :<br> . ; "...code which is to be displayed... generally assumed to be ICD"<br> . S CODE=$P(ITEM,U,5)<br> . ; if any codes inactive, exclude from list<br> . I $L(CODE)&(CODE["/") D<br> . . F ORK=1:1:$L(CODE,"/") Q:+ORQUIT  D<br> . . . S ORPLCPTR=+$$CODECS^ICDEX($P(CODE,"/",ORK),80,DT),ORPLCSYS=$$SAB^ICDEX(ORPLCPTR,DT)<br> . . . I '+$$STATCHK^ICDXCODE(ORPLCPTR,$P(CODE,"/",ORK),DT) S ORQUIT=1 Q<br> . . Q<br> . E  D<br> . . S ORPLCPTR=$S($L(CODE):+$$CODECS^ICDEX(CODE,80,DT),1:""),ORPLCSYS=$S($L(CODE):$$SAB^ICDEX(ORPLCPTR,DT),1:"ICD")<br> . . I '+$$STATCHK^ICDXCODE(ORPLCPTR,CODE,DT) S ORQUIT=1 Q<br> . . Q<br> . I +ORQUIT Q<br> . S PCNT=PCNT+1<br> . ; RETURN:<br> . ; PROBLEM^DISPLAY TEXT^ICD CODE^ICD CODE IFN^^SNOMED CT CONCEPT CODE^SNOMED CT DESIGNATION CODE<br> . S @TG@(PCNT)=$P(ITEM,U,3,4)_U_"("_$P($$CODECS^ICDEX($P(CODE,"/"),80,DT),U,2)_" "_$G(CODE)_")"_U_+$$ICDDATA^ICDXCODE(ORPLCSYS,$P(CODE,"/"),DT,"E")_U_U_$P(ITEM,U,6,7){:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rProbs.pas">rProbs.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 10:14:32 pm</p>{:/}