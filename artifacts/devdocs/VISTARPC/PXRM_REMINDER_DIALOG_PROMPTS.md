---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; PXRM REMINDER DIALOG PROMPTS
# PXRM REMINDER DIALOG PROMPTS

Additional prompts for a given dialog element

Property | Value
--- | ---
Label | PROMPT
Routine | [PXRMRPCC](http://code.osehra.org/dox/Routine_PXRMRPCC_source.html)
Return Type | ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DIALOG ELEMENT IEN | LITERAL | 16 | true | Reminder dialog element identifier (ien) from REMINDER DIALOG file [#801.41]
CURRENT/HISTORICAL | LITERAL | 16 | true | Used only for taxonomy dialogs.   0 - Current Diagnosis/Procedure 1 - Historical Diagnosis/Procedure
DIALOG LINE CPT/POV | LITERAL | 3 | true | For taxonomy dialog the type of finding (POV/CPT) for this dialog line



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}