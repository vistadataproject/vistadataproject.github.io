---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; DVBA MVI GET CORRESPONDING IDS<br/>
# DVBA MVI GET CORRESPONDING IDS

The remote procedure passes the Integration Control Number ID to the MVI GET CORRESPONDING IDS web service and returns the list of VAMC treatingfacilities for the selected identifier.

## Properties

Property | Value
--- | ---
Label | GETIDS
MUMPS Implementation | [DVBAMVI2](http://code.osehra.org/dox/Routine_DVBAMVI2_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
SOURCE ID | LITERAL | 250 | true | This is the Integration Control Number (ICN) used to identify the patientthat is selected from the MVI SEARCH PERSON web service results.Format:  &quot;1008523099V750710^NI^200M^USVHA^&quot;



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}