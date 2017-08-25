---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; MAGGRADIMAGE<br/>
# MAGGRADIMAGE

User selects a Radiology exam from the listing displayed, we return a listof images associated with that exam.

## Properties

Property | Value
--- | ---
Label | IMAGE
MUMPS Implementation | [MAGGTRAI](http://code.osehra.org/dox/Routine_MAGGTRAI_source.html)
Return Type | GLOBAL ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DATA | LITERAL | 245 | true | DATA is the exam data that was output from the MAGGRADLIST RPC call.DATA is the Radiology values stored in ^TMP($J,&quot;RAEX&quot;,x)  that the radiology procedure RAPTLU sets during the search  for patient exams.  (see routine RAPTLU )      ^TMP($J,&quot;RAEX&quot;,RACNT)&#x3D;     RADFN_&quot;^&quot;_RADTI_&quot;^&quot;_RACNI_&quot;^&quot;_RANME_&quot;^&quot;_RASSN_&quot;^&quot;    _RADATE_&quot;^&quot;_RADTE_&quot;^&quot;_RACN_&quot;^&quot;_RAPRC_&quot;^&quot;_RARPT_&quot;^&quot;_RAST



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}