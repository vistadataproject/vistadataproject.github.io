---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; MAG RAD GET NEXT RPT BY DATE<br/>
# MAG RAD GET NEXT RPT BY DATE

 +---------------------------------------------------------------+ | Property of the US Government.                                | | No permission to copy or redistribute this software is given. | | Use of unreleased versions of this software requires the user | | to execute a written test agreement with the VistA Imaging    | | Development Office of the Department of Veterans Affairs,     | | telephone (301) 734-0100.                                     | |                                                               | | The Food and Drug Administration classifies this software as  | | a medical device.  As such, it may not be changed in any way. | | Modifications to this software may result in an adulterated   | | medical device under 21CFR820, the use of which is considered | | to be a violation of US Federal Statutes.                     | +---------------------------------------------------------------+ This RPC looks for the next radiology report,while traversing the "AR" cross-reference onthe Radiology Patient file. This RPC looks for the next radiology report,while traversing the "AR" cross-reference onthe Radiology Patient file.

## Properties

Property | Value
--- | ---
Label | NEXT
MUMPS Implementation | [MAGDRPC9](http://code.osehra.org/dox/Routine_MAGDRPC9_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
SEED | LITERAL | 60 | true | The value of this parameter is a string that consists of threepieces, separated by a caret. The first piece represents the EXAM DATE, the secondpiece represents the Patient Number (DFN) and  the thirdpiece represents the final internal entry number in theRadiology Patient file (D2). The RPC will start looking through the &quot;AR&quot; cross-reference,based on the specified &quot;seed&quot; value, and will return thefirst pointer to a Radiology report that it encounters.
DIR | LITERAL | 20 | true | The value of this parameter is a string that indicates the directionin which the RPC will traverse the &quot;AR&quot; cross-reference.A value that starts with the letter &quot;A&quot; will cause an&quot;ascending&quot; traversal.A value that starts with the letter &quot;D&quot; will cause a&quot;descending&quot; traversal. When this parameter is not specified, &quot;ascending&quot; traversal will take place.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}