---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIV XPAR CHGWP 

 property | value 
--- | --- 
 label | DSIV XPAR CHGWP
 tag | CHGWP
 routine | [DSIVXPR](http://code.osehra.org/dox/Routine_DSIVXPR_source.html)
 return value type | ARRAY
 description | This will change an instance of a Word processing parameter.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | DATA | LITERAL | 250 | true | DATA - required - p1~p2~p3  p1 := optional - entity - if not passed, set to \SYS\ for                   current user.  p2 := required - parameter name  p3 := optional - instance (default is 1) | 
| vs:Input_Parameter-8994_02 | ARRAY | LIST | 250 | true | This is an array of the text to be stored in the parameter. The format is: ARRAY(1)=1st line of TextARRAY(2)=2nd line of TextARRAY(n)=nth line of Text ARRAY(n)=\\ to store blank lines for formatting, such as paragraph             separation. | 