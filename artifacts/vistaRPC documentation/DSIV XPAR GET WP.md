---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIV XPAR GET WP 

 property | value 
--- | --- 
 label | DSIV XPAR GET WP
 tag | GETWP
 routine | [DSIVXPR1](http://code.osehra.org/dox/Routine_DSIVXPR1_source.html)
 return value type | ARRAY
 description | This will return text for a word processing type parameter for an entityand instance.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| DATA | LITERAL | 250 | true | DATA - required - p1~p2~p3 p1 := optional - entity - if not passed, set to \USR\ for                  current user p2 := required - parameter name p3 := optional - instance | 




 Generated on January 11th 2017, 7:15:04 am