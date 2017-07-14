---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; DSIV DDR UPDATE SUBFILE<br/>
# DSIV DDR UPDATE SUBFILE

 This will add a new record to a multiple in a file.   The multiple can be at any level as long as the IENS is properly defined.  Additional fields can filed with the record.

## Properties

Property | Value
--- | ---
Label | UPDATE1
Routine | [DSIVDDR0](http://code.osehra.org/dox/Routine_DSIVDDR0_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
FILE | LITERAL | 20 | true |  This is the number of the subfile to which a new record is to be added
IENS | LITERAL | 50 | true |  This is the standard Fileman DBS parameter for calling UPDATE^DIE when adding a record to a multiple in a file.  If IENS is not passed or is passed as &lt;null&gt;, then this will add the record at the top level of the file.
DATA | LIST | 250 | true |  This is a list of fields and their internal values to be filed with the new record.  Obviously the .01 field should have a value to be filed.   The format of the DATA array: DATA(field#)&#x3D;value  On the GUI side this would be:  Param.List[&#x27;field#&#x27;] :&#x3D; value



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}