---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; ROR LIST STATES
# ROR LIST STATES

The ROR LIST STATES remote procedure returns a list of states that conformthe search criteria.

Property | Value
--- | ---
Label | STATELST
Routine | [RORRP029](http://code.osehra.org/dox/Routine_RORRP029_source.html)
Return Type | GLOBAL ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
PART | LITERAL | 30 | true | The PART parameter defines the search pattern. If it contains 2 characterabbreviation of the state and the FLAGS parameter contains &quot;A&quot; then thecorresponding state is returned (see the FLAGS parameter for moredetails). Otherwise, the regular search among state names is performed.
FLAGS | LITERAL |  |  | Flags that control the execution (can be combined):   A  Enable abbreviation search. If PART contains 2     character abbreviation, the corresponding state     is returned. If the length of PART parameter is     not equal 2 or it does not contain a valid state     abbreviation then the regular search is performed.   B  Backwards. Traverses the index in the opposite     direction of normal traversal.
NUMBER | LITERAL |  |  | Maximum number of entries to return. A value of &quot;*&quot; or no value in this parameter designates all entries that conform the criteria.
FROM | LITERAL |  |  | The index entry(s) from which to begin the list. Use the pieces of theResults[0] (starting from the second one) to continue the listing in thesubsequent procedure calls.  NOTE: The FROM value itself is not included in the      resulting list.  See description of the LIST^DIC for more details about the PART, NUMBERand FROM parameters.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}