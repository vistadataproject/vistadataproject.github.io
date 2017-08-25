---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; MAGJ MAGDATADUMP<br/>
# MAGJ MAGDATADUMP

  +---------------------------------------------------------------+  | Property of the US Government.                                |  | No permission to copy or redistribute this software is given. |  | Use of unreleased versions of this software requires the user |  | to execute a written test agreement with the VistA Imaging    |  | Development Office of the Department of Veterans Affairs,     |  | telephone (301) 734-0100.                                     |  |                                                               |  | The Food and Drug Administration classifies this software as  |  | a medical device.  As such, it may not be changed in any way. |  | Modifications to this software may result in an adulterated   |  | medical device under 21CFR820, the use of which is considered |  | to be a violation of US Federal Statutes.                     |  +---------------------------------------------------------------+Imaging Vistarad RPC for displaying internal Imaging data

## Properties

Property | Value
--- | ---
Label | DATADUMP
MUMPS Implementation | [MAGJUTL4](http://code.osehra.org/dox/Routine_MAGJUTL4_source.html)
Return Type | GLOBAL ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DATA | LITERAL | 256 | true | &#x27;DATA&#x27; HAS THE FOLLOWING STRUCTURE: &quot;REQUEST^PARAM1|PARAM2&quot;   &#x27;REQUEST&#x27; IS REQUIRED AND MUST BE A MEMBER OF &quot;CPT,FLDS,GLB&quot;.      &#x27;PARAM1&#x27; IS REQUIRED TO HOLD A CPT CODE IFF &#x27;REQUEST&#x27;&#x3D;&quot;CPT&quot;.      &#x27;PARAM1&#x27; IS OPTIONAL TO HOLD FILEMAN FLAGS IFF &#x27;REQUEST&#x27;&#x3D;&quot;FLDS&quot;.      &#x27;PARAM2&#x27; IS NOT USED IFF &#x27;REQUEST&#x27;&#x3D;&quot;CPT&quot;.      &#x27;PARAM2&#x27; IS REQUIRED IF &#x27;REQUEST&#x27;&#x3D;&quot;FLDS&quot; OR &#x27;REQUEST&#x27;&#x3D;&quot;GLB&quot;.         IN EITHER CASE, &#x27;PARAM2&#x27; MAY HOLD:           AN INTEGER REPRESENTING THE IMAGE IEN, OR           A CARET-DELIMITED 3 PIECE PARTIAL CASE/EXAM ID STRING, OR           A CARET-DELIMITED 4 PIECE COMPLETE CASE/EXAM ID STRING.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}