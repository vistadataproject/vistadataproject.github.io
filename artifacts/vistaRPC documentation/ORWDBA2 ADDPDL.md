---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDBA2 ADDPDL 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWDBA2 ADDPDL{:/}
 tag | {::nomarkdown}ADDPDL{:/}
 routine | [ORWDBA2](http://code.osehra.org/dox/Routine_ORWDBA2_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Add a new Clinician's Personal DX List or add new ICD9 codes to an existing Clinician's Personal DX List. The Personal DX list is stored in the CPRS Diagnosis Provider file, file # 5000017{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}ORCIEN{:/} | {::nomarkdown}REFERENCE{:/} | {::nomarkdown}255{:/} | {::nomarkdown}true{:/} | {::nomarkdown}The clinician's internal ID number.{:/} | 
| {::nomarkdown}ORDXA{:/} | {::nomarkdown}REFERENCE{:/} | {::nomarkdown}255{:/} | {::nomarkdown}true{:/} | {::nomarkdown}The array variable of diagnosis codes to be added to the clinician's personal diagnoses list.{:/} | 


### MUMPS Method description

 property | value 
 --- | --- 
 Method | ADDPDL^[ORWDBA2](http://code.osehra.org/dox/Routine_ORWDBA2_source.html)
 Method comment | Add to Personal Diagnosis List
 First comment | {::nomarkdown}Add a new personal diagnosis list or new ICD9 code to an existing<br/>personal diagnosis list for a clinician. It will filter out duplicate<br/>entries before updating an existing PDL.<br/>Input Variables:<br/>ORCIEN       Clinician Internal Entry Number<br/>ORDXA        Array of dx codes to be added to personal dx list<br/>format: ORDXA(#)=ICD9_Code^Lexicon_Expression_IEN<br/>Output Variable:<br/>Y            Return value, 1 successful, 0 unsuccessful<br/>Local Variables:<br/>DXI          Diagnosis Array Index<br/>DXIEN        Diagnosis Code Internal Entry Number<br/>EM           Error Message<br/>FDXR         Found Diagnoses Records Array<br/>FDXRI        Found Diagnoses Records Array Index<br/>IEN          Internal Entry Number<br/>PDL          Personal Diagnoses List Array<br/>PDLI         Personal Diagnoses List Array Index{:/}
 Input parameters | {::nomarkdown}ORCIEN<br>ORDXA{:/}
 Code | {::nomarkdown}  N DXI,DXIEN,EM,FDXR,FDXRI,IEN,PDL,PDLI<br> D GETS^DIQ(200,ORCIEN,"351*,","","PDL","EM")<br> I $D(PDL) D<br> . S DXI="" F  S DXI=$O(ORDXA(DXI)) Q:DXI=""  D<br> .. S PDLI="" F  S PDLI=$O(PDL(200.0351,PDLI)) Q:PDLI=""  D<br> ... I PDL(200.0351,PDLI,.01)=$P($G(ORDXA(DXI)),U) K ORDXA(DXI)<br> I $D(ORDXA)=0 S Y=0 Q<br> S DXI="" F  S DXI=$O(ORDXA(DXI)) Q:DXI=""!($D(EM))  D<br> . K FDXR,EM<br> . ;Get the IEN for the current diagnosis code<br> . D FIND^DIC(80,"","","CM",$P(ORDXA(DXI),U),"*","","","","FDXR","EM")<br> . I $P(FDXR("DILIST",0),U)=0 Q<br> . I $P(FDXR("DILIST",0),U)=1 S DXIEN=FDXR("DILIST",2,1)<br> . I $P(FDXR("DILIST",0),U)>1 D<br> .. F FDXRI=1:1:FDXR("DILIST",0) D<br> ... I FDXR("DILIST",1,FDXRI)=$P($G(ORDXA(DXI)),U) S DXIEN=FDXR("DILIST",2,FDXRI)<br> . ;Add IDC9 code to personal diagnoses list<br> . K IEN<br> . S IEN="1,"_ORCIEN_",",IEN="+"_IEN<br> . D FDA^DILF(200.0351,IEN,.01,"",DXIEN,"FDA","EM")<br> . D UPDATE^DIE("","FDA","IEN","EM")<br> . ;Add Lexicon Expression list<br> . I $P(ORDXA(DXI),U,2)'="" D<br> .. S IEN=IEN(1)_","_ORCIEN_","<br> .. D FDA^DILF(200.0351,IEN,1,"",$P(ORDXA(DXI),U,2),"FDA","EM")<br> .. D FILE^DIE("","FDA","EM")<br> I $D(EM) S Y=0 Q<br> S Y=1{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 15th 2017, 12:59:51 am</p>{:/}