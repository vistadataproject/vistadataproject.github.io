---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; MAGV CREATE PAT REF<br/>
# MAGV CREATE PAT REF

This RPC allows for creation of an Imagingpatient reference to which proceduresand studies may be attached.

## Properties

Property | Value
--- | ---
Label | CREPAT
MUMPS Implementation | [MAGVRS06](http://code.osehra.org/dox/Routine_MAGVRS06_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
PATIDATTS | LIST | 32000 | true | Input parameters are name-value pairs sent as successive integer subscripts in an array that should be passed in by reference as the secondargument to entry point CREPAT^MAGVRS06.  The first argument contains thereturned value in an array that should also be passed by reference. The values passed in should be in the format &lt;fname&gt;&#x60;&lt;value&gt;, where &lt;fname&gt; is a field name in the IMAGING PATIENT REFERENCE File (#2005.6) and &lt;value&gt; is the value to which that field should be set.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}