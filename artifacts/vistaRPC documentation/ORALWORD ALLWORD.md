---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORALWORD ALLWORD 

 property | value 
--- | --- 
 label | {::nomarkdown}ORALWORD ALLWORD{:/}
 tag | {::nomarkdown}ALLWORD{:/}
 routine | [ORALWORD](http://code.osehra.org/dox/Routine_ORALWORD_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | 


### Method description

 property | value 
 --- | --- 
 Input Parameters | {::nomarkdown}DFN<br/>ORX<br/>ORTYPE<br/>PROV{:/}
 Lines | ```
 N OROI,ORYS,QOIEN,QPIEN,ORCLOZ,QOAA
 S OROI=0
 I ORTYPE="E" S OROI=$G(^OR(100,ORX,.1,1,0))
 I ORTYPE="Q" D
 .S QPIEN=$O(^ORD(101.41,"AB","OR GTX ORDERABLE ITEM","")) Q:QPIEN'>0
 .S QOIEN=$O(^ORD(101.41,ORX,6,"D",QPIEN,"")) Q:QOIEN'>0
 .S OROI=$G(^ORD(101.41,ORX,6,QOIEN,1))
 .S QOAA=$P($G(^ORD(101.41,ORX,5)),U,8)
 I ORTYPE="N" S OROI=ORX
 Q:OROI'>0
 S ORY=0
 S ORCLOZ=$$ISCLOZ(OROI),ORY=ORY_U_ORCLOZ,ORY(0)=U_ORCLOZ
 Q:'ORCLOZ
 N ORQUIT
 S ORQUIT=0
 I '$G(PROV) S PROV=DUZ
 I $G(PROV) D
 .I '$L($$DEA^XUSER(,PROV)) D
 ..S ORQUIT=1,ORY=1
 ..S ORQUIT=1,ORY=1
 ..S ORY(1)="*** You are not authorized to place Clozapine orders."
 ..S ORY(2)="You must have a DEA#.  Please contact your"
 ..S ORY(3)="CAC or IRM for more information. ***"
 .Q:ORQUIT
 .I '$D(^XUSEC("YSCL AUTHORIZED",PROV)) D
 ..S ORQUIT=1,ORY=1
 ..S ORY(1)="*** You are not authorized to place Clozapine orders."
 ..S ORY(2)="You must hold key YSCL AUTHORIZED.  Please contact your"
 ..S ORY(3)="CAC or IRM for more information on this key. ***"
 Q:ORQUIT
 S ORYS=$$CL^YSCLTST2(DFN)
 I +ORYS>0 D BEFQUIT  Q
 S ORY=1_U_ORCLOZ,ORY(0)="Problem Ordering Clozapine Related Medication"_U_ORCLOZ
 I +ORYS<0 D  Q
 .S ORY(1)="*** This patient is not registered in the clozapine treatment "
 .S ORY(2)="program or has been discontinued from the program and must "
 .S ORY(3)="have a new registration number assigned.  Contact the NCCC to "
 .S ORY(4)="get this patient registered in the program. ***"
 I +ORYS=0 D  Q
 .I $$OVERRIDE^YSCLTST2(DFN) S ORY=0_U_ORCLOZ,ORY(0)=U_ORCLOZ D BEFQUIT  Q  ;override allowed
 .N COUNT S COUNT=0
 .S COUNT=COUNT+1,ORY(COUNT)="*** This clozapine drug may not be dispensed to the patient at this "
 .S COUNT=COUNT+1,ORY(COUNT)="time based on the available lab tests related to the clozapine "
 .S COUNT=COUNT+1,ORY(COUNT)="treatment program. Please contact the NCCC to request an override in"
 .S COUNT=COUNT+1,ORY(COUNT)="order to proceed with dispensing this drug. ***"
 .Q:'$L($P(ORYS,U,3))!('$L($P(ORYS,U,5)))
 .S COUNT=COUNT+1,ORY(COUNT)="Related Lab Test(s)"
 .S COUNT=COUNT+1,ORY(COUNT)="==================="
 .;the lab values returned by Mental Health are given in 4 digit numbers to be standard with 
 .;reporting formats to the NCCC, we are dividing by 1000 to align it with the display of the
 .;labs on the lab tab
 .;S:$L($P(ORYS,U,3)) COUNT=COUNT+1,ORY(COUNT)=$P(ORYS,U,3)_":  "_($P(ORYS,U,2)/1000)_" K/cmm"
 .;S:$L($P(ORYS,U,5)) COUNT=COUNT+1,ORY(COUNT)=$P(ORYS,U,5)_":  "_($P(ORYS,U,4)/1000)_" K/cmm"
 .S:$L($P(ORYS,U,3)) COUNT=COUNT+1,ORY(COUNT)="WBC:  "_($P(ORYS,U,2)/1000)_" K/cmm"
 .S:$L($P(ORYS,U,5)) COUNT=COUNT+1,ORY(COUNT)="ANC:  "_($P(ORYS,U,4)/1000)_" K/cmm"
 .S COUNT=COUNT+1,ORY(COUNT)="Date/Time of last tests: "_$$DATE^ORU($P(ORYS,U,6))```

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DFN{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} |  | 
| {::nomarkdown}OROI{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} |  | 
| {::nomarkdown}ORX{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} |  | 
| {::nomarkdown}ORTYPE{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} |  | 




 Generated on January 13th 2017, 6:55:29 am