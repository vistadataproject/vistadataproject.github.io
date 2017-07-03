---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; MAGV SET DICOM FAILED IMAGE
# MAGV SET DICOM FAILED IMAGE

This routine creates entries in the DICOM FAILED IMAGES file (#2006.575).

Property | Value
--- | ---
Label | DCRCTSET
Routine | [MAGVRS51](http://code.osehra.org/dox/Routine_MAGVRS51_source.html)
Return Type | ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
ATTS | LIST |  |  | Input parameters are name-value pairs sent as successive integersubscripts in an array that should be passed in by reference as the secondargument to entry point DCRCTSET^MAGVRS51.  The first argument willcontain the returned value in an array that should also be passed byreference. The values passed in should be in the format &lt;fname&gt;&#x60;&lt;value&gt;, where&lt;fname&gt; is a field name in the DICOM FAILED IMAGES File (#2006.575) and &lt;value&gt; is the value to which that field should be set.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}