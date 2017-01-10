---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIC XPAR CHG WP 

 property | value 
--- | --- 
 label | DSIC XPAR CHG WP
 tag | CHGWP
 routine | [DSICXPR](http://code.osehra.org/dox/Routine_DSICXPR_source.html)
 return value type | ARRAY
 description | This will change an instance of a System Parameter that is of the Word Processing type.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | DATA | LITERAL | 250 | true | DATA - required - p1~p2~p3  p1 := optional - entity - if not passed, set to \SYS\ for                   current user.  p2 := required - parameter name  p3 := optional - instance (default is 1) RETURN PARAMETER DESCRIPTION: Returns \1^\ on success        \-1^Error Message\ on failure | 
| vs:Input_Parameter-8994_02 | ARRAY | LIST | 250 | true | This is an array of the text to be stored in the parameter. Format is: ARRAY(1)=1st line of TextARRAY(2)=2nd line of TextARRAY(n)=nth line of Text ARRAY(n)=\\ to store blank lines for formatting, such as paragraph             separation. | 