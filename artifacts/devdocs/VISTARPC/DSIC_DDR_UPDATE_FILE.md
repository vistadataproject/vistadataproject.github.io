---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; DSIC DDR UPDATE FILE
# DSIC DDR UPDATE FILE

This will add a new record to a file, but only at the top level of the file.   It does not allow for adding a new record to a multiple.  Additional fields to be filed at the same time can be passed.

Property | Value
--- | ---
Label | UPDATE
Routine | [DSICDDR0](http://code.osehra.org/dox/Routine_DSICDDR0_source.html)
Return Type | ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
FILE | LITERAL | 20 | true | This is the number of the file for which a new record is to be added
DATA | LIST | 250 | true | This is a list of fields which will have data for filing with the new record.  Obviously the .01 field must be present.  Format of data array:  DATA(field#)&#x3D;internal value   On the GUI side, Param.List[&#x27;field#&#x27;]&#x3D; value



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}