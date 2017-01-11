---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ORVAA VAA 

 property | value 
--- | --- 
 label | ORVAA VAA
 tag | VAA
 routine | [ORVAA](http://code.osehra.org/dox/Routine_ORVAA_source.html)
 return value type | ARRAY
 description | Returns the policy name for a veteran with VA Advantage. If the veteran does not have VA Advantage the return value will be 0.


### Method description

 property | value 
--- | --- 
 Leading comment lines | Returns primary insurance policy name if VAA or TriCare

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| DFN | REFERENCE | 255 | true | The DFN is the veteran patient's Internal Entry Number in the PATIENT file. | 




 ###### Generated on January 11th 2017, 6:39:43 am