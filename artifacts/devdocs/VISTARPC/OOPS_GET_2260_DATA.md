---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; OOPS GET 2260 DATA
# OOPS GET 2260 DATA

This broker call will return data from ASISTS file 2260. The fields (in the array) returned will vary depending on the input parameter.One field of the input parameter is FORM. If the claim is for a 2162, all the fields associated with "2162" nodes along with zero nodes will be returned.If the form is either CA1 or CA2 all associated nodes will be returned inaddition to the zero and "CA" nodes.

Property | Value
--- | ---
Label | GET
Routine | [OOPSGUI2](http://code.osehra.org/dox/Routine_OOPSGUI2_source.html)
Return Type | ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
INPUT | LITERAL |  | true | The input parameter must include the ASISTS IEN and the form type of datato be retrieved. These parameters must be separated by the caret character. Ie.165^2162.Valid form values are CA1, CA2, or 2162.
PERS |  |  |  | 



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}