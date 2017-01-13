---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDBA2 ADDPDL 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWDBA2 ADDPDL{:/}
 tag | {::nomarkdown}ADDPDL{:/}
 routine | [ORWDBA2](http://code.osehra.org/dox/Routine_ORWDBA2_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Add a new Clinician's Personal DX List or add new ICD9 codes to an existing Clinician's Personal DX List. The Personal DX list is stored in the CPRS Diagnosis Provider file, file # 5000017{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Add to Personal Diagnosis List
 Input Parameters | {::nomarkdown}ORCIEN<br/>ORDXA{:/}
 Lines | ```
 N DXI,DXIEN,EM,FDXR,FDXRI,IEN,PDL,PDLI
 D GETS^DIQ(200,ORCIEN,"351*,","","PDL","EM")
 I $D(PDL) D
 . S DXI="" F  S DXI=$O(ORDXA(DXI)) Q:DXI=""  D
 .. S PDLI="" F  S PDLI=$O(PDL(200.0351,PDLI)) Q:PDLI=""  D
 ... I PDL(200.0351,PDLI,.01)=$P($G(ORDXA(DXI)),U) K ORDXA(DXI)
 I $D(ORDXA)=0 S Y=0 Q
 S DXI="" F  S DXI=$O(ORDXA(DXI)) Q:DXI=""!($D(EM))  D
 . K FDXR,EM
 . ;Get the IEN for the current diagnosis code
 . D FIND^DIC(80,"","","CM",$P(ORDXA(DXI),U),"*","","","","FDXR","EM")
 . I $P(FDXR("DILIST",0),U)=0 Q
 . I $P(FDXR("DILIST",0),U)=1 S DXIEN=FDXR("DILIST",2,1)
 . I $P(FDXR("DILIST",0),U)>1 D
 .. F FDXRI=1:1:FDXR("DILIST",0) D
 ... I FDXR("DILIST",1,FDXRI)=$P($G(ORDXA(DXI)),U) S DXIEN=FDXR("DILIST",2,FDXRI)
 . ;Add IDC9 code to personal diagnoses list
 . K IEN
 . S IEN="1,"_ORCIEN_",",IEN="+"_IEN
 . D FDA^DILF(200.0351,IEN,.01,"",DXIEN,"FDA","EM")
 . D UPDATE^DIE("","FDA","IEN","EM")
 . ;Add Lexicon Expression list
 . I $P(ORDXA(DXI),U,2)'="" D
 .. S IEN=IEN(1)_","_ORCIEN_","
 .. D FDA^DILF(200.0351,IEN,1,"",$P(ORDXA(DXI),U,2),"FDA","EM")
 .. D FILE^DIE("","FDA","EM")
 I $D(EM) S Y=0 Q
 S Y=1```
 Leading comment lines | {::nomarkdown}Add a new personal diagnosis list or new ICD9 code to an existing<br/>personal diagnosis list for a clinician. It will filter out duplicate<br/>entries before updating an existing PDL.<br/>Input Variables:<br/>ORCIEN       Clinician Internal Entry Number<br/>ORDXA        Array of dx codes to be added to personal dx list<br/>format: ORDXA(#)=ICD9_Code^Lexicon_Expression_IEN<br/>Output Variable:<br/>Y            Return value, 1 successful, 0 unsuccessful<br/>Local Variables:<br/>DXI          Diagnosis Array Index<br/>DXIEN        Diagnosis Code Internal Entry Number<br/>EM           Error Message<br/>FDXR         Found Diagnoses Records Array<br/>FDXRI        Found Diagnoses Records Array Index<br/>IEN          Internal Entry Number<br/>PDL          Personal Diagnoses List Array<br/>PDLI         Personal Diagnoses List Array Index{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}ORCIEN{:/} | {::nomarkdown}REFERENCE{:/} | {::nomarkdown}255{:/} | {::nomarkdown}true{:/} | {::nomarkdown}The clinician's internal ID number.{:/} | 
| {::nomarkdown}ORDXA{:/} | {::nomarkdown}REFERENCE{:/} | {::nomarkdown}255{:/} | {::nomarkdown}true{:/} | {::nomarkdown}The array variable of diagnosis codes to be added to the clinician's personal diagnoses list.{:/} | 




 Generated on January 13th 2017, 6:55:29 am