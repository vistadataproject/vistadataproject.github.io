---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; MAGV UPDATE SOP
# MAGV UPDATE SOP

This RPC allows an IMAGE SOP INSTANCE File (#2005.64) entry to be updated.

Property | Value
--- | ---
Label | UPDSOP
Routine | [MAGVRS21](http://code.osehra.org/dox/Routine_MAGVRS21_source.html)
Return Type | ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
SOPATTS | LIST |  |  | Input parameters are name-value pairs sent as successive integersubscripts in an array that should be passed in by reference as the secondargument to entry point UPDSOP^MAGVRS21.  The first argument willcontain the returned value in an array that should also be passed byreference.  The values passed in should be in the format &lt;fname&gt;&#x60;&lt;value&gt;, where&lt;fname&gt; is a field name in the IMAGE SOP INSTANCE File (#2005.64) and &lt;value&gt;is the value to which that field should be set.
OVERRIDE | LITERAL |  |  | This parameter overrides parent IEN checking.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}