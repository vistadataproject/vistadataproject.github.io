---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; OOPS WITNESS CREATE<br/>
# OOPS WITNESS CREATE

This broker call will add a new Witness record for a case in the ASISTS Accident Reporting File (#2260).  It is called by the CA1 form in Delphi. 

## Properties

Property | Value
--- | ---
Label | ADDWITN
MUMPS Implementation | [OOPSGUI2](http://code.osehra.org/dox/Routine_OOPSGUI2_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
IEN | LITERAL |  | true | This is the IEN for the case in file 2260 that is having the witness info created.
INFO | LITERAL |  | true | This is the Name, Street, City, State, Zip, and Date of Witness Signature. Itmust be in format... NAME^STREET^CITY^STATE^ZIP^DATESIGNED
CMNT |  |  |  | 
COMMENT | LITERAL | 256 | true | The input will be a string containing the comment to be added/associated withthe witness record created. 



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}