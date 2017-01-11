---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIV XPAR DEL 

 property | value 
--- | --- 
 label | DSIV XPAR DEL
 tag | DEL
 routine | [DSIVXPR1](http://code.osehra.org/dox/Routine_DSIVXPR1_source.html)
 return value type | SINGLE VALUE
 description | Delete an existing parameter for an entity for a specific instance

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| DATA | LITERAL | 250 | true | DATA - required - p1~p2~p3~p4 p1 := optional - entity(s) - if not passed, set to \USR\ for                  current user p2 := required - parameter name p3 := optional - instance | 




Generated on January 11th 2017, 6:34:23 am