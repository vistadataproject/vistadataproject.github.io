---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; VPS GET PRINTERS 

 property | value 
--- | --- 
 label | VPS GET PRINTERS
 tag | DEVICE
 routine | [VPSPRINT](http://code.osehra.org/dox/Routine_VPSPRINT_source.html)
 return value type | ARRAY
 description | This RPC returns up to 20 entries from the device file based on Input Criteria.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| FROM | LITERAL | 50 | true | This input parameter is used to filter the output by returning result start with or start from (up to 20 printers). Example: Input Parameter \B\ will return all printers (up to 20) start *with* \B\Example: Input Parameter \B*\ will return all printers (up to 20) start *from* \B\ | 
| DIR | LITERAL | 2 | true | This input parameter causes output result to be sorted in printer name ascending or descending order.Input Parameter: 1 (return printer names in ascending order)Input Parameter: -1 (return printer names in descending order) | 




Generated on January 11th 2017, 6:34:23 am