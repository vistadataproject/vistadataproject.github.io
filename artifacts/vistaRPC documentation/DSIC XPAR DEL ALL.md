---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIC XPAR DEL ALL 

 property | value 
--- | --- 
 label | DSIC XPAR DEL ALL
 tag | DELALL
 routine | [DSICXPR](http://code.osehra.org/dox/Routine_DSICXPR_source.html)
 return value type | SINGLE VALUE
 description | This is used to delete the value for all instances of a parameter for a given entity

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | DATA | LITERAL | 250 | true | DATA - required - p1~p2 p1 := optional - entity(s) - if not passed, set to \USR\ for                  current user p2 := required - parameter name | 