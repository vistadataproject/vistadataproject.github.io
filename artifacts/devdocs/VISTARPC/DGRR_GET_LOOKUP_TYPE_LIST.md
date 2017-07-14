---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; DGRR GET LOOKUP TYPE LIST<br/>
# DGRR GET LOOKUP TYPE LIST

Returns an XML document containing a list of wards or a list ofclinics (depending on what was requested)

## Properties

Property | Value
--- | ---
Label | GETLIST
Routine | [DGRRLU3](http://code.osehra.org/dox/Routine_DGRRLU3_source.html)
Return Type | GLOBAL ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
PARAM | LIST | 99 | true | PARAM(&quot;TYPE&quot;)&#x3D;&quot;ward&quot; returns a list of wardsPARAM(&quot;TYPE&quot;)&#x3D;&quot;clinic&quot; returns a list of clinicsPARAM(&quot;TYPE&quot;)&#x3D;&quot;provider&quot; returns a list of providersPARAM(&quot;VALUE&quot;)&#x3D;Beginning value or null to start at the beginning               or end of the file.PARAM(&quot;MAXNUM&quot;)&#x3D;Number of entries to be returned.  Defaults to                traversing forward. If MAXNUM contains a negative                number, traverses through the file backwards.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}