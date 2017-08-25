---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; MAGV UPDATE PAT PROC REF<br/>
# MAGV UPDATE PAT PROC REF

This RPC allows updating of a procedure that is attached to a patient.

## Properties

Property | Value
--- | ---
Label | UPDPROC
MUMPS Implementation | [MAGVRS05](http://code.osehra.org/dox/Routine_MAGVRS05_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
PROCATTS | LIST | 32000 | true | Input parameters are name-value pairs sent as successive integersubscripts in an array that should be passed in by reference as the secondargument to entry point UPDPROC^MAGVRS05.  The first argument contains thereturned value in an array that should also be passed by reference. The values passed in should be in the format &lt;fname&gt;&#x60;&lt;value&gt;, where &lt;fname&gt; is a field name in the IMAGING PROCEDURE REFERENCE File (#2005.61) and &lt;value&gt; is the value to which that field should be set.
OVERRIDE | LITERAL |  |  | This parameter overrides parent IEN checking.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}