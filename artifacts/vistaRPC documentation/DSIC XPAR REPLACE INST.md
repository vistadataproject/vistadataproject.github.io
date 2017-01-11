---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIC XPAR REPLACE INST 

 property | value 
--- | --- 
 label | DSIC XPAR REPLACE INST
 tag | REPL
 routine | [DSICXPR](http://code.osehra.org/dox/Routine_DSICXPR_source.html)
 return value type | SINGLE VALUE
 description | For an existing entity/parameter/instance, this will change the value of that instance

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| DATA | LITERAL | 250 | true | DATA = p1~p2~p3~~p5  where  p1 - entity - optional - defaults to \USR\  p2 - parameter - required  p3 - instance - required - current instance value  p5 - required - replacement value for current instance | 




 Generated on January 11th 2017, 7:15:04 am