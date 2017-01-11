---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIROI4 BTCH BATCH PROCESSING 

 property | value 
--- | --- 
 label | DSIROI4 BTCH BATCH PROCESSING
 tag | BTCH
 routine | [DSIROI4](http://code.osehra.org/dox/Routine_DSIROI4_source.html)
 return value type | SINGLE VALUE
 description | This RPC clones requests in a batch manner.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| TYPE | LITERAL | 1 | true | The type of cloning (1=multi patient, 2=multi requestors) | 
| IEN | LITERAL | 30 | true | The IEN of the request being cloned from 19620. | 
| SELLIST | LIST | 60 | true | A list of requestors or patients as follows:   REQUESTOR IEN^REQUESTOR ADDRESS IEN   or   PATIENT IEN^PATIENT ADDRESS IEN^PATIENT ADDRESS IEN^ADDRESS TYPE           (PATIENT IEN MUST BE FULLY QUALIFIED) | 




 Generated on January 11th 2017, 7:15:04 am