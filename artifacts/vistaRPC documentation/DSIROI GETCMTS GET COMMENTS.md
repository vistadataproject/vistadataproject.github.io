---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; DSIROI GETCMTS GET COMMENTS 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}DSIROI GETCMTS GET COMMENTS{:/}
 tag | {::nomarkdown}GETCMTS{:/}
 routine | [DSIROI](http://code.osehra.org/dox/Routine_DSIROI_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}This routine can return a set of comments including patient comments from the 5345, internal comments, and alerts. {:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}IEN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}60{:/} | {::nomarkdown}true{:/} | {::nomarkdown}IEN = Request internal number      or       If SEL = \R\ This is the patient DFN{:/} | 
| {::nomarkdown}SEL{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}5{:/} | {::nomarkdown}true{:/} | {::nomarkdown} SEL = COMMENT SELECTION (required)     This is a string that will select what type of comments to return        I = INTERNAL COMMENTS (.32 FIELD)       P = PATIENT COMMENTS (.31 FIELD)       A = ALERTS FROM 19620.98       R = PATIENT RECORD - In this case the IEN is the patient DFN.           If R is selected, it must be the only selection.      If more than one type of comment is desired, send the selection in a     carrot delimited string (ie. 'A^P^I'). The data will be returned in     the order it is requested.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 7:40:09 am</p>{:/}