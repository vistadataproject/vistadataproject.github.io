---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; IBD GET INPUT OBJECT BY FORM 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}IBD GET INPUT OBJECT BY FORM{:/}
 tag | {::nomarkdown}FRMLSTI{:/}
 routine | [IBDFRPC](http://code.osehra.org/dox/Routine_IBDFRPC_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns a list of input objects on one encounter forms .There are 3 types of input objects,lists, hand print fields, and multiple choice fields.  Each has itsown set of unique characterists for input.  {:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}FRM{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}40{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Input the pointer to the encounter form file or the unique name of theencounter form{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on February 3rd 2017, 7:02:03 am</p>{:/}