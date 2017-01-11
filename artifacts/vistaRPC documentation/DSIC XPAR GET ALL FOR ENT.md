---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIC XPAR GET ALL FOR ENT 

 property | value 
--- | --- 
 label | DSIC XPAR GET ALL FOR ENT
 tag | GET
 routine | [DSICXPR](http://code.osehra.org/dox/Routine_DSICXPR_source.html)
 return value type | ARRAY
 description | This will get all instances of a parameter for an entity

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| DATA | LITERAL | 250 | true | DATA - required - p1~p2~~~~p6 p1 := optional - entity(s) - if not passed, set to \USR\ for                  current user p2 := required - parameter name p6 := optional - format code determines return values       Q - internal instance, internal value       E - external instance, external value       N - external instance, internal value       B - internal & external instances and values           [default value] Actually, p6 is ignored and is always set to B | 