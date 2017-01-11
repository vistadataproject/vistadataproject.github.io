---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIC XPAR GET VALUE 

 property | value 
--- | --- 
 label | DSIC XPAR GET VALUE
 tag | GET1
 routine | [DSICXPR](http://code.osehra.org/dox/Routine_DSICXPR_source.html)
 return value type | SINGLE VALUE
 description | This will return the value of a single entity/param/instance

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| DATA | LITERAL | 250 | true | DATA - required - p1~p2~p3~~~p6 p1 := optional - entity - if not passed, set to \USR\ for                  current user p2 := required - parameter name p3 := optional - instance p6 := optional - format code determines return values       Q - internal value - [default]       E - external value       B - internal^external values | 




 Generated on January 11th 2017, 7:15:04 am