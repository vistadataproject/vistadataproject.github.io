---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; DSIV DDR UPDATE FILE<br/>
# DSIV DDR UPDATE FILE

This will add a new record to a file, but only at the top level of the file.   It does not allow for adding a new record to a multiple. Additional fields to be filed at the same time can be passed.

## Properties

Property | Value
--- | ---
Label | UPDATE
MUMPS Implementation | [DSIVDDR0](http://code.osehra.org/dox/Routine_DSIVDDR0_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
FILE | LITERAL | 20 | true | This is the number of the file for which a new record is to be added
DATA | LIST | 250 | true | This is a list of fields which will have data for filing with the newrecord.  Obviously the .01 field must be present.  Format of data array:  DATA(field#)&#x3D;internal value   On the GUI side, Param.List[&#x27;field#&#x27;]&#x3D; value



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}