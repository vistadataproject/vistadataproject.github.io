---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; MAG DICOM ROUTE TRANSACT STS<br/>
# MAG DICOM ROUTE TRANSACT STS

 +---------------------------------------------------------------+ | Property of the US Government.                                | | No permission to copy or redistribute this software is given. | | Use of unreleased versions of this software requires the user | | to execute a written test agreement with the VistA Imaging    | | Development Office of the Department of Veterans Affairs,     | | telephone (301) 734-0100.                                     | |                                                               | | The Food and Drug Administration classifies this software as  | | a medical device.  As such, it may not be changed in any way. | | Modifications to this software may result in an adulterated   | | medical device under 21CFR820, the use of which is considered | | to be a violation of US Federal Statutes.                     | +---------------------------------------------------------------+ This RPC checks the status of all entries in the routing queue fora specific transaction (group of files that was queued as a unit).The return value indicates how many files are in each of thepossible statuses.

## Properties

Property | Value
--- | ---
Label | TRANSTS
MUMPS Implementation | [MAGDRTIM](http://code.osehra.org/dox/Routine_MAGDRTIM_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
TRANSID | LITERAL | 30 | true | The value of this parameter is a string that uniquely definesa transaction in the routing queue. A transaction in this contextis a number of files that was queued up as a group.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}