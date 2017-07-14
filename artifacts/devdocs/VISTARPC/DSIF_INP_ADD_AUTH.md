---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; DSIF INP ADD AUTH<br/>
# DSIF INP ADD AUTH

This RPC is used to pass in an array of values to add a new Inpatient Authorization.  It does verification for required data.

## Properties

Property | Value
--- | ---
Label | ADD
Routine | [DSIFINP2](http://code.osehra.org/dox/Routine_DSIFINP2_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
ARRAY | LIST | 350 | true |  Input array values (add/edit RPC&#x27;s) ; Input array values (add/edit RPC&#x27;s)  (1)&#x3D;Patient^DFN - REQ  (2)&#x3D;AuthIEN^IEN of Authorization [supplied for an Edit, null to add newauthorization] - REQ  (3)&#x3D;FromDate^[Supplied in FM Date format] - REQ  (4)&#x3D;ToDate^[Supplied in FM Date format]  (5)&#x3D;Location^IEN [of file #4 (Primary Service area)]   (6)&#x3D;PurposeofVisit^POV IEN [file #161.82] - REQ  (7)&#x3D;CostRecovery^(1 or 0)  (8)&#x3D;Accident Related^(1 or 0)  (9)&#x3D;Clerk^IEN [of file 200] - REQ  (10)&#x3D;TreatmentType^IEN (set of codes)  (11)&#x3D;TypeofCare^IEN (set of codes)  (12)&#x3D;DX^1^[value]  (13)&#x3D;DX^2^[value]  (14)&#x3D;DX^3^[value]  (15)&#x3D;PatientType^IEN (set of codes)   (16)&#x3D;Vendor^IEN (of file #161.2)  (17)&#x3D;*DELETED - NOT USED  (18)&#x3D;Consult #^IEN  (19)&#x3D;Fee^(Fee program IEN file #161.8) - REQ  (20)&#x3D;7078^Associated 7078 IEN - REQ  (21)&#x3D;Discharge type^type (Optional, but if entered it MUST be 1-4 only)  (50)&#x3D;Remarks^1^first 80 chars of text  (51...999999)&#x3D;Remarks^n^next 80 chars of text Required fields are so noted



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}