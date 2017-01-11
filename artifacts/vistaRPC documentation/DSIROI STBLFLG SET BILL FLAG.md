---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIROI STBLFLG SET BILL FLAG 

 property | value 
--- | --- 
 label | DSIROI STBLFLG SET BILL FLAG
 tag | STBLFLG
 routine | [DSIROI](http://code.osehra.org/dox/Routine_DSIROI_source.html)
 return value type | SINGLE VALUE
 description | This routine checks the requestor attached to a request to see if there are any outstanding bills other than the current request. 

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| IEN | LITERAL | 20 | true | This is the IEN of the request whose reqyestor is being checked for an outstanding balance. | 




 ###### Generated on January 11th 2017, 6:39:43 am