---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIROI GETCMTS GET COMMENTS 

 property | value 
--- | --- 
 label | DSIROI GETCMTS GET COMMENTS
 tag | GETCMTS
 routine | [DSIROI](http://code.osehra.org/dox/Routine_DSIROI_source.html)
 return value type | GLOBAL ARRAY
 description | This routine can return a set of comments including patient comments from the 5345, internal comments, and alerts. 

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| IEN | LITERAL | 60 | true | IEN = Request internal number      or       If SEL = \R\ This is the patient DFN | 
| SEL | LITERAL | 5 | true |  SEL = COMMENT SELECTION (required)     This is a string that will select what type of comments to return        I = INTERNAL COMMENTS (.32 FIELD)       P = PATIENT COMMENTS (.31 FIELD)       A = ALERTS FROM 19620.98       R = PATIENT RECORD - In this case the IEN is the patient DFN.           If R is selected, it must be the only selection.      If more than one type of comment is desired, send the selection in a     carrot delimited string (ie. 'A^P^I'). The data will be returned in     the order it is requested. | 




 Generated on January 11th 2017, 7:15:04 am