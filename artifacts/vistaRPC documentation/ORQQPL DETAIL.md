---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORQQPL DETAIL 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORQQPL DETAIL{:/}
 tag | {::nomarkdown}DETAIL{:/}
 routine | [ORQQPL](http://code.osehra.org/dox/Routine_ORQQPL_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Function returns a string of detailed information for a problem.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}PROBLEM ID{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} | {::nomarkdown}true{:/} | {::nomarkdown}The record number of the problem from the Problem File (#9000011).{:/} | 


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | DETAIL^[ORQQPL](http://code.osehra.org/dox/Routine_ORQQPL_source.html)
 Method comment | RETURN DETAILED PROBLEM DATA
 Input parameters | {::nomarkdown}DFN, PROBIEN, ID{:/}
 Code | {::nomarkdown}  N ORGMPL,ORIDT,GMPDT,ORICDLBL<br> S ORIDT=$S($P(DFN,U,2)]"":$P(DFN,U,2),1:DT)<br> S DFN=+DFN<br> S:ORIDT'>0 ORIDT=DT<br> I $L($T(DETAIL^GMPLUTL2))>0 D<br> .N CR,I,J,T,LEX S CR=$CHAR(13),I=1<br> .D DETAIL^GMPLUTL2(PROBIEN,.ORGMPL)<br> .S ORICDLBL=$P($$CODECS^ICDEX(ORGMPL("DIAGNOSIS"),80,ORGMPL("DTINTEREST")),U,2)<br> .S Y(I)=ORGMPL("NARRATIVE"),I=I+1<br> .I '+$$STATCHK^ICDXCODE(ORGMPL("CSYS"),ORGMPL("DIAGNOSIS"),ORIDT) D  I 1<br> ..S Y(I)="*** The "_ORICDLBL_" code "_ORGMPL("DIAGNOSIS")_" is currently inactive. ***",I=I+1<br> .I +$G(ORGMPL("SCTC")),(+$$STATCHK^LEXSRC2($G(ORGMPL("SCTC")),ORIDT,.LEX)'=1) D<br> ..S Y(I)="*** The SNOMED-CT code "_ORGMPL("SCTC")_" is currently inactive. ***",I=I+1<br> .I $L($G(ORGMPL("SCTC")))!$L($G(ORGMPL("SCTD"))) D  I 1<br> ..I $P(ORGMPL("NARRATIVE")," (SCT")'=ORGMPL("SCTT") S Y(I)="         SNOMED-CT: "_ORGMPL("SCTT"),I=I+1<br> ..I $L($G(ORGMPL("DIAGNOSIS")))&$L($G(ORGMPL("ICDD"))) S Y(I)=$S(ORGMPL("CSYS")="10D":" Primary ",1:"  Primary ")_ORICDLBL_": "_$G(ORGMPL("DIAGNOSIS"))_$$PAD^ORUTL($G(ORGMPL("DIAGNOSIS")),6)_" ["_$G(ORGMPL("ICDD"))_"]",I=I+1<br> .E  I $L($G(ORGMPL("ICDD"))) D<br> ..N ICDD,J S ICDD=$$WRAP^ORU2($G(ORGMPL("ICDD")),65)<br> ..F J=1:1:$L(ICDD,"|") S Y(I)=$S(J=1:ORICDLBL_" TEXT: ",1:"              ")_$P(ICDD,"|",J),I=I+1<br> .I ORGMPL("ICD9MLTP")'="" F T=1:1:ORGMPL("ICD9MLTP") D<br> ..N ORMELBL S ORMELBL=$S($P($G(ORGMPL("ICD9MLTP",T)),U,3)="10D":"ICD-10-CM",1:"ICD-9-CM")<br> ..S Y(I)=$S(T=1:"Secondary "_ORMELBL_": ",T>1:"                  : ")_$P($G(ORGMPL("ICD9MLTP",T)),U)_$$PAD^ORUTL($P($G(ORGMPL("ICD9MLTP",T)),U),6)_" ["_$P($G(ORGMPL("ICD9MLTP",T)),U,2)_"]",I=I+1<br> .S Y(I)=" ",I=I+1<br> .S Y(I)="        Onset: "_ORGMPL("ONSET"),I=I+1<br> .S Y(I)="       Status: "_ORGMPL("STATUS")<br> .S Y(I)=Y(I)_$S(ORGMPL("PRIORITY")="ACUTE":"/ACUTE",ORGMPL("PRIORITY")="CHRONIC":"/CHRONIC",1:""),I=I+1<br> .S Y(I)="      SC Cond: "_ORGMPL("SC"),I=I+1<br> .S Y(I)="     Exposure: "_$S($G(ORGMPL("EXPOSURE"))>0:ORGMPL("EXPOSURE",1),1:"None"),I=I+1<br> .I $G(ORGMPL("EXPOSURE"))>1 F J=2:1:ORGMPL("EXPOSURE")  D<br> ..S Y(I)="               "_ORGMPL("EXPOSURE",J),I=I+1<br> .S Y(I)=" ",I=I+1<br> .S Y(I)="     Provider: "_ORGMPL("PROVIDER"),I=I+1<br> .S Y(I)="       Clinic: "_ORGMPL("CLINIC"),I=I+1<br> .S Y(I)=" ",I=I+1<br> .S Y(I)="     Recorded: "_$P(ORGMPL("RECORDED"),U)_", by "_$P(ORGMPL("RECORDED"),U,2),I=I+1<br> .S Y(I)="      Entered: "_$P(ORGMPL("ENTERED"),U)_", by "_$P(ORGMPL("ENTERED"),U,2),I=I+1<br> .S Y(I)="      Updated: "_ORGMPL("MODIFIED"),I=I+1<br> .S Y(I)=" ",I=I+1<br> .;S Y(I)=" Comment: "_$S($G(ORGMPL("COMMENT"))>0:ORGMPL("COMMENT"),1:"")<br> .I $G(ORGMPL("COMMENT"))>0 D<br> ..S Y(I)="----------- Comments -----------",I=I+1<br> ..;F J=ORGMPL("COMMENT"):-1:1  D<br> ..;.S Y(I)=ORGMPL("COMMENT",J)<br> ..;.S Y(I)=$P(Y(I),U)_" by "_$P(Y(I),U,2)_": "_$P(Y(I),U,3),I=I+1<br> ..F J=1:1:ORGMPL("COMMENT")  D<br> ...S Y(I)=ORGMPL("COMMENT",J)<br> ...S Y(I)=$P(Y(I),U)_" by "_$P(Y(I),U,2)_": "_$P(Y(I),U,3),I=I+1<br> .S Y(I)=" ",I=I+1<br> .D HIST^ORQQPL2(.GMPDT,PROBIEN)<br> .I $G(GMPDT(0))>0 D<br> ..S Y(I)="----------- Audit History -----------",I=I+1<br> ..F J=1:1:GMPDT(0)  S Y(I)=$P(GMPDT(J),U)_":  "_$P(GMPDT(J),U,2),I=I+1<br> I $L($T(DETAIL^GMPLUTL2))<1 S Y(1)="Problem list not available."{:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rCover.pas">rCover.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 22nd 2017, 3:10:56 am</p>{:/}