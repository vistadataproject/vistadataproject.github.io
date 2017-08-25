---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; OOPS REPLACE WP<br/>
# OOPS REPLACE WP

This call will replace Word Processing fields based on input paramtersindicating the file, field and IEN of the record that will be changed. Anotherinput parameter contains the data via a list or pointer that will be placedinto the "new" word processing fields. 

## Properties

Property | Value
--- | ---
Label | REPLWP
MUMPS Implementation | [OOPSGUI2](http://code.osehra.org/dox/Routine_OOPSGUI2_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
INPUT | LITERAL |  | true | The input parameter must contain the file,field and IEN of the record to bemodified. It must be in the formatFILE^FIELD^IEN.
DATA | LIST |  | true | This is the new text that will be inserted into the word processing field.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}