---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; MAGJ CPTMATCH<br/>
# MAGJ CPTMATCH

  +---------------------------------------------------------------+  | Property of the US Government.                                |  | No permission to copy or redistribute this software is given. |  | Use of unreleased versions of this software requires the user |  | to execute a written test agreement with the VistA Imaging    |  | Development Office of the Department of Veterans Affairs,     |  | telephone (301) 734-0100.                                     |  |                                                               |  | The Food and Drug Administration classifies this software as  |  | a medical device.  As such, it may not be changed in any way. |  | Modifications to this software may result in an adulterated   |  | medical device under 21CFR820, the use of which is considered |  | to be a violation of US Federal Statutes.                     |  +---------------------------------------------------------------+Imaging Vistarad RPC for finding related procedures based on CPTmatching table (file #2006.67 -- MAG RAD CPT MATCHING FILE).

## Properties

Property | Value
--- | ---
Label | CPTGRP
Routine | [MAGJUTL4](http://code.osehra.org/dox/Routine_MAGJUTL4_source.html)
Return Type | GLOBAL ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DATA | LITERAL | 20 | true | CPT Code ^ Matching CriteriaMAtching Criteria is a number, 1:n, to indicate basis for matching: 1--Similar CPT; 2--Body Part; 3--Body Part &amp; Modality



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}