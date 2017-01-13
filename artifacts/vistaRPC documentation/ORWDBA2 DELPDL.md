---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDBA2 DELPDL 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWDBA2 DELPDL{:/}
 tag | {::nomarkdown}DELPDL{:/}
 routine | [ORWDBA2](http://code.osehra.org/dox/Routine_ORWDBA2_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Delete a selected diagnosis code from a Clinician's Personal DX List. The personal dx list is stored in CPRS Diagnosis Provider file, file # 5000017.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Delete from Personal Diagnosis List
 Input Parameters | {::nomarkdown}ORCIEN<br/>ORDXA{:/}
 Lines | ```
 N DXI,EM,FDA,IEN,RF
 D GETS^DIQ(200,ORCIEN,"351*,","","RF","EM")
 I $D(RF)=0 S Y=0 Q
 S IEN="" F  S IEN=$O(RF(200.0351,IEN)) Q:IEN=""  D
 .S DXI="" F  S DXI=$O(ORDXA(DXI)) Q:DXI=""  D
 .. I RF(200.0351,IEN,.01)=ORDXA(DXI) D
 ... D FDA^DILF(200.0351,IEN,.01,"","@","FDA","EM")
 ... D FILE^DIE("","FDA","EM")
 S Y=1```
 Leading comment lines | {::nomarkdown}Delete a selected diagnosis code or group of diagnoses codes from a<br/>Clinician's Personal DX List.<br/>Input Variables:<br/>ORCIEN    Clinician Internal ID number<br/>ORDXA     Array of dx codes to be deleted from personal dx list<br/>Output Variable:<br/>Y         Return value, 1 successful, 0 unsuccessful<br/>Local Variables:<br/>DXI       Diagnosis code array index<br/>EM        Error Message<br/>FDA       FileMan Data Array<br/>IEN       Interanl Entry Number<br/>RF        Record Found{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}ORCIEN{:/} | {::nomarkdown}REFERENCE{:/} | {::nomarkdown}255{:/} | {::nomarkdown}true{:/} | {::nomarkdown}The clinician's internal ID number.{:/} | 
| {::nomarkdown}ORDXA{:/} | {::nomarkdown}REFERENCE{:/} | {::nomarkdown}255{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Array of diagnoses codes to be deleted from the clinician's personaldx list.{:/} | 




 Generated on January 13th 2017, 6:55:29 am