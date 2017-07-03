---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; ORWDBA2 ADDPDL
# ORWDBA2 ADDPDL

Add a new Clinician's Personal DX List or add new ICD9 codes to an existing Clinician's Personal DX List. The Personal DX list is stored in the CPRS Diagnosis Provider file, file # 5000017

Property | Value
--- | ---
Label | ADDPDL
Routine | [ORWDBA2](http://code.osehra.org/dox/Routine_ORWDBA2_source.html)
Return Type | SINGLE VALUE


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
ORCIEN | REFERENCE | 255 | true | The clinician&#x27;s internal ID number.
ORDXA | REFERENCE | 255 | true | The array variable of diagnosis codes to be added to the clinician&#x27;s personal diagnoses list.



### MUMPS Method Description

Property | Value
--- | ---
Method | [ADDPDL^ORWDBA2](http://code.osehra.org/dox/Routine_ORWDBA2_source.html)
Method Comment | Add to Personal Diagnosis List
Input Parameters | ORCIEN, ORDXA
First Comment | {::nomarkdown}<pre><code>Add a new personal diagnosis list or new ICD9 code to an existing<br/>personal diagnosis list for a clinician. It will filter out duplicate<br/>entries before updating an existing PDL.<br/>Input Variables:<br/>  ORCIEN       Clinician Internal Entry Number<br/>  ORDXA        Array of dx codes to be added to personal dx list<br/>               format: ORDXA(#)=ICD9_Code^Lexicon_Expression_IEN<br/>Output Variable:<br/>  Y            Return value, 1 successful, 0 unsuccessful<br/>Local Variables:<br/>  DXI          Diagnosis Array Index<br/>  DXIEN        Diagnosis Code Internal Entry Number<br/>  EM           Error Message<br/>  FDXR         Found Diagnoses Records Array<br/>  FDXRI        Found Diagnoses Records Array Index<br/>  IEN          Internal Entry Number<br/>  PDL          Personal Diagnoses List Array<br/>  PDLI         Personal Diagnoses List Array Index</code></pre>{:/}
Code | {::nomarkdown}<pre><code> N DXI,DXIEN,EM,FDXR,FDXRI,IEN,PDL,PDLI<br/> D GETS^DIQ(200,ORCIEN,"351*,","","PDL","EM")<br/> I $D(PDL) D<br/> . S DXI="" F  S DXI=$O(ORDXA(DXI)) Q:DXI=""  D<br/> .. S PDLI="" F  S PDLI=$O(PDL(200.0351,PDLI)) Q:PDLI=""  D<br/> ... I PDL(200.0351,PDLI,.01)=$P($G(ORDXA(DXI)),U) K ORDXA(DXI)<br/> I $D(ORDXA)=0 S Y=0 Q<br/> S DXI="" F  S DXI=$O(ORDXA(DXI)) Q:DXI=""!($D(EM))  D<br/> . K FDXR,EM<br/> . ;Get the IEN for the current diagnosis code<br/> . D FIND^DIC(80,"","","CM",$P(ORDXA(DXI),U),"*","","","","FDXR","EM")<br/> . I $P(FDXR("DILIST",0),U)=0 Q<br/> . I $P(FDXR("DILIST",0),U)=1 S DXIEN=FDXR("DILIST",2,1)<br/> . I $P(FDXR("DILIST",0),U)>1 D<br/> .. F FDXRI=1:1:FDXR("DILIST",0) D<br/> ... I FDXR("DILIST",1,FDXRI)=$P($G(ORDXA(DXI)),U) S DXIEN=FDXR("DILIST",2,FDXRI)<br/> . ;Add IDC9 code to personal diagnoses list<br/> . K IEN<br/> . S IEN="1,"_ORCIEN_",",IEN="+"_IEN<br/> . D FDA^DILF(200.0351,IEN,.01,"",DXIEN,"FDA","EM")<br/> . D UPDATE^DIE("","FDA","IEN","EM")<br/> . ;Add Lexicon Expression list<br/> . I $P(ORDXA(DXI),U,2)'="" D<br/> .. S IEN=IEN(1)_","_ORCIEN_","<br/> .. D FDA^DILF(200.0351,IEN,1,"",$P(ORDXA(DXI),U,2),"FDA","EM")<br/> .. D FILE^DIE("","FDA","EM")<br/> I $D(EM) S Y=0 Q<br/> S Y=1</code></pre>{:/}



### CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/BA/UBACore.pas">BA/UBACore.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}