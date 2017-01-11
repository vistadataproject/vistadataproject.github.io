---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIC XPAR GET ALL 

 property | value 
--- | --- 
 label | DSIC XPAR GET ALL
 tag | GETALL
 routine | [DSICXPR](http://code.osehra.org/dox/Routine_DSICXPR_source.html)
 return value type | GLOBAL ARRAY
 description | This will return all entities for a given parameter and instance

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| DATA | LITERAL | 250 | true | DATA - required - ~p2~p3~~~p6 p2 := required - parameter name p3 := optional - instance p6 := optional - format code - default=Q, anything else besides Q or                   <null> will be treated as code B | 




 ###### Generated on January 11th 2017, 6:39:43 am