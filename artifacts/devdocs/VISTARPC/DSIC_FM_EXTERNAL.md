---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; DSIC FM EXTERNAL<br/>
# DSIC FM EXTERNAL

This will convert an internal formatted data to external format.  This differs from the GET Fileman calls in that a record ien is not required.  However, it is the responsibility of the developer to make sure that for the particular file (or subfile) and field that the DD will output the data without an internal number (e.g., DA is not defined).

## Properties

Property | Value
--- | ---
Label | EXTERNAL
MUMPS Implementation | [DSICFM06](http://code.osehra.org/dox/Routine_DSICFM06_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
FILE | LITERAL | 20 | true | This is the number of the file (or subfile) which has that field.
FIELD | LITERAL | 15 | true | This is the field number for the data to be converted to external.
VALUE | LITERAL | 100 | true | This is the value in internal Fileman format to be converted to external format.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}