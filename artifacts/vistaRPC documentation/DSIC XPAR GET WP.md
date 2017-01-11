---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIC XPAR GET WP 

 property | value 
--- | --- 
 label | DSIC XPAR GET WP
 tag | GETWP
 routine | [DSICXPR](http://code.osehra.org/dox/Routine_DSICXPR_source.html)
 return value type | ARRAY
 description | This will return text for a word processing type parameter for an entity and instance.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| DATA | LITERAL | 250 | true | DATA - required - p1~p2~p3 p1 := optional - entity - if not passed, set to \USR\ for                  current user p2 := required - parameter name p3 := optional - instance | 