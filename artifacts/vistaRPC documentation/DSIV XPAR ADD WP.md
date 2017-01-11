---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIV XPAR ADD WP 

 property | value 
--- | --- 
 label | DSIV XPAR ADD WP
 tag | ADDWP
 routine | [DSIVXPR](http://code.osehra.org/dox/Routine_DSIVXPR_source.html)
 return value type | SINGLE VALUE
 description | This RPC will allow the addition of a new Word-processing type systemparameter.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| DATA | LITERAL | 250 | true | DATA - required - p1~p2~p3  p1 := optional - entity - if not passed, defaults to SYS for current                            user.   p2 := required - parameter name  p3 := optional - instance (defaults to 1) | 
| ARRAY | LIST | 250 | true | Array of text to add to the parameter where:  ARRAY(0) = 1st line of text  ARRAY(1) = 2nd line of text  ARRAY(n) = nth line of text   ARRAY(n)=\\ to store blank lines of text, such as paragraph separation. | 




Generated on January 11th 2017, 6:34:23 am