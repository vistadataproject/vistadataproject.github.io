---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; DSIF EDIT AUTH<br/>
# DSIF EDIT AUTH

Used to edit an existing authorization in Fee Basis.Returns 1^edit successfulor-1^error message (Invalid patient, invalid authorization, etc)

## Properties

Property | Value
--- | ---
Label | EDIT
MUMPS Implementation | [DSIFENA3](http://code.osehra.org/dox/Routine_DSIFENA3_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
ARRAY | LIST | 500 | true | Pass in an array structred as follows for an authorization:  ; DATA INPUT &#x3D; ARRAY  (need fee program added)(1)&#x3D;Patient^DFN(2)&#x3D;AuthIEN^IEN of Authorization [supplied for an Edit, null if we*re adding a new authorization](3)&#x3D;FromDate^[Supplied in FM Date format](4)&#x3D;ToDate^[Supplied in FM Date format](5)&#x3D;Location^IEN [of file #4 (Primary Service area)] (6)&#x3D;PurposeofVisit^IEN [of file #161.82](7)&#x3D;CostRecovery^(1 or 0)(8)&#x3D;Accident Related^(1 or 0)(9)&#x3D;Clerk^IEN [of file 200](10)&#x3D;TreatmentType^IEN (set of codes)(11)&#x3D;TypeofCare^IEN (set of codes)(12)&#x3D;DX^1^[value](13)&#x3D;DX^2^[value](14)&#x3D;DX^3^[value](15)&#x3D;PatientType^IEN (set of codes, always 10 so far)(16)&#x3D;Vendor^IEN (of file #161.2)(17)&#x3D;Contract^IEN (of file #161.43)             ;dsif*3.2*2 dlf(18)&#x3D;Consult #^IEN(19)&#x3D;RefProv^IEN (referring provider, file 200)(20)&#x3D;ICDDiag^[value] (Required if ICD-10)(50)&#x3D;Remarks^1^first 80 chars of text(51...999999)&#x3D;Remarks^n^next 80 chars of text(51...n)&#x3D;Remarks^n^next 80 chars (ad nauseam) of text   
DSIF AUTHLIST |  |  |  | 



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}