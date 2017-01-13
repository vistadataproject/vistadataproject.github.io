---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORQQPL LIST 

 property | value 
--- | --- 
 label | {::nomarkdown}ORQQPL LIST{:/}
 tag | {::nomarkdown}LIST{:/}
 routine | [ORQQPL](http://code.osehra.org/dox/Routine_ORQQPL_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Function returns a list of problems for a patient.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | return pt's problem list in format: ien^description^
 Input Parameters | {::nomarkdown}DFN<br/>STATUS{:/}
 Lines | ```
 Q:'+DFN
 N ORGMPL,I,DETAIL,ORIDT,IMPLDT
 S IMPLDT=$$IMPDATE^LEXU("10D")
 S ORIDT=$S($P(DFN,U,2)]"":$P(DFN,U,2),1:DT)
 S:ORIDT'>0 ORIDT=DT
 S DFN=+DFN
 I $L($T(LIST^GMPLUTL2))>0 D
 .D LIST^GMPLUTL2(.ORGMPL,DFN,STATUS)
 .Q:'$D(ORGMPL(0))
 .S DETAIL=$$DETAIL^ORWCV1(10)
 .F I=1:1:ORGMPL(0) D
 ..N LEX,X
 ..S X=ORGMPL(I)
 ..S ORPY(I)=$P(X,U)_U_$P(X,U,3)_U_$P(X,U,2)_U_$P(X,U,4)_U_$P(X,U,5)_U_$P(X,U,6)_U_$P(X,U,7)_U_$P(X,U,8)_U_$P(X,U,10)_U_$P(X,U,9)_U_U_DETAIL_U_U_$P(X,U,11)_U_$P(X,U,12)_U_$P(X,U,13)
 ..S ORPY(I)=ORPY(I)_U_$S($P(ORPY(I),U,2)?.U1" "1"-"1" ".E:1,1:"")
 ..I (ORIDT<IMPLDT),(+$$STATCHK^ICDXCODE($P(ORPY(I),U,16),$P(ORPY(I),U,4),ORIDT)'=1) D  I 1
 ...S $P(ORPY(I),U,13)="#",$P(ORPY(I),U,9)="#"
 ..E  I $L($P(ORPY(I),U,14)),(+$$STATCHK^LEXSRC2($P(ORPY(I),U,14),ORIDT,.LEX)'=1) S $P(ORPY(I),U,13)="$",$P(ORPY(I),U,9)="#"
 .S:+$G(ORPY(1))<1 ORPY(1)="^No problems found."
 I $L($T(LIST^GMPLUTL2))<1 S ORPY(1)="^Problem list not available.^"
 K X```
 Leading comment lines | {::nomarkdown}ICD^onset^last modified^SC^SpExp<br/>STATUS = status of problems to return: (A)CTIVE, (I)NACTIVE, ("")ALL{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}PATIENT ID{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} | {::nomarkdown}true{:/} | {::nomarkdown}The record number of the patient from the Patient FIle (#2).{:/} | 
| {::nomarkdown}STATUS{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}2{:/} |  | {::nomarkdown}The status of the problems to retrieve. A = Active problems only, I = Inactive problems only, \\ or undefined = all problems regardless ofstatus.{:/} | 




 Generated on January 13th 2017, 6:55:28 am