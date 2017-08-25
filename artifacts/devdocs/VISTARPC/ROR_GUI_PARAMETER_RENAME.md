---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ROR GUI PARAMETER RENAME<br/>
# ROR GUI PARAMETER RENAME

The ROR GUI PARAMETER RENAME remote procedure renames the instance of the parameter.

## Properties

Property | Value
--- | ---
Label | RENPARM
MUMPS Implementation | [RORRP038](http://code.osehra.org/dox/Routine_RORRP038_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
ENTITY | LITERAL | 30 | true | The ENTITY parameter defines the context that the parameter value isassociated with.  The values that are used most often are the &quot;USR&quot; (user settings) and &quot;PKG&quot; (package settings).  See the DBIA #2263 for more details.
NAME | LITERAL | 30 | true | The NAME parameter defines the name of the GUI parameter.
OLDINST | LITERAL | 60 | true | Current instance name of the GUI parameter.
NEWINST | LITERAL | 60 | true | New instance name for the GUI parameter.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}