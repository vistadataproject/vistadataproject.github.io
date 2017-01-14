---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORWDX CHANGE 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}ORWDX CHANGE{:/}
 tag | {::nomarkdown}CHANGE{:/}
 routine | [ORWDX1](http://code.osehra.org/dox/Routine_ORWDX1_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}ORCLST{:/} | {::nomarkdown}LIST{:/} |  | {::nomarkdown}true{:/} |  | 
| {::nomarkdown}DFN{:/} | {::nomarkdown}LITERAL{:/} |  |  |  | 


## MUMPS Method description

 property | value 
 --- | --- 
 Method | CHANGE^[ORWDX1](http://code.osehra.org/dox/Routine_ORWDX1_source.html)
 Input parameters | {::nomarkdown}ORCLST<br/>DFN<br/>ISIMO{:/}
 Code | ```  N CATCH,CHANGE,CNT,INP,INPDIEN,IVM,IVMDIEN,ORIEN,ORLOC,OR3,ORDG
 N CIEN,CIVIEN,DIAL,TDIAL,TDIEN,UDIEN,QORDDG,PACKIEN
 S (INP,IVM,INPDIEN,IVMDIEN,UDIEN)=0
 S (TDIAL,TDIEN)=0
 S INP=$O(^ORD(101.41,"B","PSJ OR PAT OE","")) Q:INP'>0
 S IVM=$O(^ORD(101.41,"B","PSJI OR PAT FLUID OE","")) Q:IVM'>0
 S TDIAL=$O(^ORD(101.41,"B","OR GXTEXT WORD PROCESSING ORDER","")) Q:TDIAL'>0
 S INPDIEN=$O(^ORD(100.98,"B","INPATIENT MEDICATIONS","")) Q:INPDIEN'>0
 S IVMDIEN=$O(^ORD(100.98,"B","IV MEDICATIONS","")) Q:IVMDIEN'>0
 S UDIEN=$O(^ORD(100.98,"B","UNIT DOSE MEDICATIONS","")) Q:UDIEN'>0
 S TIEN=$O(^ORD(100.98,"B","NURSING","")) Q:TIEN'>0
 S CIEN=$O(^ORD(100.98,"B","CLINIC MEDICATIONS","")) Q:CIEN'>0
 S CIVIEN=$O(^ORD(100.98,"B","CLINIC INFUSIONS","")) Q:CIEN'>0
 S CNT=0 F  S CNT=$O(ORCLST(CNT)) Q:CNT'>0  D
 .S CHANGE=0
 .S ORIEN=$P($G(ORCLST(CNT)),U),ORIEN=$P(ORIEN,";")
 .S ORDG=$P($G(^OR(100,ORIEN,0)),U,11)
 .S ORLOC=$P($G(ORCLST(CNT)),U,2)
 .S OR3=$G(^OR(100,ORIEN,3))
 .S DIAL=$P(OR3,U,4)
 .;Remove Treating Speciality if the order location is the clinic
 .I $P($G(^OR(100,ORIEN,0)),U,10)=(ORLOC_";SC("),$P($G(^SC(ORLOC,0)),U,3)="C" D  Q
 ..S $P(^OR(100,ORIEN,0),U,13)=""
 .;
 .;CHANGE PATIENT LOCATION AND PATIENT STATUS.
 .S $P(^OR(100,ORIEN,0),U,10)=ORLOC_";SC("
 .S PACKIEN=$P(^OR(100,ORIEN,0),U,14)
 .I $$GET1^DIQ(9.4,PACKIEN_",",1)'="PSO" S $P(^OR(100,ORIEN,0),U,12)="I"
 .;
 .;Check for IMO orders Nursing Dialog problem
 .S CATCH=$P($G(^OR(100,ORIEN,0)),U,11)
 .;
 .S $P(^OR(100,ORIEN,0),U,11)=$S(DIAL=(IVM_";ORD(101.41,"):IVMDIEN,DIAL=(INP_";ORD(101.41,"):INPDIEN,DIAL=(TDIAL_";ORD(101.41,"):TIEN,1:CATCH)
 .;
 .;Check for Quick Order Dialog
 .I CATCH=$P($G(^OR(100,ORIEN,0)),U,11),ISIMO=1 D
 ..S QORDDG=$P($G(^ORD(101.41,+DIAL,0)),U,5)
 ..I QORDDG=UDIEN!(QORDDG=INPDIEN) S $P(^OR(100,ORIEN,0),U,11)=INPDIEN,DIAL=(INP_";ORD(101.41,") Q
 ..I QORDDG=IVMDIEN S $P(^OR(100,ORIEN,0),U,11)=IVMDIEN,DIAL=(IVM_";ORD(101.41,") Q
 ..I QORDDG=TIEN S $P(^OR(100,ORIEN,0),U,11)=TIEN,DIAL=(TDIAL_";ORD(101.41,") Q
 .;
 .;Add treating spec if Inpatient order
 .;I (ISIMO=1)&(DIAL=(IVM_";ORD(101.41,"))!(DIAL=(INP_";ORD(101.41,")) D
 .;.S $P(^OR(100,ORIEN,0),U,13)=+$G(^DPT(DFN,.103))
 .I ISIMO=0 S $P(^OR(100,ORIEN,0),U,13)=+$G(^DPT(DFN,.103))```




 Generated on January 14th 2017, 7:26:36 am