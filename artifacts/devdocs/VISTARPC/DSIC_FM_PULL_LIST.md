---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; DSIC FM PULL LIST
# DSIC FM PULL LIST

Returns values to populate a list box of choices for a field that isSET OF CODES or POINTER or VARIABLE POINTER type.VARIABLE POINTER.

Property | Value
--- | ---
Label | PULL
Routine | [DSICFM](http://code.osehra.org/dox/Routine_DSICFM_source.html)
Return Type | GLOBAL ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
FILE | LITERAL | 20 | true | File or subfile number (canonic).
FIELD | LITERAL | 20 | true | Field number (canonic) of field for which choices are desired.Field must be set of codes or pointer or variable pointer.
START | LITERAL | 245 | true | This parameter is optional and applies only to POINTER and VARIABLEPOINTER field types.  It is not used with SET OF CODES type. Starting value for search. If specified this is usually the lastvalue returned from the previous call.  If the field is a POINTERonly the value should be argued.  If the field is a VARIABLEPOINTER, both value and file should be argued, as VALUE^FILE.Both &quot;^&quot;-pieces can be copied from the last returned value.
MAX | LITERAL | 20 | true | The maximum number of values to return.  The default is 200.For VARIABLE POINTER fields the sum accumulates across pointed-tofiles.
MASK | LITERAL | 245 | true | An optional mask that constrains the values to be returned.For example, &quot;SMI&quot; returns all values that start with the &quot;SMI&quot;like SMITH, filtering out values that do not start with thespecified mask like SAM.value, not the external value of a field.  PART is often a partial match to FROM. For example, FROM(1)&#x3D;&quot;ZTMMGR&quot;, and PART(1)&#x3D;&quot;ZTM&quot; would return only entries that began with &quot;ZTM&quot; and came after &quot;ZTMMGR&quot;. It would not include &quot;ZTZERO&quot;, even though it comes after &quot;ZTMMGR&quot;. 



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}