---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDBA2 GETDUDC 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWDBA2 GETDUDC{:/}
 tag | {::nomarkdown}GETDUDC{:/}
 routine | [ORWDBA2](http://code.osehra.org/dox/Routine_ORWDBA2_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}This returns a list of unique ICD9 diagnoses codes and their descriptions on orders placed by a clinician for a patient for today. This will be used to help in filling out the encounter form.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}ORCIEN{:/} | {::nomarkdown}REFERENCE{:/} | {::nomarkdown}255{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the clinician's internal ID number.{:/} | 
| {::nomarkdown}ORPTIEN{:/} | {::nomarkdown}REFERENCE{:/} | {::nomarkdown}255{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the patient's internal ID number.{:/} | 


### MUMPS Method description

 property | value 
 --- | --- 
 Method | GETDUDC^[ORWDBA2](http://code.osehra.org/dox/Routine_ORWDBA2_source.html)
 Method comment | Get Day's Unique Diagnoses Codes
 First comment | {::nomarkdown}Gets all the unique ICD9 codes for the orders placed today by the<br/>clinician for this patient. Using the ICD9 codes it builds an array<br/>variable with the ICD9 code, its description from the ICD DIAGNOSIS<br/>file, #80. Flagging any inactive ICD9 codes with a "#".<br/>Input Variables:<br/>  ORCIEN    Clinician's internal ID number<br/>  ORPTIEN   Patient's internal ID number<br/>Output Variable:<br/>  Y         Array of ICD9 codes and descriptions<br/>            Y(#)=ICD9_code^DX_Description^DX_Inactive<br/>                 If inactive # in third piece<br/>                 If active null in third piece<br/>Local Variables:<br/>  CKDATE    Check Date (stops loop)<br/>  DXC       Diagnosis Code (for sorting)<br/>  DXD       Diagnosis Description<br/>  DXI       Diagnosis Inactive Flag<br/>  DXIEN     Diagnosis Internal Entry Number<br/>  ICD9      ICD9 code (for GUI display)<br/>  IEN       Internal Entry Number<br/>  OBJORD    Object of Order<br/>  ORDATE    Order Date<br/>  ORDG      Order Group (ACT index variable)<br/>  OREM      Order Error Message<br/>  ORIEN     Order Internal Entry Number<br/>  ORRF      Order Record Found<br/>  RCODI     Reverse Cronological Order Date Index<br/>  SUBFILE   Subfile Number{:/}
 Input parameters | {::nomarkdown}ORCIEN<br>ORPTIEN{:/}
 Code | {::nomarkdown}  N CKDATE,DXC,DXD,DXEM,DXI,DXIEN,DXRF,ICD9,IEN,OBJORD,ORDATE,ORDG,OREM<br> N ORIEN,ORRF,RCODI,SUBFILE<br> S OBJORD=ORPTIEN_";DPT("<br> S (DXIEN,ORDATE,ORDG,ORIEN,RCODI)="",CKDATE=$$F24HA<br> F  S RCODI=$O(^OR(100,"ACT",OBJORD,RCODI)) S ORDATE=9999999-RCODI Q:ORDATE<CKDATE!(RCODI="")  D<br> . F  S ORDG=$O(^OR(100,"ACT",OBJORD,RCODI,ORDG)) Q:ORDG=""  D<br> .. S ORIEN=$QS($Q(^OR(100,"ACT",OBJORD,RCODI,ORDG)),6)<br> .. K ORRF,OREM<br> .. D GETS^DIQ(100,ORIEN,"1;5.1*","I","ORRF","OREM")<br> .. S IEN=$QS($Q(ORRF(100)),2)<br> .. Q:ORRF(100,IEN,1,"I")'=ORCIEN<br> .. Q:$D(ORRF(100.051))=0<br> .. S (DXC,DXD,DXI,DXIEN,ICD9,IEN)=""<br> .. F  S IEN=$O(ORRF(100.051,IEN)) Q:IEN=""  D<br> ... Q:ORRF(100.051,IEN,.01,"I")=""<br> ... S DXIEN=ORRF(100.051,IEN,.01,"I")<br> ... S ICD9=$$GET1^DIQ(80,DXIEN,.01,"")<br> ... S DXC=$$SETDXC(ICD9)<br> ... S DXD=$$SETDXD($P($$ICDDATA^ICDXCODE("DIAGNOSIS",ICD9,ORDATE),U,4))<br> ... S DXI=$$SETDXI($$STATCHK^ICDXCODE("DIAGNOSIS",ICD9,ORDATE))<br> ... S Y(DXC)=ICD9_U_DXD_U_DXI{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 8:55:11 am</p>{:/}