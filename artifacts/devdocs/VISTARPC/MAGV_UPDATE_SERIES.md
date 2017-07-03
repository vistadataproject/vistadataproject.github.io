---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; MAGV UPDATE SERIES
# MAGV UPDATE SERIES

This RPC allows an IMAGE SERIES File (#2005.63) to be updated.

Property | Value
--- | ---
Label | UPSERIES
Routine | [MAGVRS11](http://code.osehra.org/dox/Routine_MAGVRS11_source.html)
Return Type | ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
OVERRIDE |  |  |  | This parameter overrides parent IEN checking.
SERATTS | LIST |  |  | Input parameters are name-value pairs sent as successive integersubscripts in an array that should be passed in by reference as the secondargument to entry point UPSERIES^MAGVRS11.  The first argument willcontain the returned value in an array that should also be passed byreference.  The values passed in should be in the format &lt;fname&gt;&#x60;&lt;value&gt;, where&lt;fname&gt; is a field name in the IMAGE SERIES File (#2005.63) and &lt;value&gt;is the value to which that field should be set.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}