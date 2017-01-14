---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORQPT WARD PATIENTS 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}ORQPT WARD PATIENTS{:/}
 tag | {::nomarkdown}WARDPTS{:/}
 routine | [ORQPTQ2](http://code.osehra.org/dox/Routine_ORQPTQ2_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Function returns a list of patients on a ward.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}WARD ID{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} | {::nomarkdown}true{:/} | {::nomarkdown}The record number of the ward from the Ward Location File (#42).{:/} | 


## MUMPS Method description

 property | value 
 --- | --- 
 Method | WARDPTS^[ORQPTQ2](http://code.osehra.org/dox/Routine_ORQPTQ2_source.html)
 Method comment | RETURN LIST OF PATIENTS IN A WARD
 First comment | {::nomarkdown}SLC/PKS - Modifications for Room/Bed data on  1/19/2001.{:/}
 Input parameters | {::nomarkdown}WARD{:/}
 Code | ```  I +$G(WARD)<1 S Y(1)="^No ward identified" Q 
 N ORI,DFN,RBDAT
 S ORI=1,DFN=0
 S WARD=$P(^DIC(42,WARD,0),"^")   ;GET WARD NAME FOR "CN"  LOOKUP
 F  D  Q:DFN'>0
 .S DFN=$O(^DPT("CN",WARD,DFN)) Q:DFN'>0
 .S Y(ORI)=+DFN_"^"_$P(^DPT(+DFN,0),"^")
 .S RBDAT=""
 .; Add patient room/bed information where data exists:
 .S RBDAT=$P($G(^DPT(+DFN,.101)),U)
 .I RBDAT'="" D                                   ; Any R/B data?
 ..I $L(RBDAT)<4 S RBDAT=RBDAT_"   "              ; Add if < 4 chars.
 ..S RBDAT=$E(RBDAT,1,4)                          ; Get first 4 only.
 .S Y(ORI)=Y(ORI)_U_RBDAT                         ; Add R/B to string
 .S ORI=ORI+1                                     ; Increment counter.
 S:+$G(Y(1))<1 Y(1)="^No patients found."```




 Generated on January 14th 2017, 7:26:35 am