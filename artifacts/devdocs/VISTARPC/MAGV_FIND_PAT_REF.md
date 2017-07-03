---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; MAGV FIND PAT REF
# MAGV FIND PAT REF

Finds a patient.

Property | Value
--- | ---
Label | FINDPAT
Routine | [MAGVRS06](http://code.osehra.org/dox/Routine_MAGVRS06_source.html)
Return Type | ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
PATIDATTS | LIST | 32000 | true | Input parameters are name-value pairs sent as successive integersubscripts in an array that should be passed in by reference as the secondargument to entry point FINDPAT^MAGVRS06.  The first argument contains thereturned value in an array that should also be passed by reference. The values passed in should be in the format &lt;fname&gt;&#x60;&lt;value&gt;, where &lt;fname&gt; is a field name in the IMAGING PATIENT REFERENCE File (#2005.6)and &lt;value&gt; is the value to which that field should be set.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}