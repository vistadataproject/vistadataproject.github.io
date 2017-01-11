---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIR UPDATE BILL 

 property | value 
--- | --- 
 label | DSIR UPDATE BILL
 tag | UPDBILL
 routine | [DSIRBIL](http://code.osehra.org/dox/Routine_DSIRBIL_source.html)
 return value type | SINGLE VALUE
 description | This RPC is used to create and edit the ROI Bill entries.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| REQN | LITERAL | 999 | true | Request pointer to file 19620 | 
| BILN | LITERAL | 9999 | true | Internal Entry Number to file 19620.2 (Optional)If null new entry in 19620.2 will be created | 
| DATA | LIST | 999 | true | Array of data for the fields in file 19620.2 (Required)Format of Array:        Field Number ^ Internal Data Value          .01^12345        .02^3030911 | 




 Generated on January 11th 2017, 7:15:04 am