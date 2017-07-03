---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; ROR LIST PARAMETER INSTANCES
# ROR LIST PARAMETER INSTANCES



Property | Value
--- | ---
Label | GETPLIST
Routine | [RORRP038](http://code.osehra.org/dox/Routine_RORRP038_source.html)
Return Type | ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
NAME | LITERAL | 60 |  | The NAME parameter defines the name of the parameter.
ENTITY | LITERAL | 30 |  | The ENTITY parameter defines the area(s) where the parameter value issearched for. By default ($G(ENTITY)&#x3D;&quot;&quot;), the &quot;ALL&quot; value is used (see theDBIA #2263 for more details). The other values that are used most oftenare the &quot;USR&quot; (user settings) and the &quot;PKG&quot; (package settings).
PREFIX | LITERAL | 30 |  | Only those instances are selected whose names begin from a value of this parameter.  By default ($G(PREFIX)&#x3D;&quot;&quot;), all instances are selected.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}