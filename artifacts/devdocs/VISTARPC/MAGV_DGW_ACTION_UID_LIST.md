---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; MAGV DGW ACTION UID LIST<br/>
# MAGV DGW ACTION UID LIST

Return list of UIDfrom DICOM UID SPECIFIC ACTION file (#2006.539)

## Properties

Property | Value
--- | ---
Label | ACTUIDS
Routine | [MAGVDGWP](http://code.osehra.org/dox/Routine_MAGVDGWP_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
MAGTYPE | LITERAL |  | true | Type (e.g. &quot;SOP Class&quot;)
MAGSUBT | LITERAL |  | true | Subtype (e.g. &quot;Storage&quot;)
MAGACT | LITERAL |  | true | Action Type (e.g. &quot;Storage SCP&quot;)



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}