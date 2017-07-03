---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; ROR GUI PARAMETER GET
# ROR GUI PARAMETER GET

The ROR GUI PARAMETER GET remote procedure retrieves the value of the GUIparameter.

Property | Value
--- | ---
Label | GETPARM
Routine | [RORRP038](http://code.osehra.org/dox/Routine_RORRP038_source.html)
Return Type | ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
INSTANCE | LITERAL | 91 | true | The INSTANCE parameter defines the instance name of the GUI parameter. It can also contain the parameter name as the second &quot;^&quot;-piece (by default, the &quot;ROR GUI PARAMETER&quot; is used).
ENTITY | LITERAL | 30 |  | The ENTITY parameter defines the area(s) where the parameter value issearched for. By default ($G(ENTITY)&#x3D;&quot;&quot;), the &quot;ALL&quot; value is used (see theDBIA #2263 for more details). The other values that are used most oftenare the &quot;USR&quot; (user settings) and the &quot;PKG&quot; (package settings).



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}