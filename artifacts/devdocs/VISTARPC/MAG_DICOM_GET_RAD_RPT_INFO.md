---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; MAG DICOM GET RAD RPT INFO<br/>
# MAG DICOM GET RAD RPT INFO

 +---------------------------------------------------------------+ | Property of the US Government.                                | | No permission to copy or redistribute this software is given. | | Use of unreleased versions of this software requires the user | | to execute a written test agreement with the VistA Imaging    | | Development Office of the Department of Veterans Affairs,     | | telephone (301) 734-0100.                                     | |                                                               | | The Food and Drug Administration classifies this software as  | | a medical device.  As such, it may not be changed in any way. | | Modifications to this software may result in an adulterated   | | medical device under 21CFR820, the use of which is considered | | to be a violation of US Federal Statutes.                     | +---------------------------------------------------------------+ This RPC returns information from the Radiology Report Table.The type of information returned depends on the values of theinput parameters.

## Properties

Property | Value
--- | ---
Label | RARPTO
MUMPS Implementation | [MAGDRPC1](http://code.osehra.org/dox/Routine_MAGDRPC1_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
TYPE | LITERAL | 30 | true | The value of this parameter is a string that indicatesthe type of information that is requested:  &quot;O1&quot;:   Next or Previous report pointer at highest level  &quot;O2&quot;:   Next pointer at deeper level  &quot;G1&quot;:   Data record at highest level  &quot;G2&quot;:   Data record at deeper level
D0 | LITERAL | 30 | true | The value of this parameter is a numeric value that identifiesthe current record in the Radiology Report table.
F | LITERAL | 30 | true | If the value of the first input parameter is equal to &quot;O1&quot;,the value of this parameter is either -1 or +1, indicatingthe traversal direction through the table.For the other values of the first input parameter, the valueis the fixed subscript between the highest level entry numberand the next level internal entry number.
D1 | LITERAL | 30 | true | The value of this parameter is the second-level FileMan internalentry number into the Radiology Report table.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}