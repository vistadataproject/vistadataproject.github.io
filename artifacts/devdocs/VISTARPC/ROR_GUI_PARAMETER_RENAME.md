---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; ROR GUI PARAMETER RENAME
# ROR GUI PARAMETER RENAME

The ROR GUI PARAMETER RENAME remote procedure renames the instance of the parameter.

Property | Value
--- | ---
Label | RENPARM
Routine | [RORRP038](http://code.osehra.org/dox/Routine_RORRP038_source.html)
Return Type | ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
ENTITY | LITERAL | 30 | true | The ENTITY parameter defines the context that the parameter value isassociated with.  The values that are used most often are the &quot;USR&quot; (user settings) and &quot;PKG&quot; (package settings).  See the DBIA #2263 for more details.
NAME | LITERAL | 30 | true | The NAME parameter defines the name of the GUI parameter.
OLDINST | LITERAL | 60 | true | Current instance name of the GUI parameter.
NEWINST | LITERAL | 60 | true | New instance name for the GUI parameter.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}