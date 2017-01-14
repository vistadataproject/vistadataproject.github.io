---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORWDBA2 GETPDL 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}ORWDBA2 GETPDL{:/}
 tag | {::nomarkdown}GETPDL{:/}
 routine | [ORWDBA2](http://code.osehra.org/dox/Routine_ORWDBA2_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns a clinician's personal diagnosis codes.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}ORCIEN{:/} | {::nomarkdown}REFERENCE{:/} | {::nomarkdown}255{:/} | {::nomarkdown}true{:/} | {::nomarkdown}The clinician's internal ID number.{:/} | 


## MUMPS Method description

 property | value 
 --- | --- 
 Method | GETPDL^[ORWDBA2](http://code.osehra.org/dox/Routine_ORWDBA2_source.html)
 Method comment | Get Personal Diagnosis List
 First comment | {::nomarkdown}This gets the clinician's personal diagnosis list. Using the personal<br/>diagnosis list, builds and returns an array variable with the ICD9<br/>codes and descriptions stored in the ICD DIAGNOSIS file, # 80.<br/>Flagging any inactive ICD9 code with a "#".<br/>Input Variable:<br/>ORCIEN    Clinician Internal ID number<br/>Output Variable:<br/>Y         Array of ICD9 codes and descriptions<br/>Y(#)=ICD9_code^DX_description^DX_Inactive<br/>If inactive # in third piece<br/>If active null in third piece<br/>Local Variables:<br/>DXC       Diagnosis Code (for sorting)<br/>DXD       Diagnosis Description<br/>DXDT      Diagnosis Date<br/>DXI       Diagnosis Inactive Flag<br/>EM        Error Message<br/>ICD9      ICD9 code (for GUI)<br/>IEN       Internal Entry Number<br/>RF        Record Found{:/}
 Input parameters | {::nomarkdown}ORCIEN{:/}
 Code | ```  N DXC,DXD,DXDT,DXI,EM,ICD9,IEN,RF
 S DXDT=$$NOW^XLFDT
 D GETS^DIQ(200,ORCIEN,"351*,","EI","RF","EM")
 I $D(RF) D
 . S (DXC,DXD,DXI,ICD9,IEN)=""
 . F  S IEN=$O(RF(200.0351,IEN)) Q:IEN=""  D
 .. S ICD9=RF(200.0351,IEN,.01,"E")
 .. S DXC=$$SETDXC(ICD9)
 .. I $G(RF(200.0351,IEN,1,"I"))="" S DXD=$$SETDXD($P($$ICDDATA^ICDXCODE("DIAGNOSIS",ICD9,DXDT),U,4))
 .. I $G(RF(200.0351,IEN,1,"I"))=1 S DXD=$$SETDXD($P($$ICDDATA^ICDXCODE("DIAGNOSIS",ICD9,DXDT),U,4))
 .. I $G(RF(200.0351,IEN,1,"I"))>1 S DXD=RF(200.0351,IEN,1,"E")
 .. S DXI=$$SETDXI($$STATCHK^ICDXCODE("DIAGNOSIS",ICD9,DXDT))
 .. S Y(DXC)=ICD9_U_DXD_U_DXI
 E  S Y=0```




 Generated on January 14th 2017, 7:26:36 am