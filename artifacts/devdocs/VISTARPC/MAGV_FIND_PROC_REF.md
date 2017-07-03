---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; MAGV FIND PROC REF
# MAGV FIND PROC REF

This remote procedure allows searching for a procedure reference based upon a fixed scalar value for one or more of its attributes.

Property | Value
--- | ---
Label | FINDPROC
Routine | [MAGVRS07](http://code.osehra.org/dox/Routine_MAGVRS07_source.html)
Return Type | ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
PROCATTS | LIST | 300 | true | Input parameters are name-value pairs sent as successive integersubscripts in an array that should be passed in by reference as the secondargument to entry point FINDPROC^MAGVRS07.  The first argument should bean array name (passed by reference) that will contain the returned value. The values passed in should be in the format &lt;fname&gt;&#x60;&lt;value&gt;, where&lt;fname&gt; is a field name in the IMAGING PROCEDURE REFERENCE File(#2005.61) and &lt;value&gt; is the value to which the record&#x27;s attributeshould be equal.  If multiple values are passed in, they will be ANDed.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}