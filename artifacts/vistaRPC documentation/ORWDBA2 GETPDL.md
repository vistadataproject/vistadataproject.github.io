---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDBA2 GETPDL 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWDBA2 GETPDL{:/}
 tag | {::nomarkdown}GETPDL{:/}
 routine | [ORWDBA2](http://code.osehra.org/dox/Routine_ORWDBA2_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns a clinician's personal diagnosis codes.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}ORCIEN{:/} | {::nomarkdown}REFERENCE{:/} | {::nomarkdown}255{:/} | {::nomarkdown}true{:/} | {::nomarkdown}The clinician's internal ID number.{:/} | 


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | GETPDL^[ORWDBA2](http://code.osehra.org/dox/Routine_ORWDBA2_source.html)
 Method comment | Get Personal Diagnosis List
 Input parameters | {::nomarkdown}ORCIEN{:/}
 First comment | {::nomarkdown}<pre>This gets the clinician's personal diagnosis list. Using the personal<br/>diagnosis list, builds and returns an array variable with the ICD9<br/>codes and descriptions stored in the ICD DIAGNOSIS file, # 80.<br/>Flagging any inactive ICD9 code with a "#".<br/>Input Variable:<br/>  ORCIEN    Clinician Internal ID number<br/>Output Variable:<br/>  Y         Array of ICD9 codes and descriptions<br/>            Y(#)=ICD9_code^DX_description^DX_Inactive<br/>                 If inactive # in third piece<br/>                 If active null in third piece<br/>Local Variables:<br/>  DXC       Diagnosis Code (for sorting)<br/>  DXD       Diagnosis Description<br/>  DXDT      Diagnosis Date<br/>  DXI       Diagnosis Inactive Flag<br/>  EM        Error Message<br/>  ICD9      ICD9 code (for GUI)<br/>  IEN       Internal Entry Number<br/>  RF        Record Found</pre>{:/}
 Code | {::nomarkdown}  N DXC,DXD,DXDT,DXI,EM,ICD9,IEN,RF<br> S DXDT=$$NOW^XLFDT<br> D GETS^DIQ(200,ORCIEN,"351*,","EI","RF","EM")<br> I $D(RF) D<br> . S (DXC,DXD,DXI,ICD9,IEN)=""<br> . F  S IEN=$O(RF(200.0351,IEN)) Q:IEN=""  D<br> .. S ICD9=RF(200.0351,IEN,.01,"E")<br> .. S DXC=$$SETDXC(ICD9)<br> .. I $G(RF(200.0351,IEN,1,"I"))="" S DXD=$$SETDXD($P($$ICDDATA^ICDXCODE("DIAGNOSIS",ICD9,DXDT),U,4))<br> .. I $G(RF(200.0351,IEN,1,"I"))=1 S DXD=$$SETDXD($P($$ICDDATA^ICDXCODE("DIAGNOSIS",ICD9,DXDT),U,4))<br> .. I $G(RF(200.0351,IEN,1,"I"))>1 S DXD=RF(200.0351,IEN,1,"E")<br> .. S DXI=$$SETDXI($$STATCHK^ICDXCODE("DIAGNOSIS",ICD9,DXDT))<br> .. S Y(DXC)=ICD9_U_DXD_U_DXI<br> E  S Y=0{:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/BA/UBACore.pas">BA/UBACore.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 25th 2017, 12:25:50 am</p>{:/}