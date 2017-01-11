---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIV XPAR REPLACE INST 

 property | value 
--- | --- 
 label | DSIV XPAR REPLACE INST
 tag | REPL
 routine | [DSIVXPR1](http://code.osehra.org/dox/Routine_DSIVXPR1_source.html)
 return value type | SINGLE VALUE
 description | For an existing entity/parameter/instance, this will change the value ofthat instance

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| DATA | LITERAL | 250 | true | DATA = p1~p2~p3~~p5  where  p1 - entity - optional - defaults to \USR\  p2 - parameter - required  p3 - instance - required - current instance value  p5 - required - replacement value for current instance | 