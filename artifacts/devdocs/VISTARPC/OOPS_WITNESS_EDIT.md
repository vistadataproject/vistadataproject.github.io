---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; OOPS WITNESS EDIT
# OOPS WITNESS EDIT

This broker call files any changes entered on an existing Witness.

Property | Value
--- | ---
Label | EDTWITN
Routine | [OOPSGUI2](http://code.osehra.org/dox/Routine_OOPSGUI2_source.html)
Return Type | ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
INPUT | LITERAL | 256 | true | This input parameter contains the IEN and Witness Number for the Witnessbeing entered.  It is in the format: IEN^WIT.
INFO | LITERAL | 256 |  | This input parameter contains the address information for the witness. It isin the format: NAME^STREET^CITY^STATE^ZIP^DATE SIGNED.
CMNT | LITERAL | 256 |  | This input parameter contains the text for the Witness Comment.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}