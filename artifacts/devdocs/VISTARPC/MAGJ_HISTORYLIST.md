---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; MAGJ HISTORYLIST<br/>
# MAGJ HISTORYLIST

  +---------------------------------------------------------------+  | Property of the US Government.                                |  | No permission to copy or redistribute this software is given. |  | Use of unreleased versions of this software requires the user |  | to execute a written test agreement with the VistA Imaging    |  | Development Office of the Department of Veterans Affairs,     |  | telephone (301) 734-0100.                                     |  |                                                               |  | The Food and Drug Administration classifies this software as  |  | a medical device.  As such, it may not be changed in any way. |  | Modifications to this software may result in an adulterated   |  | medical device under 21CFR820, the use of which is considered |  | to be a violation of US Federal Statutes.                     |  +---------------------------------------------------------------+ Functions for maintaining and displaying the Vistarad Exam History List

## Properties

Property | Value
--- | ---
Label | HIST
MUMPS Implementation | [MAGJLS4](http://code.osehra.org/dox/Routine_MAGJLS4_source.html)
Return Type | GLOBAL ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
PARAMS | LITERAL | 1 | true | TXID ^ TXDUZ ^ TXDIVTXID: Required; designates action to take: 1--Add entries; 2--Update/refresh data; 3--Delete entriesTXDUZ: Optional; if supplied, get data for another user (Read Only)TXDIV: Optional; if supplied, get data for another division (Read Only)
DATA | LIST | 30 |  | Exam ID &quot;|&quot; Display data



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}