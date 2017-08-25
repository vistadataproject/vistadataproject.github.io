---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; MAGV UPDATE STUDY<br/>
# MAGV UPDATE STUDY

This RPC allows an IMAGE STUDY File (#2005.62) entry to be updated.

## Properties

Property | Value
--- | ---
Label | UPDSTUDY
MUMPS Implementation | [MAGVRS01](http://code.osehra.org/dox/Routine_MAGVRS01_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
STUDYATTS | LIST |  |  | Input parameters are name-value pairs sent as successive integersubscripts in an array that should be passed in by reference as the secondargument to entry point UPDSTUDY^MAGVRS01.  The first argument willcontain the returned value in an array that should also be passed byreference.  The values passed in should be in the format &lt;fname&gt;&#x60;&lt;value&gt;, where&lt;fname&gt; is a field name in the IMAGE STUDY File (#2005.62) and &lt;value&gt;is the value to which that field should be set.
OVERRIDE | LITERAL |  |  | This parameter overrides parent IEN checking.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}