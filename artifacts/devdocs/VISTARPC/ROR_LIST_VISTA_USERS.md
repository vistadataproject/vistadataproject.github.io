---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ROR LIST VISTA USERS<br/>
# ROR LIST VISTA USERS

The ROR LIST VISTA USERS remote procedure returns a list of users from theNEW PERSON file (#200).

## Properties

Property | Value
--- | ---
Label | USERLIST
Routine | [RORRP024](http://code.osehra.org/dox/Routine_RORRP024_source.html)
Return Type | GLOBAL ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
PART | LITERAL | 30 | true | The PART parameter defines the search pattern. It should contain thebeginning of the user&#x27;s name.
FLAGS | LITERAL |  |  | Flags that control the execution (can be combined):   B  Backwards. Traverses the index in the opposite     direction of normal traversal.   D  Get default division for each user   P  Select providers only (check for the PROVIDER     security key).
NUMBER | LITERAL |  |  | Maximum number of entries to return. A value of &quot;*&quot; or no value in this parameter designates all entries that conform the criteria.
FROM | LITERAL |  |  | The index entry(s) from which to begin the list. Use the pieces of theResults[0] (starting from the second one) to continue the listing in thesubsequent procedure calls. NOTE: The FROM value itself is not included in the      resulting list. See description of the LIST^DIC for more details about the PART, NUMBERand FROM parameters.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}