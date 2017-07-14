---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; GMV MARK ERROR<br/>
# GMV MARK ERROR

This remote procedure call marks a selected vitals record in the GMRVVital Measurement (#120.5) file as entered-in-error. This remote procedure call is documented in Integration Agreement 4414.

## Properties

Property | Value
--- | ---
Label | ERROR
Routine | [GMVUTL1](http://code.osehra.org/dox/Routine_GMVUTL1_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
GMVDATA | LITERAL | 60 | true | GMVDATA contains the following information:  piece1^piece2^piece3  where piece1 &#x3D; FILE 120.5 IEN        piece2 &#x3D; FILE 200 IEN (i.e., DUZ)       piece3 &#x3D; A single value to indicate the reason for the error.                1 &#x3D; INCORRECT DATE/TIME, 2 &#x3D; INCORRECT READING, 3 &#x3D;                INCORRECT PATIENT and 4 &#x3D; INVALID RECORD



## MUMPS Method Description

Property | Value
--- | ---
Method | [ERROR^GMVUTL1](http://code.osehra.org/dox/Routine_GMVUTL1_source.html)
Method Comment | GMV MARK ERROR [RPC entry point]
Input Parameters | GMVDATA
First Comment | {::nomarkdown}<pre><code>GMVDATA CONSISTS OF THE FOLLOWING DATA:<br/>FILE # 120.5 IEN^DUZ^INCORRECT DATE/TIME^INCORRECT READING^INCORRECT<br/>PATIENT^INVALID RECORD</code></pre>{:/}
Code | {::nomarkdown}<pre><code> N GMVFDA,GMVIEN,GMVIENS<br/> I '$D(^GMR(120.5,+GMVDATA,0))#2 S RESULT="ERROR: Record Not Found" Q<br/> S GMVIENS=(+GMVDATA)_","<br/> S GMVFDA(120.5,GMVIENS,2)=1<br/> S GMVFDA(120.5,GMVIENS,3)=$P(GMVDATA,"^",2)<br/> S GMVFDA(120.506,"+1,"_GMVIENS,.01)=$P(GMVDATA,"^",3)<br/> D UPDATE^DIE("","GMVFDA","GMVIEN")<br/> S RESULT="OK"</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
DLL File | {::nomarkdown}No Source Code Available (GMV_VitalsViewEnter.dll){:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}