---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORQQPL USER PROB LIST 

 property | value 
--- | --- 
 label | {::nomarkdown}ORQQPL USER PROB LIST{:/}
 tag | {::nomarkdown}PROB{:/}
 routine | [ORQQPL3](http://code.osehra.org/dox/Routine_ORQQPL3_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns array of user specific problems to select from{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Get user problem list for given group
 Input Parameters | {::nomarkdown}GROUP{:/}
 Lines | ```
 N PSEQ,PCNT,IFN,ITEM,TG,CODE,TEXT,ORPLCSYS,ORPLCPTR
 S TG=$NAME(TMP) ; put list in local
 K @TG
 S LCNT=0
 S (PSEQ,PCNT)=0
 F  S PSEQ=$O(^GMPL(125.12,"C",GROUP,PSEQ)) Q:PSEQ'>0  D
 . N ORI,ORK,ORQUIT S ORQUIT=0
 . S IFN=$O(^GMPL(125.12,"C",GROUP,PSEQ,0)) Q:IFN'>0
 . S ITEM=$G(^GMPL(125.12,IFN,0))
 . S TEXT=$P(ITEM,U,4)
 . ; SEE DD for GMPL(125.12,4 :
 . ; "...code which is to be displayed... generally assumed to be ICD"
 . S CODE=$P(ITEM,U,5)
 . ; if any codes inactive, exclude from list
 . I $L(CODE)&(CODE["/") D
 . . F ORK=1:1:$L(CODE,"/") Q:+ORQUIT  D
 . . . S ORPLCPTR=+$$CODECS^ICDEX($P(CODE,"/",ORK),80,DT),ORPLCSYS=$$SAB^ICDEX(ORPLCPTR,DT)
 . . . I '+$$STATCHK^ICDXCODE(ORPLCPTR,$P(CODE,"/",ORK),DT) S ORQUIT=1 Q
 . . Q
 . E  D
 . . S ORPLCPTR=$S($L(CODE):+$$CODECS^ICDEX(CODE,80,DT),1:""),ORPLCSYS=$S($L(CODE):$$SAB^ICDEX(ORPLCPTR,DT),1:"ICD")
 . . I '+$$STATCHK^ICDXCODE(ORPLCPTR,CODE,DT) S ORQUIT=1 Q
 . . Q
 . I +ORQUIT Q
 . S PCNT=PCNT+1
 . ; RETURN:
 . ; PROBLEM^DISPLAY TEXT^ICD CODE^ICD CODE IFN^^SNOMED CT CONCEPT CODE^SNOMED CT DESIGNATION CODE
 . S @TG@(PCNT)=$P(ITEM,U,3,4)_U_"("_$P($$CODECS^ICDEX($P(CODE,"/"),80,DT),U,2)_" "_$G(CODE)_")"_U_+$$ICDDATA^ICDXCODE(ORPLCSYS,$P(CODE,"/"),DT,"E")_U_U_$P(ITEM,U,6,7)```

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}Category{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}IFN of problem category{:/} | 




 Generated on January 13th 2017, 6:55:28 am