---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; MAG4 VERSION CHECK<br/>
# MAG4 VERSION CHECK

This remote procedure checks the version of the Imaging clientapplication. Depending on the version of the VistA Imaging KIDS install,the client application can be forced to display a warning and/orterminate.

## Properties

Property | Value
--- | ---
Label | CHKVER
MUMPS Implementation | [MAGGTU4](http://code.osehra.org/dox/Routine_MAGGTU4_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
CLVER | LITERAL | 30 | true | The client application passes its descriptor as the value of thisparameter. It consists of 3 pieces separated by &#x27;|&#x27;:   |01: Version (Major.Minor.Patch.Build)  |02: empty or &quot;RIV&quot; for remote image view clients  |03: Client name (&quot;CAPTURE&quot;, &quot;CLUTILS&quot;, &quot;DISPLAY&quot;,        &quot;TELEREADER&quot;, or &quot;VISTARAD&quot;) For example, the Clinical Display client Version 3.0 Patch 8 Build (testversion) 21 will pass &quot;3.0.8.21||DISPLAY&quot; as the value of this parameter.If the same client is used for remote image view, the parameter will havethe &quot;3.0.8.21|RIV|DISPLAY&quot; value.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}