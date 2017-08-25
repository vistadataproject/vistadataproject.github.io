---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORQQPL USER PROB LIST<br/>
# ORQQPL USER PROB LIST

Returns array of user specific problems to select from

## Properties

Property | Value
--- | ---
Label | PROB
MUMPS Implementation | [ORQQPL3](http://code.osehra.org/dox/Routine_ORQQPL3_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
Category | LITERAL |  |  | IFN of problem category



## MUMPS Method Description

Property | Value
--- | ---
Method | [PROB^ORQQPL3](http://code.osehra.org/dox/Routine_ORQQPL3_source.html)
Method Comment | Get user problem list for given group
Input Parameters | GROUP
Code | {::nomarkdown}<pre><code> N PSEQ,PCNT,IFN,ITEM,TG,CODE,TEXT,ORPLCSYS,ORPLCPTR<br/> S TG=$NAME(TMP) ; put list in local<br/> K @TG<br/> S LCNT=0<br/> S (PSEQ,PCNT)=0<br/> F  S PSEQ=$O(^GMPL(125.12,"C",GROUP,PSEQ)) Q:PSEQ'>0  D<br/> . N ORI,ORK,ORQUIT S ORQUIT=0<br/> . S IFN=$O(^GMPL(125.12,"C",GROUP,PSEQ,0)) Q:IFN'>0<br/> . S ITEM=$G(^GMPL(125.12,IFN,0))<br/> . S TEXT=$P(ITEM,U,4)<br/> . ; SEE DD for GMPL(125.12,4 :<br/> . ; "...code which is to be displayed... generally assumed to be ICD"<br/> . S CODE=$P(ITEM,U,5)<br/> . ; if any codes inactive, exclude from list<br/> . I $L(CODE)&(CODE["/") D<br/> . . F ORK=1:1:$L(CODE,"/") Q:+ORQUIT  D<br/> . . . S ORPLCPTR=+$$CODECS^ICDEX($P(CODE,"/",ORK),80,DT),ORPLCSYS=$$SAB^ICDEX(ORPLCPTR,DT)<br/> . . . I '+$$STATCHK^ICDXCODE(ORPLCPTR,$P(CODE,"/",ORK),DT) S ORQUIT=1 Q<br/> . . Q<br/> . E  D<br/> . . S ORPLCPTR=$S($L(CODE):+$$CODECS^ICDEX(CODE,80,DT),1:""),ORPLCSYS=$S($L(CODE):$$SAB^ICDEX(ORPLCPTR,DT),1:"ICD")<br/> . . I '+$$STATCHK^ICDXCODE(ORPLCPTR,CODE,DT) S ORQUIT=1 Q<br/> . . Q<br/> . I +ORQUIT Q<br/> . S PCNT=PCNT+1<br/> . ; RETURN:<br/> . ; PROBLEM^DISPLAY TEXT^ICD CODE^ICD CODE IFN^^SNOMED CT CONCEPT CODE^SNOMED CT DESIGNATION CODE<br/> . S @TG@(PCNT)=$P(ITEM,U,3,4)_U_"("_$P($$CODECS^ICDEX($P(CODE,"/"),80,DT),U,2)_" "_$G(CODE)_")"_U_+$$ICDDATA^ICDXCODE(ORPLCSYS,$P(CODE,"/"),DT,"E")_U_U_$P(ITEM,U,6,7)</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rProbs.pas">rProbs.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}