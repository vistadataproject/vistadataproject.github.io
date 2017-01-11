---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIV XPAR DEL ALL 

 property | value 
--- | --- 
 label | DSIV XPAR DEL ALL
 tag | DELALL
 routine | [DSIVXPR1](http://code.osehra.org/dox/Routine_DSIVXPR1_source.html)
 return value type | SINGLE VALUE
 description | This is used to delete the value for all instances of a parameter for agiven entity

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| DATA | LITERAL | 250 | true | DATA - required - p1~p2 p1 := optional - entity(s) - if not passed, set to \USR\ for                  current user p2 := required - parameter name | 




 ###### Generated on January 11th 2017, 6:39:43 am