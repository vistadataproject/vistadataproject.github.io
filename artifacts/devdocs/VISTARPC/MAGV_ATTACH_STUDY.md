---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; MAGV ATTACH STUDY
# MAGV ATTACH STUDY

This RPC allows a study to be attached to a patient and, optionally, a procedure.

Property | Value
--- | ---
Label | ATSTUDY
Routine | [MAGVRS05](http://code.osehra.org/dox/Routine_MAGVRS05_source.html)
Return Type | ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
STUATTS | LIST | 32000 | true | Input parameters are name-value pairs sent as successive integersubscripts in an array that should be passed in by reference as the secondargument to entry point ATSTUDY^MAGVRS05.  The first argument will containthe returned value in an array that should also be passed by reference. The values passed in should be in the format &lt;fname&gt;&#x60;&lt;value&gt;, where &lt;fname&gt; is a field name in the IMAGE STUDY File (#2005.62) and &lt;value&gt; is the value to which that field should be set.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}