---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; OOPS GET 2260 DATA 

 property | value 
--- | --- 
 label | OOPS GET 2260 DATA
 tag | GET
 routine | [OOPSGUI2](http://code.osehra.org/dox/Routine_OOPSGUI2_source.html)
 return value type | ARRAY
 description | This broker call will return data from ASISTS file 2260. The fields (in the array) returned will vary depending on the input parameter.One field of the input parameter is FORM. If the claim is for a 2162, all the fields associated with \2162\ nodes along with zero nodes will be returned.If the form is either CA1 or CA2 all associated nodes will be returned inaddition to the zero and \CA\ nodes.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| INPUT | LITERAL |  | true | The input parameter must include the ASISTS IEN and the form type of datato be retrieved. These parameters must be separated by the caret character. Ie.165^2162.Valid form values are CA1, CA2, or 2162. | 
| PERS |  |  |  |  | 