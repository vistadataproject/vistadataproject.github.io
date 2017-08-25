---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; OOPS WITNESS EDIT<br/>
# OOPS WITNESS EDIT

This broker call files any changes entered on an existing Witness.

## Properties

Property | Value
--- | ---
Label | EDTWITN
MUMPS Implementation | [OOPSGUI2](http://code.osehra.org/dox/Routine_OOPSGUI2_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
INPUT | LITERAL | 256 | true | This input parameter contains the IEN and Witness Number for the Witnessbeing entered.  It is in the format: IEN^WIT.
INFO | LITERAL | 256 |  | This input parameter contains the address information for the witness. It isin the format: NAME^STREET^CITY^STATE^ZIP^DATE SIGNED.
CMNT | LITERAL | 256 |  | This input parameter contains the text for the Witness Comment.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}