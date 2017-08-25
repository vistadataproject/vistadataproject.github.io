---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; DSIC DDR UPDATE SUBFILE<br/>
# DSIC DDR UPDATE SUBFILE

This will add a new record to a multiple in a file.   The multiple can be at any level as long as the IENS is properly defined.  Additional fields can filed with the record.

## Properties

Property | Value
--- | ---
Label | UPDATE1
MUMPS Implementation | [DSICDDR0](http://code.osehra.org/dox/Routine_DSICDDR0_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
FILE | LITERAL | 20 | true | This is the number of the subfile to which a new record is to be added
IENS | LITERAL | 50 | true | This is the standard Fileman DBS parameter for calling UPDATE^DIE when adding a record to a multiple in a file.  If IENS is not passed or is passed as &lt;null&gt;, then this will add the record at the top level of the file.
DATA | LIST | 250 | true | This is a list of fields and their internal values to be filed with thenew record.  Obviously the .01 field should have a value to be filed.  Theformat of the DATA array: DATA(field#)&#x3D;value On the GUI side this would be:  Param.List[&#x27;field#&#x27;] :&#x3D; value



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}