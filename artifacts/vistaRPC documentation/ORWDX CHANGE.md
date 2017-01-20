---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDX CHANGE 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWDX CHANGE{:/}
 tag | {::nomarkdown}CHANGE{:/}
 routine | [ORWDX1](http://code.osehra.org/dox/Routine_ORWDX1_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}ORCLST{:/} | {::nomarkdown}LIST{:/} |  | {::nomarkdown}true{:/} |  | 
| {::nomarkdown}DFN{:/} | {::nomarkdown}LITERAL{:/} |  |  |  | 


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | CHANGE^[ORWDX1](http://code.osehra.org/dox/Routine_ORWDX1_source.html)
 Input parameters | {::nomarkdown}ORCLST<br>DFN<br>ISIMO{:/}
 Code | {::nomarkdown}  N CATCH,CHANGE,CNT,INP,INPDIEN,IVM,IVMDIEN,ORIEN,ORLOC,OR3,ORDG<br> N CIEN,CIVIEN,DIAL,TDIAL,TDIEN,UDIEN,QORDDG,PACKIEN<br> S (INP,IVM,INPDIEN,IVMDIEN,UDIEN)=0<br> S (TDIAL,TDIEN)=0<br> S INP=$O(^ORD(101.41,"B","PSJ OR PAT OE","")) Q:INP'>0<br> S IVM=$O(^ORD(101.41,"B","PSJI OR PAT FLUID OE","")) Q:IVM'>0<br> S TDIAL=$O(^ORD(101.41,"B","OR GXTEXT WORD PROCESSING ORDER","")) Q:TDIAL'>0<br> S INPDIEN=$O(^ORD(100.98,"B","INPATIENT MEDICATIONS","")) Q:INPDIEN'>0<br> S IVMDIEN=$O(^ORD(100.98,"B","IV MEDICATIONS","")) Q:IVMDIEN'>0<br> S UDIEN=$O(^ORD(100.98,"B","UNIT DOSE MEDICATIONS","")) Q:UDIEN'>0<br> S TIEN=$O(^ORD(100.98,"B","NURSING","")) Q:TIEN'>0<br> S CIEN=$O(^ORD(100.98,"B","CLINIC MEDICATIONS","")) Q:CIEN'>0<br> S CIVIEN=$O(^ORD(100.98,"B","CLINIC INFUSIONS","")) Q:CIEN'>0<br> S CNT=0 F  S CNT=$O(ORCLST(CNT)) Q:CNT'>0  D<br> .S CHANGE=0<br> .S ORIEN=$P($G(ORCLST(CNT)),U),ORIEN=$P(ORIEN,";")<br> .S ORDG=$P($G(^OR(100,ORIEN,0)),U,11)<br> .S ORLOC=$P($G(ORCLST(CNT)),U,2)<br> .S OR3=$G(^OR(100,ORIEN,3))<br> .S DIAL=$P(OR3,U,4)<br> .;Remove Treating Speciality if the order location is the clinic<br> .I $P($G(^OR(100,ORIEN,0)),U,10)=(ORLOC_";SC("),$P($G(^SC(ORLOC,0)),U,3)="C" D  Q<br> ..S $P(^OR(100,ORIEN,0),U,13)=""<br> .;<br> .;CHANGE PATIENT LOCATION AND PATIENT STATUS.<br> .S $P(^OR(100,ORIEN,0),U,10)=ORLOC_";SC("<br> .S PACKIEN=$P(^OR(100,ORIEN,0),U,14)<br> .I $$GET1^DIQ(9.4,PACKIEN_",",1)'="PSO" S $P(^OR(100,ORIEN,0),U,12)="I"<br> .;<br> .;Check for IMO orders Nursing Dialog problem<br> .S CATCH=$P($G(^OR(100,ORIEN,0)),U,11)<br> .;<br> .S $P(^OR(100,ORIEN,0),U,11)=$S(DIAL=(IVM_";ORD(101.41,"):IVMDIEN,DIAL=(INP_";ORD(101.41,"):INPDIEN,DIAL=(TDIAL_";ORD(101.41,"):TIEN,1:CATCH)<br> .;<br> .;Check for Quick Order Dialog<br> .I CATCH=$P($G(^OR(100,ORIEN,0)),U,11),ISIMO=1 D<br> ..S QORDDG=$P($G(^ORD(101.41,+DIAL,0)),U,5)<br> ..I QORDDG=UDIEN!(QORDDG=INPDIEN) S $P(^OR(100,ORIEN,0),U,11)=INPDIEN,DIAL=(INP_";ORD(101.41,") Q<br> ..I QORDDG=IVMDIEN S $P(^OR(100,ORIEN,0),U,11)=IVMDIEN,DIAL=(IVM_";ORD(101.41,") Q<br> ..I QORDDG=TIEN S $P(^OR(100,ORIEN,0),U,11)=TIEN,DIAL=(TDIAL_";ORD(101.41,") Q<br> .;<br> .;Add treating spec if Inpatient order<br> .;I (ISIMO=1)&(DIAL=(IVM_";ORD(101.41,"))!(DIAL=(INP_";ORD(101.41,")) D<br> .;.S $P(^OR(100,ORIEN,0),U,13)=+$G(^DPT(DFN,.103))<br> .I ISIMO=0 S $P(^OR(100,ORIEN,0),U,13)=+$G(^DPT(DFN,.103)){:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/fClinicWardMeds.pas">fClinicWardMeds.pas</a><br/> <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/fPrintLocation.pas">fPrintLocation.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 5:08:32 am</p>{:/}