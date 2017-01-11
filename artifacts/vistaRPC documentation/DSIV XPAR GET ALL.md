---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIV XPAR GET ALL 

 property | value 
--- | --- 
 label | DSIV XPAR GET ALL
 tag | GETALL
 routine | [DSIVXPR2](http://code.osehra.org/dox/Routine_DSIVXPR2_source.html)
 return value type | GLOBAL ARRAY
 description | This will return all entities for a given parameter and instance

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| DATA | LITERAL | 250 | true | DATA - required - p1~p2~p3~~~p6  p1 := optional - screen results to specific entity type                 - i.e. SYS or USR; or USR.`<DUZ>  p2 := required - parameter name  p3 := optional - instance  p6 := optional - format code - default=Q, anything else besides Q or                   <null> will be treated as code B | 




 ###### Generated on January 11th 2017, 6:39:43 am