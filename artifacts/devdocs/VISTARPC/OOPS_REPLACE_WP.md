---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; OOPS REPLACE WP
# OOPS REPLACE WP

This call will replace Word Processing fields based on input paramtersindicating the file, field and IEN of the record that will be changed. Anotherinput parameter contains the data via a list or pointer that will be placedinto the "new" word processing fields. 

Property | Value
--- | ---
Label | REPLWP
Routine | [OOPSGUI2](http://code.osehra.org/dox/Routine_OOPSGUI2_source.html)
Return Type | ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
INPUT | LITERAL |  | true | The input parameter must contain the file,field and IEN of the record to bemodified. It must be in the formatFILE^FIELD^IEN.
DATA | LIST |  | true | This is the new text that will be inserted into the word processing field.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}