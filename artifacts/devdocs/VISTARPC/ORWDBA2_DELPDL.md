---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWDBA2 DELPDL<br/>
# ORWDBA2 DELPDL

Delete a selected diagnosis code from a Clinician's Personal DX List. The personal dx list is stored in CPRS Diagnosis Provider file, file # 5000017.

## Properties

Property | Value
--- | ---
Label | DELPDL
Routine | [ORWDBA2](http://code.osehra.org/dox/Routine_ORWDBA2_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
ORCIEN | REFERENCE | 255 | true | The clinician&#x27;s internal ID number.
ORDXA | REFERENCE | 255 | true | Array of diagnoses codes to be deleted from the clinician&#x27;s personaldx list.



## MUMPS Method Description

Property | Value
--- | ---
Method | [DELPDL^ORWDBA2](http://code.osehra.org/dox/Routine_ORWDBA2_source.html)
Method Comment | Delete from Personal Diagnosis List
Input Parameters | ORCIEN, ORDXA
First Comment | {::nomarkdown}<pre><code>Delete a selected diagnosis code or group of diagnoses codes from a<br/>Clinician's Personal DX List.<br/>Input Variables:<br/>  ORCIEN    Clinician Internal ID number<br/>  ORDXA     Array of dx codes to be deleted from personal dx list<br/>Output Variable:<br/>  Y         Return value, 1 successful, 0 unsuccessful<br/>Local Variables:<br/>  DXI       Diagnosis code array index<br/>  EM        Error Message<br/>  FDA       FileMan Data Array<br/>  IEN       Interanl Entry Number<br/>  RF        Record Found</code></pre>{:/}
Code | {::nomarkdown}<pre><code> N DXI,EM,FDA,IEN,RF<br/> D GETS^DIQ(200,ORCIEN,"351*,","","RF","EM")<br/> I $D(RF)=0 S Y=0 Q<br/> S IEN="" F  S IEN=$O(RF(200.0351,IEN)) Q:IEN=""  D<br/> .S DXI="" F  S DXI=$O(ORDXA(DXI)) Q:DXI=""  D<br/> .. I RF(200.0351,IEN,.01)=ORDXA(DXI) D<br/> ... D FDA^DILF(200.0351,IEN,.01,"","@","FDA","EM")<br/> ... D FILE^DIE("","FDA","EM")<br/> S Y=1</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/BA/UBACore.pas">BA/UBACore.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}