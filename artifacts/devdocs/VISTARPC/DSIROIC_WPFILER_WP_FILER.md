---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; DSIROIC WPFILER WP FILER<br/>
# DSIROIC WPFILER WP FILER

This RPC is used to update comments is several places withing the Release of Information Record Manager (ROI/DSIR)

## Properties

Property | Value
--- | ---
Label | WPFILER
MUMPS Implementation | [DSIROIC](http://code.osehra.org/dox/Routine_DSIROIC_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
IEN | LITERAL | 20 | true | The IEN (Internal Entry Number) is the location within the file where the data is to be filed.
TYPE | LITERAL | 1 | true |  TYPE    - Must be &quot;C&quot;, &quot;I&quot;, &quot;A&quot;, OR &quot;R&quot; as follows:           Regular comments (19620,.31)(C)           Internal Comments (19620,.32)(I)            Annotations (19620.98,100)(A)           Released Document Comment (19620.1,1)(R)
STRLIST | LIST | 9999 | true | STRLIST - List (ARRAY) of lines to be filed



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}