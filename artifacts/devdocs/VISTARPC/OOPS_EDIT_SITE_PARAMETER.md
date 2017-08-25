---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; OOPS EDIT SITE PARAMETER<br/>
# OOPS EDIT SITE PARAMETER

This broker call files changes to the Site Parameter File (#2262) name and District Office, if made.

## Properties

Property | Value
--- | ---
Label | PARMEDT
MUMPS Implementation | [OOPSGUI6](http://code.osehra.org/dox/Routine_OOPSGUI6_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
INPUT | LITERAL | 256 | true | This input parameter contains the IEN of the Site Parameter File (#2262), theSite Parameter Name, and the District Office.  The format is:IEN^SITE NAME^DISTRICT OFFICE NAME.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}