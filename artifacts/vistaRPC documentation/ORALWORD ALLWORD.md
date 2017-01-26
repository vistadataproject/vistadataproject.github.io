---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORALWORD ALLWORD 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORALWORD ALLWORD{:/}
 tag | {::nomarkdown}ALLWORD{:/}
 routine | [ORALWORD](http://code.osehra.org/dox/Routine_ORALWORD_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | 

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DFN{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} |  | 
| {::nomarkdown}OROI{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} |  | 
| {::nomarkdown}ORX{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} |  | 
| {::nomarkdown}ORTYPE{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} |  | 


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | ALLWORD^[ORALWORD](http://code.osehra.org/dox/Routine_ORALWORD_source.html)
 Input parameters | {::nomarkdown}DFN, ORX, ORTYPE, PROV{:/}
 Code | {::nomarkdown}  N OROI,ORYS,QOIEN,QPIEN,ORCLOZ,QOAA<br> S OROI=0<br> I ORTYPE="E" S OROI=$G(^OR(100,ORX,.1,1,0))<br> I ORTYPE="Q" D<br> .S QPIEN=$O(^ORD(101.41,"AB","OR GTX ORDERABLE ITEM","")) Q:QPIEN'>0<br> .S QOIEN=$O(^ORD(101.41,ORX,6,"D",QPIEN,"")) Q:QOIEN'>0<br> .S OROI=$G(^ORD(101.41,ORX,6,QOIEN,1))<br> .S QOAA=$P($G(^ORD(101.41,ORX,5)),U,8)<br> I ORTYPE="N" S OROI=ORX<br> Q:OROI'>0<br> S ORY=0<br> S ORCLOZ=$$ISCLOZ(OROI),ORY=ORY_U_ORCLOZ,ORY(0)=U_ORCLOZ<br> Q:'ORCLOZ<br> N ORQUIT<br> S ORQUIT=0<br> I '$G(PROV) S PROV=DUZ<br> I $G(PROV) D<br> .I '$L($$DEA^XUSER(,PROV)) D<br> ..S ORQUIT=1,ORY=1<br> ..S ORQUIT=1,ORY=1<br> ..S ORY(1)="*** You are not authorized to place Clozapine orders."<br> ..S ORY(2)="You must have a DEA#.  Please contact your"<br> ..S ORY(3)="CAC or IRM for more information. ***"<br> .Q:ORQUIT<br> .I '$D(^XUSEC("YSCL AUTHORIZED",PROV)) D<br> ..S ORQUIT=1,ORY=1<br> ..S ORY(1)="*** You are not authorized to place Clozapine orders."<br> ..S ORY(2)="You must hold key YSCL AUTHORIZED.  Please contact your"<br> ..S ORY(3)="CAC or IRM for more information on this key. ***"<br> Q:ORQUIT<br> S ORYS=$$CL^YSCLTST2(DFN)<br> I +ORYS>0 D BEFQUIT  Q<br> S ORY=1_U_ORCLOZ,ORY(0)="Problem Ordering Clozapine Related Medication"_U_ORCLOZ<br> I +ORYS<0 D  Q<br> .S ORY(1)="*** This patient is not registered in the clozapine treatment "<br> .S ORY(2)="program or has been discontinued from the program and must "<br> .S ORY(3)="have a new registration number assigned.  Contact the NCCC to "<br> .S ORY(4)="get this patient registered in the program. ***"<br> I +ORYS=0 D  Q<br> .I $$OVERRIDE^YSCLTST2(DFN) S ORY=0_U_ORCLOZ,ORY(0)=U_ORCLOZ D BEFQUIT  Q  ;override allowed<br> .N COUNT S COUNT=0<br> .S COUNT=COUNT+1,ORY(COUNT)="*** This clozapine drug may not be dispensed to the patient at this "<br> .S COUNT=COUNT+1,ORY(COUNT)="time based on the available lab tests related to the clozapine "<br> .S COUNT=COUNT+1,ORY(COUNT)="treatment program. Please contact the NCCC to request an override in"<br> .S COUNT=COUNT+1,ORY(COUNT)="order to proceed with dispensing this drug. ***"<br> .Q:'$L($P(ORYS,U,3))!('$L($P(ORYS,U,5)))<br> .S COUNT=COUNT+1,ORY(COUNT)="Related Lab Test(s)"<br> .S COUNT=COUNT+1,ORY(COUNT)="==================="<br> .;the lab values returned by Mental Health are given in 4 digit numbers to be standard with <br> .;reporting formats to the NCCC, we are dividing by 1000 to align it with the display of the<br> .;labs on the lab tab<br> .;S:$L($P(ORYS,U,3)) COUNT=COUNT+1,ORY(COUNT)=$P(ORYS,U,3)_":  "_($P(ORYS,U,2)/1000)_" K/cmm"<br> .;S:$L($P(ORYS,U,5)) COUNT=COUNT+1,ORY(COUNT)=$P(ORYS,U,5)_":  "_($P(ORYS,U,4)/1000)_" K/cmm"<br> .S:$L($P(ORYS,U,3)) COUNT=COUNT+1,ORY(COUNT)="WBC:  "_($P(ORYS,U,2)/1000)_" K/cmm"<br> .S:$L($P(ORYS,U,5)) COUNT=COUNT+1,ORY(COUNT)="ANC:  "_($P(ORYS,U,4)/1000)_" K/cmm"<br> .S COUNT=COUNT+1,ORY(COUNT)="Date/Time of last tests: "_$$DATE^ORU($P(ORYS,U,6)){:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rODMeds.pas">Orders/rODMeds.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 26th 2017, 2:53:14 am</p>{:/}