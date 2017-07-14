---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; MAG4 CP CONSULT TO TIUDA<br/>
# MAG4 CP CONSULT TO TIUDA

 Imaging Capture workstation calls this RPC to get a TIU IEN to attach images to. This call simply calls a CP API, which accepts DFN, Consult #, Visit String (optional), Complete|Do not Complete the | transaction.

## Properties

Property | Value
--- | ---
Label | TIUDA
Routine | [MAGGSCP](http://code.osehra.org/dox/Routine_MAGGSCP_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
MAGDFN | LITERAL | 30 | true | DFN of Patient
MAGCONS | LITERAL | 30 | true |  This is the consult #.  The consult # is returned as a part of the Clinical Procedure Requests Query.
MAGVSTR | LITERAL | 30 | true |  Visit String, needed to create a New Tiu Note. Visit String is returned as part of the Query to get Patient Visits. The Query to get a list of patient visits, is done directly before this call from the Capture Workstation.
MAGCMP | LITERAL | 10 | true |  Flag:  tells to Complete (1) or Not Complete (0) the CP transaction.  If Not Complete, then this transaction is available on the CP User station to attach images to.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}