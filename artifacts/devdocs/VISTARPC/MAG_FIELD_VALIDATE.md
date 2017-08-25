---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; MAG FIELD VALIDATE<br/>
# MAG FIELD VALIDATE

This provides an interface with the VA Fileman Database Server (DBS)API for the single field validator: VAL^DIE.

## Properties

Property | Value
--- | ---
Label | DVAL
MUMPS Implementation | [MAGQBUT4](http://code.osehra.org/dox/Routine_MAGQBUT4_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
FILE | LITERAL | 99 | true | This is the file number that contains the attribute to be validated.
IENS | LITERAL | 99 | true | This is the record number or place holder of the entry being validated.
FIELD | LITERAL | 99 | true | This is the number of the file attribute to be validated.
FLAGS | LITERAL | 99 | true | This is the option set of parameters defined for the VAL^DIEE External value is returned in RESULT(0). F FDA node is set for valid data in array identified by FDA_ROOT. H Help (single ?) is returned if VALUE is not valid. R Record identified by IENS is verified to exist and to be editable. Donot  include &quot;R&quot; if there are placeholders in the IENS. U Don&#x27;t perform key validation. Without this flag, the data in VALUE ischecked to ensure that no duplicate keys are created and that key field values are not deleted.
VALUE | LITERAL | 99 | true | This is the value to be validated.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}