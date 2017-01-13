---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; IBD GET INPUT OBJECT BY CLINIC 

 property | value 
--- | --- 
 label | {::nomarkdown}IBD GET INPUT OBJECT BY CLINIC{:/}
 tag | {::nomarkdown}CLNLSTI{:/}
 routine | [IBDFRPC](http://code.osehra.org/dox/Routine_IBDFRPC_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns a list of input objects on all encounter forms defined for aclinic in the clinic setup.  There are 3 types of input objects,lists, hand print fields, and multiple choice fields.  Each has itsown set of unique characterists for input.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}CLINIC{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}30{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the pointer to file 44 or a unique clinic name.{:/} | 




 Generated on January 13th 2017, 7:11:26 am