---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ROR LIST ICD<br/>
# ROR LIST ICD

The ROR LIST ICD remote procedure returns a list of ICD codes (fromthe ICD DIAGNOSIS or ICD OPERATION/PROCEDURE file), which conform thecriteria.                                      

## Properties

Property | Value
--- | ---
Label | ICDLIST
Routine | [RORRP016](http://code.osehra.org/dox/Routine_RORRP016_source.html)
Return Type | GLOBAL ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
PART | LITERAL | 30 |  | The partial match restriction.
FLAGS | LITERAL |  |  | Flags that control the execution (can be combined):   A  Exclude active codes   B  Backwards. Traverses the index in the opposite     direction of normal traversal   D  Full search by description   F  Exclude codes applicable to females only   I  Exclude inactive codes   K  Search in description keywords   M  Exclude codes applicable to males only   0  Return operation/procedure codes from the ICD      OPERATION/PROCEDURE file (#80.1) instead of      diagnosis codes from the ICD DIAGNOSIS file (#80)   P  Exclude codes that are not acceptable     as primary diagnoses
NUMBER | LITERAL |  |  | Maximum number of entries to return. A value of &quot;*&quot; or no value in this parameter designates all entries.
FROM | LITERAL |  |  | The index entry(s) from which to begin the list   ^01: FromName   ^02: FromIEN  For example, a FROM value of &quot;18&quot; would list entries following 18. You canuse the 2-nd and 3-rd &quot;^&quot;- pieces of the Results[0] to continue thelisting in the subsequent procedure calls.  NOTE: The FROM value itself is not included in the      resulting list.  See description of the LIST^DIC for more details about the PART, NUMBER and FROM parameters.
DATE | LITERAL |  |  | Date for the code set versioning.
ICDTYPE | LITERAL |  | true | Flag that controls whether ICD-9 or ICD-10 codes are searched.  ICD9  -  For ICD-9 codes search  ICD10 -  For ICD-10 codes search



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}