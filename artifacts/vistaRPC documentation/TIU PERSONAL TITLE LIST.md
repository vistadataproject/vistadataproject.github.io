---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; TIU PERSONAL TITLE LIST 

 property | value 
--- | --- 
 label | {::nomarkdown}TIU PERSONAL TITLE LIST{:/}
 tag | {::nomarkdown}PERSLIST{:/}
 routine | [TIUSRVD](http://code.osehra.org/dox/Routine_TIUSRVD_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}This Remote Procedure returns the user's list of preferred titles for agiven class of documents, along with the default title, if specified.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Get personal list for a user
 Input Parameters | {::nomarkdown}DUZ<br/>CLASS<br/>TIUC<br/>TIUFLG{:/}
 Lines | ```
 N TIUI,TIUDA,TIUDFLT,INLST
 S TIUDA=+$O(^TIU(8925.98,"AC",DUZ,CLASS,0))
 Q:+TIUDA'>0
 I +$G(TIUFLG) S TIUC=1,TIUY(TIUC)="~SHORT LIST"
 S TIUI=0,TIUC=+$G(TIUC)
 F  S TIUI=$O(^TIU(8925.98,TIUDA,10,TIUI)) Q:+TIUI'>0  D
 . N TIUPL,TIUTNM,TIUDTYP,TIUSEQ
 . S TIUPL=$G(^TIU(8925.98,TIUDA,10,TIUI,0))
 . S TIUDTYP=$P(TIUPL,U)
 . I $S(+$$CANENTR^TIULP(TIUDTYP)'>0:1,+$$CANPICK^TIULP(TIUDTYP)'>0:1,1:0) Q
 . S TIUTNM=$S($P(TIUPL,U,3)]"":$P(TIUPL,U,3),1:$$PNAME^TIULC1(+TIUDTYP))
 . S TIUSEQ=+$P(TIUPL,U,2),TIUC=+$G(TIUC)+1
 . S TIUSEQ=$S(+TIUSEQ:$S('$D(TIUY(TIUSEQ)):TIUSEQ,1:(TIUSEQ+1)),1:TIUC)
 . S TIUY(TIUSEQ)="i"_TIUDTYP_U_TIUTNM,TIUC=+TIUSEQ
 I +$G(TIUFLG) Q
 S TIUDFLT=$$PERSDOC^TIULE(DUZ,+CLASS)
 S (TIUI,TIUC)=0
 F  S TIUI=$O(TIUY(TIUI)) Q:+TIUI'>0  D
 . S TIUC=TIUI
 . I +TIUDFLT,($P($G(TIUY(TIUI)),U)=("i"_+TIUDFLT)) S $P(TIUDFLT,U,2)=$P(TIUY(TIUI),U,2),INLST=TIUI
 I +TIUDFLT D
 . ;if default isn't in list, append it as an item
 . I '$G(INLST) S TIUC=+$G(TIUC)+1,TIUY(TIUC)="i"_TIUDFLT
 . ;otherwise, just append as default
 . S TIUC=+$G(TIUC)+1,TIUY(TIUC)="d"_TIUDFLT```

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DUZ{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is the user's ID number (Pointer to file 200).{:/} | 
| {::nomarkdown}CLASS{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}This is the Class of Documents (Pointer to file 8925.1) from which thetitle is to be selected.{:/} | 
| {::nomarkdown}INDEX{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is the array subscript from which to begin incrementing (in the eventthat the preferred list is to be appended to an existing array).{:/} | 




 Generated on January 13th 2017, 6:55:28 am