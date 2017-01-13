---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORQQPL DETAIL 

 property | value 
--- | --- 
 label | {::nomarkdown}ORQQPL DETAIL{:/}
 tag | {::nomarkdown}DETAIL{:/}
 routine | [ORQQPL](http://code.osehra.org/dox/Routine_ORQQPL_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Function returns a string of detailed information for a problem.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | RETURN DETAILED PROBLEM DATA
 Input Parameters | {::nomarkdown}DFN<br/>PROBIEN<br/>ID{:/}
 Lines | ```
 N ORGMPL,ORIDT,GMPDT,ORICDLBL
 S ORIDT=$S($P(DFN,U,2)]"":$P(DFN,U,2),1:DT)
 S DFN=+DFN
 S:ORIDT'>0 ORIDT=DT
 I $L($T(DETAIL^GMPLUTL2))>0 D
 .N CR,I,J,T,LEX S CR=$CHAR(13),I=1
 .D DETAIL^GMPLUTL2(PROBIEN,.ORGMPL)
 .S ORICDLBL=$P($$CODECS^ICDEX(ORGMPL("DIAGNOSIS"),80,ORGMPL("DTINTEREST")),U,2)
 .S Y(I)=ORGMPL("NARRATIVE"),I=I+1
 .I '+$$STATCHK^ICDXCODE(ORGMPL("CSYS"),ORGMPL("DIAGNOSIS"),ORIDT) D  I 1
 ..S Y(I)="*** The "_ORICDLBL_" code "_ORGMPL("DIAGNOSIS")_" is currently inactive. ***",I=I+1
 .I +$G(ORGMPL("SCTC")),(+$$STATCHK^LEXSRC2($G(ORGMPL("SCTC")),ORIDT,.LEX)'=1) D
 ..S Y(I)="*** The SNOMED-CT code "_ORGMPL("SCTC")_" is currently inactive. ***",I=I+1
 .I $L($G(ORGMPL("SCTC")))!$L($G(ORGMPL("SCTD"))) D  I 1
 ..I $P(ORGMPL("NARRATIVE")," (SCT")'=ORGMPL("SCTT") S Y(I)="         SNOMED-CT: "_ORGMPL("SCTT"),I=I+1
 ..I $L($G(ORGMPL("DIAGNOSIS")))&$L($G(ORGMPL("ICDD"))) S Y(I)=$S(ORGMPL("CSYS")="10D":" Primary ",1:"  Primary ")_ORICDLBL_": "_$G(ORGMPL("DIAGNOSIS"))_$$PAD^ORUTL($G(ORGMPL("DIAGNOSIS")),6)_" ["_$G(ORGMPL("ICDD"))_"]",I=I+1
 .E  I $L($G(ORGMPL("ICDD"))) D
 ..N ICDD,J S ICDD=$$WRAP^ORU2($G(ORGMPL("ICDD")),65)
 ..F J=1:1:$L(ICDD,"|") S Y(I)=$S(J=1:ORICDLBL_" TEXT: ",1:"              ")_$P(ICDD,"|",J),I=I+1
 .I ORGMPL("ICD9MLTP")'="" F T=1:1:ORGMPL("ICD9MLTP") D
 ..N ORMELBL S ORMELBL=$S($P($G(ORGMPL("ICD9MLTP",T)),U,3)="10D":"ICD-10-CM",1:"ICD-9-CM")
 ..S Y(I)=$S(T=1:"Secondary "_ORMELBL_": ",T>1:"                  : ")_$P($G(ORGMPL("ICD9MLTP",T)),U)_$$PAD^ORUTL($P($G(ORGMPL("ICD9MLTP",T)),U),6)_" ["_$P($G(ORGMPL("ICD9MLTP",T)),U,2)_"]",I=I+1
 .S Y(I)=" ",I=I+1
 .S Y(I)="        Onset: "_ORGMPL("ONSET"),I=I+1
 .S Y(I)="       Status: "_ORGMPL("STATUS")
 .S Y(I)=Y(I)_$S(ORGMPL("PRIORITY")="ACUTE":"/ACUTE",ORGMPL("PRIORITY")="CHRONIC":"/CHRONIC",1:""),I=I+1
 .S Y(I)="      SC Cond: "_ORGMPL("SC"),I=I+1
 .S Y(I)="     Exposure: "_$S($G(ORGMPL("EXPOSURE"))>0:ORGMPL("EXPOSURE",1),1:"None"),I=I+1
 .I $G(ORGMPL("EXPOSURE"))>1 F J=2:1:ORGMPL("EXPOSURE")  D
 ..S Y(I)="               "_ORGMPL("EXPOSURE",J),I=I+1
 .S Y(I)=" ",I=I+1
 .S Y(I)="     Provider: "_ORGMPL("PROVIDER"),I=I+1
 .S Y(I)="       Clinic: "_ORGMPL("CLINIC"),I=I+1
 .S Y(I)=" ",I=I+1
 .S Y(I)="     Recorded: "_$P(ORGMPL("RECORDED"),U)_", by "_$P(ORGMPL("RECORDED"),U,2),I=I+1
 .S Y(I)="      Entered: "_$P(ORGMPL("ENTERED"),U)_", by "_$P(ORGMPL("ENTERED"),U,2),I=I+1
 .S Y(I)="      Updated: "_ORGMPL("MODIFIED"),I=I+1
 .S Y(I)=" ",I=I+1
 .;S Y(I)=" Comment: "_$S($G(ORGMPL("COMMENT"))>0:ORGMPL("COMMENT"),1:"")
 .I $G(ORGMPL("COMMENT"))>0 D
 ..S Y(I)="----------- Comments -----------",I=I+1
 ..;F J=ORGMPL("COMMENT"):-1:1  D
 ..;.S Y(I)=ORGMPL("COMMENT",J)
 ..;.S Y(I)=$P(Y(I),U)_" by "_$P(Y(I),U,2)_": "_$P(Y(I),U,3),I=I+1
 ..F J=1:1:ORGMPL("COMMENT")  D
 ...S Y(I)=ORGMPL("COMMENT",J)
 ...S Y(I)=$P(Y(I),U)_" by "_$P(Y(I),U,2)_": "_$P(Y(I),U,3),I=I+1
 .S Y(I)=" ",I=I+1
 .D HIST^ORQQPL2(.GMPDT,PROBIEN)
 .I $G(GMPDT(0))>0 D
 ..S Y(I)="----------- Audit History -----------",I=I+1
 ..F J=1:1:GMPDT(0)  S Y(I)=$P(GMPDT(J),U)_":  "_$P(GMPDT(J),U,2),I=I+1
 I $L($T(DETAIL^GMPLUTL2))<1 S Y(1)="Problem list not available."```

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}PROBLEM ID{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} | {::nomarkdown}true{:/} | {::nomarkdown}The record number of the problem from the Problem File (#9000011).{:/} | 




 Generated on January 13th 2017, 6:55:28 am